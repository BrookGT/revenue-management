function buildHealthPayload(name = 'Revenue Management API') {
  return {
    ok: true,
    name,
    service: 'revenue-management',
  };
}

function sendJson(res, statusCode, payload) {
  res.status(statusCode).json(payload);
}

module.exports = {
  buildHealthPayload,
  sendJson,
};
