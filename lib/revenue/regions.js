/** Revenue Management — Ethiopian filing regions */

const REVENUE_REGIONS = [
  { code: 'AA', label: 'Addis Ababa', authority: 'MoR' },
  { code: 'OR', label: 'Oromia', authority: 'MoR' },
  { code: 'AM', label: 'Amhara', authority: 'MoR' },
  { code: 'TG', label: 'Tigray', authority: 'MoR' },
];

const REVENUE_FILING_CHANNELS = [
  { id: 'telebirr', label: 'Telebirr' },
  { id: 'cbe_birr', label: 'CBE Birr' },
  { id: 'chapa', label: 'Chapa' },
  { id: 'stripe', label: 'Stripe' },
];

function regionLabel(code) {
  const match = REVENUE_REGIONS.find((r) => r.code === code);
  return match ? match.label : 'Unknown';
}

module.exports = {
  REVENUE_REGIONS,
  REVENUE_FILING_CHANNELS,
  regionLabel,
};
