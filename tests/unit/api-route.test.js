const { buildHealthPayload, sendJson } = require('../../lib/api');

describe('pages/api health route behavior', () => {
  it('responds with the revenue health payload', () => {
    const res = {
      statusCode: 0,
      body: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(payload) {
        this.body = payload;
      },
    };

    sendJson(res, 200, buildHealthPayload('Revenue Management API'));
    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe('revenue-management');
  });
});
