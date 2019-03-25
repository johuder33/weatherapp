const { isNumber } = require("../utils");

const checkLocation = (req, res, next) => {
  const { lat: latitude, lng: longitude } = req.params;

  if (!latitude || !longitude || !isNumber(latitude) || !isNumber(longitude)) {
    return res
      .status(400)
      .json({ error: "latitude and longitude should be a number" });
  }

  next();
};

module.exports = checkLocation;
