function isValidEmail(value) {
  if (!value || typeof value !== 'string') {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isStrongPassword(value) {
  if (!value || typeof value !== 'string') {
    return false;
  }

  return value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

module.exports = {
  isValidEmail,
  isStrongPassword,
  isNonEmptyString,
};
