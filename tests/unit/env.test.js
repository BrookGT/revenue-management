const { readApiUrl, readSiteUrl } = require('../../lib/env');

describe('env helpers', () => {
  it('reads api and site urls from env', () => {
    expect(readApiUrl({ NEXT_PUBLIC_API_URL: 'https://api.revenue.et' }))
      .toBe('https://api.revenue.et');
    expect(readSiteUrl({ NEXT_PUBLIC_SITE_URL: 'https://portal.revenue.et' }))
      .toBe('https://portal.revenue.et');
  });

  it('falls back to defaults', () => {
    expect(readApiUrl({})).toBe('http://127.0.0.1:5000');
    expect(readSiteUrl({})).toBe('https://portal.revenue.et');
    expect(readApiUrl()).toBe('http://127.0.0.1:5000');
    expect(readSiteUrl()).toBe('https://portal.revenue.et');
  });
});
