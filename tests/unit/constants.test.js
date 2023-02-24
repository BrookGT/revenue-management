const {
  ID_TYPES,
  CURRENCIES,
  findOptionValue,
  isEnabledCurrency,
} = require('../../lib/constants');

describe('constants helpers', () => {
  it('exposes configured option lists', () => {
    expect(ID_TYPES.length).toBeGreaterThan(0);
    expect(CURRENCIES.length).toBe(3);
  });

  it('finds option values by label', () => {
    expect(findOptionValue(CURRENCIES, 'Ethiopian Birr')).toBe('etb');
    expect(findOptionValue(CURRENCIES, 'Missing')).toBeNull();
  });

  it('checks enabled currencies', () => {
    expect(isEnabledCurrency('etb')).toBe(true);
    expect(isEnabledCurrency('usd')).toBe(false);
    expect(isEnabledCurrency('missing')).toBe(false);
  });
});
