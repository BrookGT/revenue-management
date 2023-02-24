const { joinUrl, resolveBackendUrl } = require('../../lib/urls');

describe('joinUrl', () => {
  it('joins base and path without duplicate slashes', () => {
    expect(joinUrl('https://api.revenue.et/', '/v1/users')).toBe('https://api.revenue.et/v1/users');
    expect(joinUrl('https://api.revenue.et', 'v1/users')).toBe('https://api.revenue.et/v1/users');
    expect(joinUrl('', '')).toBe('/');
  });
});

describe('resolveBackendUrl', () => {
  it('prefers configured env values', () => {
    expect(resolveBackendUrl('https://api.revenue.et')).toBe('https://api.revenue.et');
  });

  it('falls back to localhost', () => {
    expect(resolveBackendUrl()).toBe('http://127.0.0.1:5000');
    expect(resolveBackendUrl('', 'http://localhost:4000')).toBe('http://localhost:4000');
  });
});
