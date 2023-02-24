const { isCouponActive } = require('./dates');

function normalizeCouponCode(code) {
  if (!code) {
    return '';
  }

  return String(code).trim().toUpperCase();
}

function isCouponCodeValid(code) {
  const normalized = normalizeCouponCode(code);
  return normalized.length >= 4 && normalized.length <= 32;
}

function applyCouponDiscount(subtotal, coupon) {
  if (!coupon || !isCouponCodeValid(coupon.code)) {
    return 0;
  }

  if (!isCouponActive(coupon.startDate, coupon.endDate)) {
    return 0;
  }

  if (coupon.type === 'percentage') {
    return (subtotal * Number(coupon.value || 0)) / 100;
  }

  return Number(coupon.value || 0);
}

module.exports = {
  normalizeCouponCode,
  isCouponCodeValid,
  applyCouponDiscount,
};
