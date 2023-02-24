const { compareByField, sortCollection } = require('../../lib/sort');

describe('sort helpers', () => {
  const items = [
    { name: 'beta', amount: 2 },
    { name: 'alpha', amount: 1 },
    { name: 'gamma', amount: null },
  ];

  it('compares records by field', () => {
    expect(compareByField('amount', 'asc')(items[1], items[0])).toBe(-1);
    expect(compareByField('amount', 'desc')(items[1], items[0])).toBe(1);
    expect(compareByField('amount', 'desc')(items[0], items[1])).toBe(-1);
    expect(compareByField('amount', 'asc')(items[0], items[1])).toBe(1);
    expect(compareByField('amount')(items[0], items[1])).toBe(1);
    expect(compareByField('amount')(items[2], items[0])).toBe(1);
    expect(compareByField('amount')(items[0], items[2])).toBe(-1);
    expect(compareByField('amount')(items[0], items[0])).toBe(0);
  });

  it('sorts collections', () => {
    expect(sortCollection(items, 'amount').map((item) => item.name)).toEqual([
      'alpha',
      'beta',
      'gamma',
    ]);
    expect(sortCollection()).toEqual([]);
    expect(sortCollection(items, 'amount', 'desc')).toHaveLength(3);
  });
});
