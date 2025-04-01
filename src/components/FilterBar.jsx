export default function FilterBar({ filter, setFilter, clearAll }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={clearAll}>Limpiar Todo</button>
    </div>
  );
}