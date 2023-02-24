const { slugify, isValidSlug } = require('../../lib/slug');

describe('slug helpers', () => {
  it('slugifies labels', () => {
    expect(slugify('  Revenue Filing ')).toBe('revenue-filing');
    expect(slugify('')).toBe('');
  });

  it('validates slug format', () => {
    expect(isValidSlug('revenue')).toBe(true);
    expect(isValidSlug('Invalid Slug')).toBe(false);
    expect(isValidSlug('')).toBe(false);
  });
});
