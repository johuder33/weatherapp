import React, { useState, useEffect } from "react";
import LoadingWeather from "../LoadingWeather";
import CardWeather from "../CardWeather";

const WeatherContent = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { lat, lng } = location;

    if (!lat || !lng) {
      return;
    }

    const url = `/api/getWeather/lat/${lat}/lng/${lng}`;

    console.log(url);

    setLoading(true);

    fetch(url, {
      headers: new Headers({
        "content-type": "application/json"
      })
    })
      .then(res => res.json())
      .then(resp => {
        setWeather(resp);
        setLoading(false);
        console.log("response", resp);
      })
      .catch(console.error.bind(null, "error"));
  }, [location]);

  if (loading || !weather) {
    return <LoadingWeather label={"Consultando el clima..."} />;
  }

  return <CardWeather weather={weather} />;
};

export default WeatherContent;
