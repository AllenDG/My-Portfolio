import { Home, Pencil, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="flex items-center justify-center p-2 bg-white dark:bg-gray-800 border border-gray-300 rounded-full mx-auto w-fit space-x-6 mt-4">
      {" "}
      {/* Added mt-4 for top margin */}
      <div className="flex items-center space-x-10">
        {/* Home Icon */}
        <Link to="/" className="relative group">
          <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300 transition duration-200">
            <Home className="w-4 h-5 text-gray-900 dark:text-white group-hover:text-gray-600" />
          </div>
        </Link>
        {/* Project Icon */}
        <Link to="/project" className="relative group">
          <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300 transition duration-200">
            <Pencil className="w-4 h-5 text-gray-900 dark:text-white group-hover:text-gray-600" />
          </div>
        </Link>
        {/* Separator with Gray Border */}
        <div className="border-l border-gray-300 h-5 mx-2"></div>{" "}
        {/* Removed dark:border-gray-600 to keep it gray */}
        {/* Dark Mode Toggle */}
        <div
          className="relative inline-flex items-center cursor-pointer"
          onClick={toggleDarkMode}
        >
          <div
            className={`w-14 h-8 rounded-full flex items-center p-1 transition duration-300 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition duration-300 flex items-center justify-center ${
                isDarkMode
                  ? "translate-x-6 bg-gray-800"
                  : "translate-x-0 bg-white"
              }`}
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-white" />
              ) : (
                <Sun className="w-4 h-4 text-gray-800" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
