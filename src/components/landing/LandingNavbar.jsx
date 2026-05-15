import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import trackrLogo from "../../assets/trackr-logo.png";

function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:grid md:grid-cols-3 gap-3">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-2 justify-self-start"
        >
          <img
            src={trackrLogo}
            alt="Trackr logo"
            className="w-9 h-9 object-contain transition group-hover:scale-105"
          />
          <span className="font-semibold text-lg text-gray-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            Trackr
          </span>
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 justify-self-center">
          <a
            href="#about"
            className="hover:text-blue-600 transition dark:hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#features"
            className="hover:text-blue-600 transition dark:hover:text-blue-400"
          >
            Features
          </a>

          <a
            href="#developers"
            className="hover:text-blue-600 transition dark:hover:text-blue-400"
          >
            Built With
          </a>
        </nav>

        <div className="flex items-center gap-3 justify-end md:justify-self-end">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-lg grid place-items-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Toggle theme"
            aria-expanded={isMenuOpen}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden w-9 h-9 rounded-lg grid place-items-center transition ${
              isMenuOpen
                ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <Link
            to="/dashboard"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Open dashboard
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute right-6 top-full mt-3">
          <div className="w-52 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <nav className="flex flex-col gap-1 text-sm text-gray-600">
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                About
              </a>
              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Features
              </a>
              <a
                href="#developers"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Built With
              </a>

              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Open dashboard
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default LandingNavbar;
