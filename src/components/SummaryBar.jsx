function formatNumber(value) {
  return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

export default function SummaryBar({ data }) {
  const total = data.reduce((acc, row) => acc + (parseInt(row.amount) || 0), 0);
  const totalsByCategory = data.reduce((acc, row) => {
    if (!row.category) return acc;
    acc[row.category] = (acc[row.category] || 0) + (parseInt(row.amount) || 0);
    return acc;
  }, {});

  return (
    <div className="summary-bar">
      <div><strong>Total:</strong> {formatNumber(total)}</div>
      <div className="category-summary">
        {Object.entries(totalsByCategory).map(([cat, amt]) => (
          <span key={cat}>{cat}: {formatNumber(amt)}</span>
        ))}
      </div>
    </div>
  );
}
