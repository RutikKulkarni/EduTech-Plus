import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SignInButton,
  SignOutButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";
import { FaSun, FaMoon, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { toggleTheme } from "../utils/theme";

const Navbar = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDark(theme === "dark");
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    toggleTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg px-4 lg:px-6 h-16 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800 dark:text-white">
          EduTech+
        </span>
      </Link>
      <div className="ml-auto flex items-center relative">
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 focus:outline-none"
        >
          {isMenuOpen ? (
            <FaTimes className="text-gray-800 dark:text-white" />
          ) : (
            <FaBars className="text-gray-800 dark:text-white" />
          )}
        </button>

        <nav
          className={`fixed top-16 left-0 w-full lg:static lg:flex lg:gap-6 lg:items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <Link
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-4 py-2 rounded transition duration-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-4 py-2 rounded transition duration-200"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-4 py-2 rounded transition duration-200"
            to="/weather"
          >
            Weather 
          </Link>
          <Link
            className="block text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-4 py-2 rounded transition duration-200"
            to="#contact"
          >
            Contact
          </Link>

          <button
            onClick={handleThemeToggle}
            className="p-2 rounded focus:outline-none"
          >
            {isDark ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-800 dark:text-white" />
            )}
          </button>

          {userId && (
            <div className="flex items-center px-4 py-2">
              <FaUserCircle className="text-gray-600 dark:text-gray-300 w-8 h-8 mr-2" />
              <span className="text-sm font-medium text-gray-800 dark:text-white">
                {user?.firstName || user?.email}
              </span>
            </div>
          )}

          {userId ? (
            <SignOutButton mode="modal">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-xs font-semibold">
                Sign Out
              </button>
            </SignOutButton>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-xs font-semibold">
                Sign In
              </button>
            </SignInButton>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
