const { toNumber } = require('./numbers');

const CURRENCY_SYMBOLS = {
  dollar: '$',
  euro: '€',
  lira: '₺',
};

function resolveCurrencySymbol(code) {
  return CURRENCY_SYMBOLS[code] || '$';
}

function formatMoney(amount, code = 'dollar') {
  const value = toNumber(amount);
  const symbol = resolveCurrencySymbol(code);
  return `${symbol}${value.toFixed(2)}`;
}

module.exports = {
  CURRENCY_SYMBOLS,
  resolveCurrencySymbol,
  formatMoney,
};
