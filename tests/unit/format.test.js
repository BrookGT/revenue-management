const { formatCard } = require('../../lib/format');

describe('formatCard', () => {
  it('returns a dash for empty values', () => {
    expect(formatCard()).toBe('-');
    expect(formatCard('')).toBe('-');
  });

  it('groups card digits in blocks of four', () => {
    expect(formatCard('1234567890123456')).toBe('1234 5678 9012 3456');
    expect(formatCard('1234567890123456', '-')).toBe('1234-5678-9012-3456');
  });
});
