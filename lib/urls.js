function joinUrl(base, path) {
  const normalizedBase = String(base || '').replace(/\/$/, '');
  const normalizedPath = String(path || '').replace(/^\//, '');
  return `${normalizedBase}/${normalizedPath}`;
}

function resolveBackendUrl(envUrl, fallback = 'http://127.0.0.1:5000') {
  return envUrl || fallback;
}

module.exports = { joinUrl, resolveBackendUrl };
