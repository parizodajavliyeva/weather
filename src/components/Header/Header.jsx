import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import SideBar from "../SideBar/SideBar";
import axios from "axios";

function Header() {
  const [forecast, setForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const API_KEY = "e5e774629fcf72b428b60219302b9e65";

  const [location, setLocation] = useState({ lon: null, lat: null });
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        console.log(longitude, latitude);
        setLocation({
          lon: longitude,
          lat: latitude,
        });
      },
      (err) => {
        setError("Not allowed to current location");
      }
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=${API_KEY}&units=metric`
      )
      .then((res) => setCurrentWeather(res.data));
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=tashkent&appid=${API_KEY}&units=metric`
      )
      .then((res) => setForecast(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
      )
      .then((res) => setCurrentWeather(res.data));
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
      )
      .then((res) => setForecast(res.data));
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&${location.lon}&appid=${API_KEY}`
      )
      .then((res) => setAirQuality(res.data));
  }, [location]);

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`
      )
      .then((res) => setCurrentWeather(res.data));
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`
      )
      .then((res) => setForecast(res.data));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentWeather?.coord.lat}&lon=${currentWeather?.coord.lon}&appid=${API_KEY}`
      )
      .then((res) => setAirQuality(res.data));
  }, [currentWeather]);
  const inputRef = useRef();
  const handleChange = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div className="mana">
      <div className="header">
        <h3>Weather</h3>
        <div className="btns">
          <input
            ref={inputRef}
            onChange={handleChange}
            placeholder="Search"
            className="search-input"
            type="text"
          />
          <button onClick={() => fetchData()} className="btn-search">
            <IoMdSearch /> Search
          </button>
          <button onClick={getCurrentLocation} className="loaction">
            <FaLocationCrosshairs /> Current Location
          </button>
        </div>
      </div>
      <SideBar
        airQuality={airQuality}
        currentWeather={currentWeather}
        forecast={forecast}
      />
    </div>
  );
}

export default Header;
