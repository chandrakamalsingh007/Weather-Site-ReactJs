import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainWeather from "./components/MainWeather";
import SevenDayForecast from "./components/sevenday";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("pokhara");
  const [airQualityData, setAirQualityData] = useState(null);
  const [sevenDayForecast, setSevenDayForecast] = useState(null);
  const apiKey = 'fef5789c35085a507050decb49889d42';

  // Fetch data whenever the city changes
  useEffect(() => {
    getWeatherData(city);
  }, [city]);

  const getAirQualityData = (lat, lon) => {
    const airQualityUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios
      .get(airQualityUrl)
      .then((response) => {
        setAirQualityData(response.data.list[0]);
      })
      .catch((error) => {
        console.error("Error fetching Air Quality Data:", error);
        alert("Error fetching air quality data. Please try again.");
      });
  };

  const getWeatherData = (city) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    axios
      .get(currentWeatherUrl)
      .then((response) => {
        const data = response.data;
        setWeatherData(data);

        // Fetch air quality data only if coordinates are available
        if (data.coord) {
          getAirQualityData(data.coord.lat, data.coord.lon);
        } else {
          console.warn("Coordinates not found for air quality data");
        }
      })
      .catch((error) => {
        console.error("Error fetching Current Weather Data:", error);
        alert("Error fetching current weather data. Please try again.");
      });

    axios
      .get(forecastUrl)
      .then((response) => {
        setSevenDayForecast(response.data);
      })
      .catch((error) => {
        console.error("Error fetching 7-Day Forecast Data:", error);
        alert("Error fetching 7-day forecast data. Please try again.");
      });
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <>
       <Navbar onSearch={handleSearch} />
      {weatherData && (
        <div className="flex flex-col p-6 gap-4">
          <div className="flex-1">
            <MainWeather weatherData={weatherData} />
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2 ms-5">7 Days Forecast</h2>
            {sevenDayForecast ? (
              <SevenDayForecast forecastData={sevenDayForecast} />
            ) : (
              <p>Loading forecast...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
