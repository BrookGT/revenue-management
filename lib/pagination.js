const { toNumber } = require('./numbers');

function formatLimitOffset(payload = {}) {
  let limit = payload.limit ? Math.abs(parseInt(String(payload.limit), 10)) : 10;
  let offset = payload.offset ? Math.abs(parseInt(String(payload.offset), 10)) : 1;

  limit = Number.isNaN(limit) ? 10 : limit;
  limit = limit > 0 ? limit : 10;

  offset = Number.isNaN(offset) ? 1 : offset;
  offset = offset > 0 ? offset : 1;

  return { limit, offset };
}

function buildPaginationMeta(total, payload = {}) {
  const { limit, offset } = formatLimitOffset(payload);
  const lastPage = Math.ceil(toNumber(total) / limit) || 1;

  return {
    total: toNumber(total),
    lastPage,
    currentPage: offset,
    perPage: limit,
    prev: offset > 1 ? offset - 1 : null,
    next: offset < lastPage ? offset + 1 : null,
  };
}

module.exports = { formatLimitOffset, buildPaginationMeta };
