function successResponse(message, data = null) {
  return {
    success: true,
    message: message || 'Request completed successfully.',
    data,
  };
}

function errorResponse(message, data = null) {
  return {
    success: false,
    message: message || 'Request failed.',
    data,
  };
}

module.exports = { successResponse, errorResponse };
