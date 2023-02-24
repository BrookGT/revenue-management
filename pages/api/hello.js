const { buildHealthPayload, sendJson } = require('../../lib/api');

export default function handler(req, res) {
  sendJson(res, 200, buildHealthPayload('Revenue Management API'));
}
