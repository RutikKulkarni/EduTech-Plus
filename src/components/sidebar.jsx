import React from "react";
import { FaBook, FaChartBar, FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-4 shadow-lg">
      <nav>
        <ul className="space-y-4">
          <li>
            <a className="flex items-center text-gray-800 dark:text-white">
              <FaUserCircle className="mr-2" />
              My Profile
            </a>
          </li>
          <li>
            <a className="flex items-center text-gray-800 dark:text-white">
              <FaBook className="mr-2" />
              My Courses
            </a>
          </li>
          <li>
            <a className="flex items-center text-gray-800 dark:text-white">
              <FaChartBar className="mr-2" />
              Analytics
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
