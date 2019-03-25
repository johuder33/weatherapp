import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { color } from "../CardWeather/styles";

const icons = [
  "CLEAR_DAY",
  "CLEAR_NIGHT",
  "PARTLY_CLOUDY_DAY",
  "PARTLY_CLOUDY_NIGHT",
  "CLOUDY",
  "RAIN",
  "SLEET",
  "SNOW",
  "WIND",
  "FOG"
];

const LoadingIcons = () => {
  const iconIndex = Math.floor(Math.random() * icons.length);
  const icon = icons[iconIndex];

  return <ReactAnimatedWeather icon={icon} color={color} size={120} />;
};

export default LoadingIcons;
