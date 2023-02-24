const { buildHealthPayload, sendJson } = require('../../lib/api');

describe('api helpers', () => {
  it('builds health payloads', () => {
    expect(buildHealthPayload()).toEqual({
      ok: true,
      name: 'Revenue Management API',
      service: 'revenue-management',
    });
  });

  it('sends json responses', () => {
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

    sendJson(res, 200, { ok: true });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
