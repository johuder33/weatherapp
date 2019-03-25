import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = ({ icon }) => (
  <ReactAnimatedWeather icon={icon} color={"orange"} />
);

export default WeatherIcon;
