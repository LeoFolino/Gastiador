export default function ExpenseList({ expenses }) {
    const total = expenses.reduce((acc, e) => acc + e.amount, 0);
  
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', maxHeight: '400px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ overflowY: 'auto', maxHeight: '360px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {expenses.map((e, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.75rem', textAlign: 'left' }}>{e.name}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'right' }}>${e.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background: '#f0f0f0', padding: '0.75rem', fontWeight: 'bold', textAlign: 'right' }}>
          Total: ${total.toFixed(2)}
        </div>
      </div>
    );
  }
  