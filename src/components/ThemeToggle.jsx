export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}