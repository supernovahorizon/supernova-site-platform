/**
 * CloudFront Function for Astro static directory routes.
 * Maps `/services/` → `/services/index.html` and extensionless paths similarly.
 */
export function buildStaticSiteRoutingFunctionCode(): string {
  return `
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
`.trim();
}
