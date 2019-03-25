const request = require("request");
const { DARK_SKY_URL, DARK_SKY_KEY } = require("../constants");

const getWeatherFromPoint = (latitude, longitude) =>
  new Promise((resolve, reject) => {
    const url = [
      DARK_SKY_URL,
      DARK_SKY_KEY,
      `${latitude},${longitude}?lang=es`
    ].join("/");
    request(url, (error, _, body) => {
      if (error) {
        return reject(error);
      }

      resolve(JSON.parse(body));
    });
  });

module.exports = {
  getWeatherFromPoint
};
