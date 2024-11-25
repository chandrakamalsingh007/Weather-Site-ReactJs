import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MainWeather = ({ weatherData }) => {
  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "city not available";
  const countryName = weatherData?.sys?.country || "country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const iconCode = weatherData?.weather?.[0]?.icon || "01d";
  const weatherIcon = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return (
    <div className="bg-[#4B5563] text-white rounded-xl w-[220px] p-[30px]">
      <div className="text-xl ">
        <p>Current Weather</p>
      </div>
      <div className="flex items-center text-2xl font-bold">
        {temperatureCelsius}°C
        <img src={weatherIcon} alt="weatherIcon" className="w-20" />
      </div>
      <div className="text-md mt-1 font-semibold">{weatherDescription}</div>
      <div className="mt-2">
        <div className="flex items-center">
        <CalendarMonthIcon/> 
        {currentDate}
        </div>
        <div className="mt-1 flex items-center">
        <LocationOnIcon/>
        {cityName}, {countryName}
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
