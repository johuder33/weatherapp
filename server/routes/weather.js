const express = require("express");
const checkLocation = require("../middleware/checkLocation");
const { getWeatherFromPoint } = require("../services/darksky");
const router = express.Router();

router.get("/getWeather/lat/:lat/lng/:lng", checkLocation, (req, res) => {
  const { lat: latitude, lng: longitude } = req.params;

  getWeatherFromPoint(latitude, longitude)
    .then(response => {
      res.json(response);
    })
    .catch(error => res.status(400).json({ error: error.message || error }));
});

module.exports = router;
