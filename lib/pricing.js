const { toNumber } = require('./numbers');

const DISCOUNT_TYPE = {
  PERCENTAGE: 'percentage',
  FIXED: 'fixed',
};

function calculateTaxDiscount(subtotal, discountType, discountValue, maxDiscount) {
  const amount = toNumber(subtotal);
  const value = toNumber(discountValue);

  if (amount <= 0 || value <= 0) {
    return 0;
  }

  if (discountType === DISCOUNT_TYPE.PERCENTAGE) {
    const raw = (amount * value) / 100;
    const cap = toNumber(maxDiscount);
    return cap > 0 ? Math.min(raw, cap) : raw;
  }

  return Math.min(value, amount);
}

function calculateFilingTotal({ baseFee, addons = 0, discount = 0, tax = 0 }) {
  const base = toNumber(baseFee);
  const extra = toNumber(addons);
  const deductions = toNumber(discount);
  const taxAmount = toNumber(tax);

  return Math.max(0, base + extra - deductions + taxAmount);
}

module.exports = {
  DISCOUNT_TYPE,
  calculateTaxDiscount,
  calculateFilingTotal,
};
