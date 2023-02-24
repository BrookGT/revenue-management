const { resolveCurrencySymbol, formatMoney } = require('../../lib/currency');

describe('currency helpers', () => {
  it('resolves known currency symbols', () => {
    expect(resolveCurrencySymbol('euro')).toBe('€');
    expect(resolveCurrencySymbol('unknown')).toBe('$');
  });

  it('formats money values', () => {
    expect(formatMoney(1250.5, 'lira')).toBe('₺1250.50');
    expect(formatMoney('bad', 'dollar')).toBe('$0.00');
    expect(formatMoney(10)).toBe('$10.00');
  });
});
