#!/usr/bin/env bash
set -euo pipefail

ZONE_ID="${CLOUDFLARE_ZONE_ID:?CLOUDFLARE_ZONE_ID is required}"
TOKEN="${CLOUDFLARE_DNS_API_TOKEN:?CLOUDFLARE_DNS_API_TOKEN is required}"
RECORD_NAME="${DELEGATED_ZONE_NAME:-sites.supernovahorizon.com}"
NS_VALUES="${ROUTE53_NAME_SERVERS:?ROUTE53_NAME_SERVERS is required}"

IFS=',' read -r -a expected_nameservers <<< "${NS_VALUES}"

api_get_records() {
  local record_type="${1}"
  curl -fsS -G "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
    -H "Authorization: Bearer ${TOKEN}" \
    --data-urlencode "name=${RECORD_NAME}" \
    --data-urlencode "type=${record_type}"
}

existing_all="$(api_get_records "")"
if echo "${existing_all}" | python3 -c "import sys,json; d=json.load(sys.stdin); records=d.get('result',[]); conflicts=[r for r in records if r.get('type') not in ('NS',)]; sys.exit(1 if conflicts else 0)" 2>/dev/null; then
  :
else
  echo "Conflicting DNS records exist for ${RECORD_NAME}. Remove non-NS records before delegation."
  exit 1
fi

existing_ns="$(api_get_records "NS")"
existing_count="$(echo "${existing_ns}" | python3 -c "import sys,json; print(json.load(sys.stdin).get('result_info',{}).get('count',0))")"

if [[ "${existing_count}" == "0" ]]; then
  for ns in "${expected_nameservers[@]}"; do
    curl -fsS -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json" \
      --data "{\"type\":\"NS\",\"name\":\"${RECORD_NAME}\",\"content\":\"${ns}\",\"ttl\":300}" >/dev/null
  done
  echo "Created NS delegation for ${RECORD_NAME}"
else
  echo "NS records already exist for ${RECORD_NAME}; verifying contents"
  echo "${existing_ns}" | python3 -c "import sys,json; records=json.load(sys.stdin).get('result',[]); print('\n'.join(sorted(r['content'] for r in records)))" >/tmp/existing-ns.txt
  printf '%s\n' "${expected_nameservers[@]}" | sort >/tmp/expected-ns.txt
  if ! diff -q /tmp/expected-ns.txt /tmp/existing-ns.txt >/dev/null 2>&1; then
    echo "Existing NS records do not match Route 53 name servers"
    exit 1
  fi
fi

for attempt in $(seq 1 12); do
  if dig +short NS "${RECORD_NAME}" @1.1.1.1 | grep -q "${expected_nameservers[0]%.}"; then
    echo "Delegation verified for ${RECORD_NAME}"
    exit 0
  fi
  echo "Waiting for DNS propagation (${attempt}/12)"
  sleep 15
done

echo "Delegation verification timed out for ${RECORD_NAME}"
exit 1