import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { hasPosition, getPosition } from "../../helpers";
import { routes } from "../../constants";
import { ContextApp } from "../Context";

export const PrivateRoute = props => {
  const { setPosition } = useContext(ContextApp);

  if (!hasPosition()) {
    return <Redirect to={routes.index} />;
  }

  useEffect(() => {
    const location = getPosition();
    setPosition(JSON.parse(location));
  }, []);

  return <Route {...props} />;
};
