import React, { createContext, useState } from "react";
import { persistPosition } from "../../helpers";

export const ContextApp = createContext(null);

export const Provider = ({ children }) => {
  const [currentPosition, setPosition] = useState(null);
  return (
    <ContextApp.Provider
      value={{ currentPosition, setPosition: persistPosition(setPosition) }}
    >
      {children}
    </ContextApp.Provider>
  );
};
