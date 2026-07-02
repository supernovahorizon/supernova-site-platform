#!/usr/bin/env bash
set -euo pipefail

SITE_URL="${1:?site URL required}"
EXPECT_INDEXABLE="${2:-true}"
MAX_ATTEMPTS="${3:-12}"
SLEEP_SECONDS="${4:-15}"

attempt=1
while (( attempt <= MAX_ATTEMPTS )); do
  if curl -fsS -I "${SITE_URL}/" >/tmp/smoke-headers.txt 2>/dev/null; then
    break
  fi
  echo "Attempt ${attempt}/${MAX_ATTEMPTS}: waiting for ${SITE_URL}"
  sleep "${SLEEP_SECONDS}"
  attempt=$((attempt + 1))
done

if (( attempt > MAX_ATTEMPTS )); then
  echo "Smoke test failed: ${SITE_URL} did not respond"
  exit 1
fi

grep -qi 'HTTP/.* 200' /tmp/smoke-headers.txt

HOME_HTML="$(curl -fsS "${SITE_URL}/")"
echo "${HOME_HTML}" | grep -qi '<title'
echo "${HOME_HTML}" | grep -qi 'Demonstration'

if [[ "${EXPECT_INDEXABLE}" == "true" ]]; then
  echo "${HOME_HTML}" | grep -qi 'index,follow'
else
  echo "${HOME_HTML}" | grep -qi 'noindex'
fi

curl -fsS "${SITE_URL}/robots.txt" >/tmp/robots.txt
curl -fsS "${SITE_URL}/sitemap.xml" >/tmp/sitemap.xml
curl -fsS -o /dev/null -w "%{http_code}" "${SITE_URL}/services/" | grep -q '200'
curl -fsS -o /dev/null -w "%{http_code}" "${SITE_URL}/does-not-exist-page" | grep -q '404'

echo "Smoke test passed for ${SITE_URL}"