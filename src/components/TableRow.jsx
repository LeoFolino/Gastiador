export default function TableRow({ row, index, onChange }) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    const cleaned = name === 'amount' ? value.replace(/[^\d]/g, '') : value;
    onChange(index, { ...row, [name]: cleaned });
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={row.name}
          onChange={handleInput}
          placeholder="Ej: LUZ"
        />
      </td>
      <td>
        <select name="category" value={row.category} onChange={handleInput}>
          <option value="">Seleccionar</option>
          <option value="Servicios">Servicios</option>
          <option value="Streaming">Streaming</option>
          <option value="Juegos">Juegos</option>
          <option value="Comida">Comida</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          name="amount"
          value={row.amount}
          onChange={handleInput}
          placeholder="$"
        />
      </td>
    </tr>
  );
}