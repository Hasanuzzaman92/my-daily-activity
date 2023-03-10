import React, { useContext, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark("dark");
    } else {
      setIsDark("light");
    }
  }, []);

  useEffect(() => {
    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeSwitch = () => {
    setIsDark(isDark === "dark" ? "light" : "dark");
  };

  const handleLogOut = () => {
    logout();
  };

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          onClick={() => setTheme(!theme)}
          className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          {theme ? (
            <FaSun onClick={handleThemeSwitch}></FaSun>
          ) : (
            <FaMoon onClick={handleThemeSwitch}></FaMoon>
          )}
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <NavLink
              to="/addtask"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wide text-sky-500 underline transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium tracking-wide text-gray-700 dark:text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytask"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wide text-sky-500 underline transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium tracking-wide text-gray-700 dark:text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
            >
              My Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/completedtask"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wide text-sky-500 underline transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium tracking-wide text-gray-700 dark:text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }
            >
              Completed Task
            </NavLink>
          </li>
          <li>
            <Link
              onClick={handleLogOut}
              to=""
              className="inline-flex items-center justify-center text-white w-full h-12 px-6 font-medium tracking-wide bg-sky-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className="bg-sky-400 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-sky-400 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="px-4 py-5 mx-auto border-b-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center text-3xl font-bold text-sky-500"
        >
          My Daily Activity
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {menuItems}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      className="inline-flex items-center text-3xl font-bold text-sky-500"
                    >
                      My Daily Activity
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">{menuItems}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
