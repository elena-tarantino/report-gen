// report-gen: builds a weekly summary report from input rows.
function summarize(rows) {
  const total = rows.length;
  const byType = {};
  for (const r of rows) { const t = (r && r.type) || "other"; byType[t] = (byType[t] || 0) + 1; }
  return { total, byType };
}
module.exports = { summarize };
