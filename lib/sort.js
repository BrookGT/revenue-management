function compareByField(field, order = 'asc') {
  return (left, right) => {
    const a = left[field];
    const b = right[field];

    if (a === b) {
      return 0;
    }

    if (a === undefined || a === null) {
      return 1;
    }

    if (b === undefined || b === null) {
      return -1;
    }

    if (a < b) {
      return order === 'asc' ? -1 : 1;
    }

    return order === 'asc' ? 1 : -1;
  };
}

function sortCollection(items = [], field, order = 'asc') {
  return [...items].sort(compareByField(field, order));
}

module.exports = {
  compareByField,
  sortCollection,
};
