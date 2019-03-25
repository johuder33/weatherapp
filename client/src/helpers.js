import { STORAGE_KEY } from "./constants";

export const getPosition = () => localStorage.getItem(STORAGE_KEY);

export const hasPosition = () => Boolean(getPosition());

export const persistPosition = setPosition => location => {
  try {
    if (location && location !== null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(location));
      setPosition(location);
    }
  } catch (e) {
    console.error("some error", e);
  }
};

export const setPositionFromStorage = setPosition => {
  try {
    const position = getPosition();
    const location = JSON.parse(position);
    setPosition(location);
    return Boolean(location);
  } catch (e) {
    console.log(e);
    return false;
  }
};
