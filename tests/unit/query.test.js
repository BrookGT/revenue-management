const { parsePageSize, buildListQuery } = require('../../lib/query');

describe('query helpers', () => {
  it('parses page size with fallback', () => {
    expect(parsePageSize('25')).toBe(25);
    expect(parsePageSize(0, 15)).toBe(15);
  });

  it('builds normalized list query params', () => {
    expect(buildListQuery({ page: '2', size: '50', search: '  tax ', order: 'asc' })).toEqual({
      page: 2,
      size: 50,
      search: 'tax',
      sort: 'createdAt',
      order: 'asc',
    });
  });

  it('defaults invalid values', () => {
    expect(buildListQuery()).toEqual({
      page: 1,
      size: 20,
      search: '',
      sort: 'createdAt',
      order: 'desc',
    });
  });
});
