import { useState } from 'react';

export default function ExpenseForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || isNaN(parseFloat(amount))) return;

    onAdd({ name: name.trim(), amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Nombre del gasto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100px', padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Agregar</button>
    </form>
  );
}
