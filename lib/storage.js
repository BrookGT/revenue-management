const { AUTH_TOKEN_KEY } = require('./auth');

function readToken(storage) {
  if (!storage || typeof storage.getItem !== 'function') {
    return '';
  }

  return storage.getItem(AUTH_TOKEN_KEY) || '';
}

function writeToken(storage, token) {
  if (!storage || typeof storage.setItem !== 'function') {
    return false;
  }

  storage.setItem(AUTH_TOKEN_KEY, token || '');
  return true;
}

function clearToken(storage) {
  if (!storage || typeof storage.removeItem !== 'function') {
    return false;
  }

  storage.removeItem(AUTH_TOKEN_KEY);
  return true;
}

module.exports = {
  readToken,
  writeToken,
  clearToken,
};
