export const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
export const mapUrl = process.env.REACT_APP_GOOGLE_MAPS_URL;
export const googleMapURL = `${mapUrl}?key=${key}`;
export const STORAGE_KEY = "user:position";

export const routes = {
  map: "/weather",
  index: "/"
};
