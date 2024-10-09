import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col space-y-4 mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition duration-300 ease-in-out"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-indigo-600 dark:to-blue-600 text-white py-3 rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500 dark:text-blue-400 text-center font-medium">Fetching weather data...</p>}

      {error && <p className="text-red-500 dark:text-red-400 text-center font-medium">{error}</p>}

      {weatherData && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {weatherData.location.name}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {weatherData.current.condition.text}
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
            {weatherData.current.temp_c}°C | {weatherData.current.temp_f}°F
          </p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
            className="mx-auto mt-4 w-20 h-20"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
