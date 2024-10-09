import React, { useState, useEffect } from "react";
import Weather from "../components/Weather";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        setLoading(false);
      }, 1000);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <p className="text-2xl text-blue-500 dark:text-blue-300 font-bold animate-pulse">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
          🌤️ Weather Dashboard
        </h1>
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>

        {isAuthenticated ? (
          <Weather />
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Please log in to access the dashboard.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-indigo-600 dark:to-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-indigo-800 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700">
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
