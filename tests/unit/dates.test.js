const { isCouponActive, formatDisplayDate } = require('../../lib/dates');

describe('isCouponActive', () => {
  const now = new Date('2024-06-15T12:00:00.000Z');

  it('returns true when the coupon window includes now', () => {
    expect(
      isCouponActive('2024-06-01', '2024-06-30', now),
    ).toBe(true);
    expect(isCouponActive(null, null, now)).toBe(true);
  });

  it('returns false before start or after end', () => {
    expect(isCouponActive('2024-07-01', '2024-07-31', now)).toBe(false);
    expect(isCouponActive('2024-01-01', '2024-06-01', now)).toBe(false);
  });

  it('allows open-ended coupon windows', () => {
    expect(isCouponActive('2024-01-01', null, now)).toBe(true);
    expect(isCouponActive(null, '2024-12-31', now)).toBe(true);
  });

  it('uses the current date when no reference time is provided', () => {
    const future = new Date(Date.now() + 86400000).toISOString();
    expect(isCouponActive(null, future)).toBe(true);
  });
});

describe('formatDisplayDate', () => {
  it('returns an empty string for falsy values', () => {
    expect(formatDisplayDate(null)).toBe('');
  });

  it('formats ISO date strings', () => {
    expect(formatDisplayDate('2024-03-08T15:30:00.000Z')).toBe('2024-03-08');
  });
});
