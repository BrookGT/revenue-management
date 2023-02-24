function isCouponActive(startDate, endDate, now = new Date()) {
  const starts = startDate ? new Date(startDate) : null;
  const ends = endDate ? new Date(endDate) : null;

  if (starts && now < starts) {
    return false;
  }

  if (ends && now > ends) {
    return false;
  }

  return true;
}

function formatDisplayDate(value) {
  if (!value) {
    return '';
  }

  return new Date(value).toISOString().slice(0, 10);
}

module.exports = { isCouponActive, formatDisplayDate };
