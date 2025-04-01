import TableRow from './TableRow';

export default function EditableTable({ data, setData, filter }) {
  const handleRowChange = (index, updatedRow) => {
    const newData = [...data];
    newData[index] = updatedRow;
    if (index === data.length - 1 && updatedRow.name !== '') {
      newData.push({ name: '', category: '', amount: '' });
    }
    setData(newData);
  };

  const filteredData = data.filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Gasto</th>
            <th>Categoría</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <TableRow key={i} index={i} row={row} onChange={handleRowChange} />
          ))}
        </tbody>
      </table>
    </div>
  );
}