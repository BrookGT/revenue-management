const { formatLimitOffset, buildPaginationMeta } = require('../../lib/pagination');

describe('formatLimitOffset', () => {
  it('uses defaults when values are missing or invalid', () => {
    expect(formatLimitOffset()).toEqual({ limit: 10, offset: 1 });
    expect(formatLimitOffset({ limit: 'bad', offset: '-2' })).toEqual({ limit: 10, offset: 2 });
  });

  it('normalizes positive integers', () => {
    expect(formatLimitOffset({ limit: '25', offset: '3' })).toEqual({ limit: 25, offset: 3 });
  });

  it('falls back when parsed values are zero', () => {
    expect(formatLimitOffset({ limit: 0, offset: 0 })).toEqual({ limit: 10, offset: 1 });
    expect(formatLimitOffset({ limit: '0', offset: '0' })).toEqual({ limit: 10, offset: 1 });
  });

  it('uses absolute values for negative numeric strings', () => {
    expect(formatLimitOffset({ limit: '-5', offset: '-2' })).toEqual({ limit: 5, offset: 2 });
  });
});

describe('buildPaginationMeta', () => {
  it('calculates page links for multi-page results', () => {
    expect(buildPaginationMeta(45, { limit: 10, offset: 2 })).toEqual({
      total: 45,
      lastPage: 5,
      currentPage: 2,
      perPage: 10,
      prev: 1,
      next: 3,
    });
  });

  it('omits prev and next on boundary pages', () => {
    expect(buildPaginationMeta(8, { limit: 10, offset: 1 })).toEqual({
      total: 8,
      lastPage: 1,
      currentPage: 1,
      perPage: 10,
      prev: null,
      next: null,
    });
  });

  it('omits next on the final page and uses default pagination input', () => {
    expect(buildPaginationMeta(50, { limit: 10, offset: 5 })).toEqual({
      total: 50,
      lastPage: 5,
      currentPage: 5,
      perPage: 10,
      prev: 4,
      next: null,
    });
    expect(buildPaginationMeta(12)).toEqual({
      total: 12,
      lastPage: 2,
      currentPage: 1,
      perPage: 10,
      prev: null,
      next: 2,
    });
  });

  it('recovers from invalid offset values', () => {
    expect(formatLimitOffset({ limit: 5, offset: 'bad' })).toEqual({ limit: 5, offset: 1 });
  });

  it('defaults to a single page when there are no records', () => {
    expect(buildPaginationMeta(0)).toEqual({
      total: 0,
      lastPage: 1,
      currentPage: 1,
      perPage: 10,
      prev: null,
      next: null,
    });
  });
});
