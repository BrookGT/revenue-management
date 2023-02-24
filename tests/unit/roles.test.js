const {
  canAccessAdmin,
  canAccessAccountant,
  canAccessUserPortal,
  isProtectedRoute,
} = require('../../lib/roles');

describe('role helpers', () => {
  it('gates admin routes', () => {
    expect(canAccessAdmin('admin')).toBe(true);
    expect(canAccessAdmin('user')).toBe(false);
  });

  it('gates accountant routes', () => {
    expect(canAccessAccountant('accountant')).toBe(true);
    expect(canAccessAccountant('admin')).toBe(false);
  });

  it('gates taxpayer portal access', () => {
    expect(canAccessUserPortal('user', true)).toBe(true);
    expect(canAccessUserPortal('admin', true)).toBe(false);
    expect(canAccessUserPortal('accountant', true)).toBe(false);
    expect(canAccessUserPortal('user', false)).toBe(false);
  });

  it('detects protected route prefixes', () => {
    expect(isProtectedRoute('/admin/settings')).toBe(true);
    expect(isProtectedRoute('/pricing')).toBe(false);
    expect(isProtectedRoute('')).toBe(false);
    expect(isProtectedRoute()).toBe(false);
  });
});
