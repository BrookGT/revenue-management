const { toNumber } = require('../../lib/numbers');

describe('toNumber', () => {
  it('returns 0 for empty values', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBe(0);
    expect(toNumber('')).toBe(0);
  });

  it('parses numeric strings and numbers', () => {
    expect(toNumber('42')).toBe(42);
    expect(toNumber(12.5)).toBe(12.5);
  });

  it('returns 0 for invalid numbers', () => {
    expect(toNumber('abc')).toBe(0);
    expect(toNumber(NaN)).toBe(0);
  });
});
