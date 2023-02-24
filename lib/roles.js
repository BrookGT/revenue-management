const ADMIN_ROLES = new Set(['admin', 'super_admin', 'employee']);
const ACCOUNTANT_ROLE = 'accountant';

function canAccessAdmin(role) {
  return ADMIN_ROLES.has(role);
}

function canAccessAccountant(role) {
  return role === ACCOUNTANT_ROLE;
}

function canAccessUserPortal(role, authenticated) {
  if (!authenticated) {
    return false;
  }

  return role !== ACCOUNTANT_ROLE && !ADMIN_ROLES.has(role);
}

function isProtectedRoute(pathname = '') {
  const segment = String(pathname).split('/').filter(Boolean)[0] || '';
  return ['admin', 'accountant', 'user'].includes(segment);
}

module.exports = {
  ADMIN_ROLES,
  ACCOUNTANT_ROLE,
  canAccessAdmin,
  canAccessAccountant,
  canAccessUserPortal,
  isProtectedRoute,
};
