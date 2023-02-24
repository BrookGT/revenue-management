function formatCard(card, spacer = ' ') {
  if (!card) {
    return '-';
  }

  return card
    .split('')
    .map((digit, index) => `${index > 0 && index % 4 === 0 ? spacer : ''}${digit}`)
    .join('');
}

module.exports = { formatCard };
