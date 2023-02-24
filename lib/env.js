const { resolveBackendUrl } = require('./urls');

function readApiUrl(env = process.env) {
  return resolveBackendUrl(env.NEXT_PUBLIC_API_URL, 'http://127.0.0.1:5000');
}

function readSiteUrl(env = process.env) {
  return env.NEXT_PUBLIC_SITE_URL || 'https://portal.revenue.et';
}

module.exports = {
  readApiUrl,
  readSiteUrl,
};
