const FILING_STATUS_LABELS = {
  draft: 'Draft',
  submitted: 'Submitted',
  in_review: 'In Review',
  completed: 'Completed',
  rejected: 'Rejected',
};

const EDITABLE_STATUSES = new Set(['draft', 'rejected']);

function resolveFilingStatusLabel(status) {
  return FILING_STATUS_LABELS[status] || 'Unknown';
}

function isFilingEditable(status) {
  return EDITABLE_STATUSES.has(status);
}

function canSubmitFiling(status, requiredFieldsComplete) {
  return isFilingEditable(status) && requiredFieldsComplete === true;
}

module.exports = {
  FILING_STATUS_LABELS,
  resolveFilingStatusLabel,
  isFilingEditable,
  canSubmitFiling,
};
