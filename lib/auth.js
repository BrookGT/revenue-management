const AUTH_TOKEN_KEY = 'revenueToken';

function resolvePostLoginRoute(role) {
  if (role === 'admin' || role === 'super_admin') {
    return '/admin';
  }

  if (role === 'accountant') {
    return '/accountant';
  }

  return '/user';
}

function isTokenExpired(expiresAt) {
  if (!expiresAt) {
    return true;
  }

  return new Date(expiresAt).getTime() <= Date.now();
}

module.exports = {
  AUTH_TOKEN_KEY,
  resolvePostLoginRoute,
  isTokenExpired,
};
