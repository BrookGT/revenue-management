const {
  AUTH_TOKEN_KEY,
  resolvePostLoginRoute,
  isTokenExpired,
} = require('../../lib/auth');

describe('auth helpers', () => {
  it('exposes the revenue storage key', () => {
    expect(AUTH_TOKEN_KEY).toBe('revenueToken');
  });

  it('routes roles to the correct dashboard', () => {
    expect(resolvePostLoginRoute('admin')).toBe('/admin');
    expect(resolvePostLoginRoute('super_admin')).toBe('/admin');
    expect(resolvePostLoginRoute('accountant')).toBe('/accountant');
    expect(resolvePostLoginRoute('user')).toBe('/user');
  });

  it('detects expired tokens', () => {
    expect(isTokenExpired(null)).toBe(true);
    expect(isTokenExpired('2020-01-01T00:00:00.000Z')).toBe(true);
    expect(isTokenExpired('2099-01-01T00:00:00.000Z')).toBe(false);
  });
});
