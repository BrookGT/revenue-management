function parseCsvRows(csvText) {
  const lines = String(csvText || '').split('\n').filter((line) => line.trim().length > 0);
  if (lines.length === 0) {
    return [];
  }

  const headers = lines[0].split(',').map((header) => header.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i += 1) {
    const values = lines[i].split(',');
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] ? values[index].trim() : '';
    });

    rows.push(row);
  }

  return rows;
}

function toCsvLine(values) {
  return values.map((value) => String(value ?? '')).join(',');
}

module.exports = {
  parseCsvRows,
  toCsvLine,
};
