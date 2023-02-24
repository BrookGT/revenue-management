const {
  normalizeCouponCode,
  isCouponCodeValid,
  applyCouponDiscount,
} = require('../../lib/coupon');

describe('coupon helpers', () => {
  it('normalizes coupon codes', () => {
    expect(normalizeCouponCode('  save10 ')).toBe('SAVE10');
    expect(normalizeCouponCode()).toBe('');
  });

  it('validates coupon code length', () => {
    expect(isCouponCodeValid('SAVE10')).toBe(true);
    expect(isCouponCodeValid('AB')).toBe(false);
  });

  it('applies active coupon discounts', () => {
    const coupon = {
      code: 'SAVE10',
      type: 'percentage',
      value: 10,
      startDate: '2020-01-01',
      endDate: '2099-01-01',
    };

    expect(applyCouponDiscount(200, coupon)).toBe(20);
    expect(applyCouponDiscount(200, { ...coupon, code: 'AB' })).toBe(0);
  });

  it('applies fixed coupon discounts', () => {
    const coupon = {
      code: 'FLAT25',
      type: 'fixed',
      value: 25,
      startDate: '2020-01-01',
      endDate: '2099-01-01',
    };

    expect(applyCouponDiscount(200, coupon)).toBe(25);
  });

  it('returns zero for inactive coupons', () => {
    const coupon = {
      code: 'OLDC',
      type: 'fixed',
      value: 25,
      startDate: '2020-01-01',
      endDate: '2020-02-01',
    };

    expect(applyCouponDiscount(200, coupon)).toBe(0);
  });

  it('returns zero when coupon payload is missing', () => {
    expect(applyCouponDiscount(200, null)).toBe(0);
  });

  it('handles coupons without discount values', () => {
    const base = {
      code: 'EMPTY',
      startDate: '2020-01-01',
      endDate: '2099-01-01',
    };

    expect(applyCouponDiscount(200, { ...base, type: 'percentage' })).toBe(0);
    expect(applyCouponDiscount(200, { ...base, type: 'fixed' })).toBe(0);
  });
});
