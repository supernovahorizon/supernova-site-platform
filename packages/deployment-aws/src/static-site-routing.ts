/**
 * CloudFront Function for Astro static directory routes and canonical-domain enforcement.
 * Redirects direct `.cloudfront.net` access to the site domain; maps directory paths to index.html.
 */
export function buildStaticSiteRoutingFunctionCode(canonicalDomain: string): string {
  if (!canonicalDomain.includes('.')) {
    throw new Error(`Invalid canonicalDomain: ${canonicalDomain}`);
  }

  return `
function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value : '';
  var uri = request.uri;

  if (host.endsWith('.cloudfront.net')) {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: 'https://${canonicalDomain}' + uri }
      }
    };
  }

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
`.trim();
}
