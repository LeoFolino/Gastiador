import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import EditableTable from './components/EditableTable';
import SummaryBar from './components/SummaryBar';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';
import './styles/app.css';

export default function App() {
  const [data, setData] = useLocalStorage('gastiador-data', [{ name: '', category: '', amount: '' }]);
  const [filter, setFilter] = useState('');
  const [theme, setTheme] = useLocalStorage('gastiador-theme', 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const clearAll = () => setData([{ name: '', category: '', amount: '' }]);

  return (
    <div className="app">
      <div className="app-header">
        <h1>💸 Gastiador</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <FilterBar filter={filter} setFilter={setFilter} clearAll={clearAll} />
      <EditableTable data={data} setData={setData} filter={filter} />
      <SummaryBar data={data} />
    </div>
  );
}