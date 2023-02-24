const {
  resolveFilingStatusLabel,
  isFilingEditable,
  canSubmitFiling,
} = require('../../lib/filing');

describe('filing helpers', () => {
  it('resolves filing status labels', () => {
    expect(resolveFilingStatusLabel('submitted')).toBe('Submitted');
    expect(resolveFilingStatusLabel('unknown')).toBe('Unknown');
  });

  it('detects editable filing states', () => {
    expect(isFilingEditable('draft')).toBe(true);
    expect(isFilingEditable('completed')).toBe(false);
  });

  it('allows submit only for editable complete filings', () => {
    expect(canSubmitFiling('draft', true)).toBe(true);
    expect(canSubmitFiling('draft', false)).toBe(false);
    expect(canSubmitFiling('completed', true)).toBe(false);
  });
});
