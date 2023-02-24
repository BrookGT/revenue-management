const ID_TYPES = [
  { label: 'National ID (Fayda)', value: 'fayda_id' },
  { label: 'Passport', value: 'passport' },
  { label: 'Driver license', value: 'driver_license' },
  { label: 'TIN certificate', value: 'tin_certificate' },
];

const ACCOUNTING_TYPES = [
  { label: 'Licensed Accountant', value: 'licensed_accountant' },
  { label: 'Revenue Agent', value: 'revenue_agent' },
];

const CURRENCIES = [
  { label: 'Ethiopian Birr', value: 'etb' },
  { label: 'US Dollar', value: 'usd', disabled: true },
  { label: 'Euro', value: 'eur', disabled: true },
];

function findOptionValue(options, label) {
  const match = options.find((item) => item.label === label);
  return match ? match.value : null;
}

function isEnabledCurrency(code) {
  const currency = CURRENCIES.find((item) => item.value === code);
  return Boolean(currency && !currency.disabled);
}

module.exports = {
  ID_TYPES,
  ACCOUNTING_TYPES,
  CURRENCIES,
  findOptionValue,
  isEnabledCurrency,
};
