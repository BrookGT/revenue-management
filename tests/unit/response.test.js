const { successResponse, errorResponse } = require('../../lib/response');

describe('response helpers', () => {
  it('builds success payloads with defaults', () => {
    expect(successResponse()).toEqual({
      success: true,
      message: 'Request completed successfully.',
      data: null,
    });
    expect(successResponse('Saved', { id: 1 })).toEqual({
      success: true,
      message: 'Saved',
      data: { id: 1 },
    });
  });

  it('builds error payloads with defaults', () => {
    expect(errorResponse()).toEqual({
      success: false,
      message: 'Request failed.',
      data: null,
    });
    expect(errorResponse('Denied', { code: 403 })).toEqual({
      success: false,
      message: 'Denied',
      data: { code: 403 },
    });
  });
});
