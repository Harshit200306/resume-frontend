import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-md transition hover:bg-gray-100 print:hidden"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle