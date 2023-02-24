const {
  DISCOUNT_TYPE,
  calculateTaxDiscount,
  calculateFilingTotal,
} = require('../../lib/pricing');

describe('calculateTaxDiscount', () => {
  it('returns zero when amount or value is not positive', () => {
    expect(calculateTaxDiscount(0, DISCOUNT_TYPE.FIXED, 10)).toBe(0);
    expect(calculateTaxDiscount(100, DISCOUNT_TYPE.FIXED, 0)).toBe(0);
  });

  it('applies percentage discounts with optional cap', () => {
    expect(calculateTaxDiscount(200, DISCOUNT_TYPE.PERCENTAGE, 10)).toBe(20);
    expect(calculateTaxDiscount(200, DISCOUNT_TYPE.PERCENTAGE, 10, 15)).toBe(15);
    expect(calculateTaxDiscount(200, DISCOUNT_TYPE.PERCENTAGE, 10, 0)).toBe(20);
  });

  it('applies fixed discounts without exceeding subtotal', () => {
    expect(calculateTaxDiscount(80, DISCOUNT_TYPE.FIXED, 50)).toBe(50);
    expect(calculateTaxDiscount(30, DISCOUNT_TYPE.FIXED, 50)).toBe(30);
  });
});

describe('calculateFilingTotal', () => {
  it('sums fees and never returns negative totals', () => {
    expect(
      calculateFilingTotal({ baseFee: 100, addons: 20, discount: 15, tax: 5 }),
    ).toBe(110);
    expect(
      calculateFilingTotal({ baseFee: 10, addons: 0, discount: 50, tax: 0 }),
    ).toBe(0);
  });

  it('defaults optional fee fields to zero', () => {
    expect(calculateFilingTotal({ baseFee: 50 })).toBe(50);
  });
});
