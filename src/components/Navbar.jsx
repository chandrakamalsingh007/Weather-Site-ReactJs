import React, { useState } from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

const handleSearchClick=()=>{
    if(searchCity.trim()){
        onSearch(searchCity);
    }
}
  return (
    <nav className="flex items-center justify-between p-5  ">
      <div className="flex items-center gap-2 text-lg">
        <FilterDramaIcon className="text-[#4B5550]" />
        <p className="font-bold text-[#4B5550]">HamroWeather</p>
      </div>

      <div className="flex items-center gap-1">
        <TextField
          className="bg-white rounded-3xl w-[22rem] outline-[#4B5550] "
          variant="outlined"
          placeholder="Search city"
          value={searchCity}
          onChange={(e)=>setSearchCity(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#4B5550" }}
          className="rounded-md mt-1 text-base font-bold "
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>

      <div className="bg-[#4B5550] h-[35px] w-[170px] text-white gap-2 flex items-center rounded-2xl p-1">
        <GpsFixedIcon />
        <p>Current Location</p>
      </div>
    </nav>
  );
};

export default Navbar;
