import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { data } from "autoprefixer";


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("pokhara");

  useEffect(() => {
    getWeatherData(city)
  },[city])

  const getWeatherData = () => {
    const apiKey = 'fef5789c35085a507050decb49889d42';

    const currentWeatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${apiKey}` ;
    // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
      .then(response => response.json())
      .then(data => {setWeatherData(data);
       console.log(JSON.stringify(data))});
  };

  const handleSearch = (searchedCity) =>{
    setCity(searchedCity);
  }
  return (
    <>
      <Navbar onSearch={handleSearch} />
    </>
  );
};

export default App;
