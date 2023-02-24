const { AUTH_TOKEN_KEY } = require('./auth');

function buildAuthHeader(token) {
  return `Bearer ${token || ''}`;
}

function resolveAuthHeaderFromStorage(storage = {}) {
  const token = storage[AUTH_TOKEN_KEY] || '';
  return buildAuthHeader(token);
}

function isUnauthorizedStatus(status) {
  return status === 401 || status === 403;
}

module.exports = {
  buildAuthHeader,
  resolveAuthHeaderFromStorage,
  isUnauthorizedStatus,
};
