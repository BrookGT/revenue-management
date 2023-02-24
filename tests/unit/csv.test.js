const { parseCsvRows, toCsvLine } = require('../../lib/csv');

describe('csv helpers', () => {
  it('parses csv rows into objects', () => {
    expect(parseCsvRows('name,amount\nTax,10\nFee,5')).toEqual([
      { name: 'Tax', amount: '10' },
      { name: 'Fee', amount: '5' },
    ]);
    expect(parseCsvRows('name,amount\nTax,')).toEqual([
      { name: 'Tax', amount: '' },
    ]);
    expect(parseCsvRows('')).toEqual([]);
  });

  it('serializes csv lines', () => {
    expect(toCsvLine(['Tax', 10])).toBe('Tax,10');
    expect(toCsvLine([null, undefined])).toBe(',');
  });
});
