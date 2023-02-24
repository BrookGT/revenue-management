const {
  isValidEmail,
  isStrongPassword,
  isNonEmptyString,
} = require('../../lib/validation');

describe('validation helpers', () => {
  it('validates email addresses', () => {
    expect(isValidEmail('user@gebi.io')).toBe(true);
    expect(isValidEmail('bad-email')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
  });

  it('validates password strength', () => {
    expect(isStrongPassword('Secret12')).toBe(true);
    expect(isStrongPassword('weak')).toBe(false);
    expect(isStrongPassword()).toBe(false);
  });

  it('checks non-empty strings', () => {
    expect(isNonEmptyString('  value  ')).toBe(true);
    expect(isNonEmptyString('   ')).toBe(false);
    expect(isNonEmptyString(10)).toBe(false);
  });
});
