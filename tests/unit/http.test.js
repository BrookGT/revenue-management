const {
  buildAuthHeader,
  resolveAuthHeaderFromStorage,
  isUnauthorizedStatus,
} = require('../../lib/http');

describe('http helpers', () => {
  it('builds bearer auth headers', () => {
    expect(buildAuthHeader('abc')).toBe('Bearer abc');
    expect(buildAuthHeader()).toBe('Bearer ');
  });

  it('reads auth headers from storage objects', () => {
    expect(resolveAuthHeaderFromStorage({ revenueToken: 'token' })).toBe('Bearer token');
    expect(resolveAuthHeaderFromStorage({})).toBe('Bearer ');
    expect(resolveAuthHeaderFromStorage()).toBe('Bearer ');
  });

  it('detects unauthorized statuses', () => {
    expect(isUnauthorizedStatus(401)).toBe(true);
    expect(isUnauthorizedStatus(200)).toBe(false);
  });
});
