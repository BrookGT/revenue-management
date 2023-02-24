const { toNumber } = require('./numbers');

function parsePageSize(value, fallback = 20) {
  const parsed = toNumber(value);
  return parsed > 0 ? parsed : fallback;
}

function buildListQuery(params = {}) {
  const page = parsePageSize(params.page, 1);
  const size = parsePageSize(params.size, 20);

  return {
    page,
    size,
    search: typeof params.search === 'string' ? params.search.trim() : '',
    sort: params.sort || 'createdAt',
    order: params.order === 'asc' ? 'asc' : 'desc',
  };
}

module.exports = {
  parsePageSize,
  buildListQuery,
};
