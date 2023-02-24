const {
  REVENUE_REGIONS,
  REVENUE_FILING_CHANNELS,
  regionLabel,
} = require('../../lib/revenue/regions');

describe('revenue regions', () => {
  it('exports Ethiopian regions', () => {
    expect(REVENUE_REGIONS.length).toBeGreaterThan(0);
    expect(REVENUE_REGIONS[0]).toHaveProperty('code');
  });

  it('exports filing channels', () => {
    expect(REVENUE_FILING_CHANNELS.map((c) => c.id)).toContain('telebirr');
  });

  it('resolves region labels', () => {
    expect(regionLabel('AA')).toBe('Addis Ababa');
    expect(regionLabel('XX')).toBe('Unknown');
  });
});
