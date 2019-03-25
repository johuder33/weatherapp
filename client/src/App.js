import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WeatherMap from "./components/Map";
import Login from "./components/Login";
import { Provider } from "./components/Context";
import { PrivateRoute } from "./components/PrivateRoute";
import { routes } from "./constants";
import "./App.css";

class AppRouting extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.index} component={Login} />
            <PrivateRoute path={routes.map} component={WeatherMap} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRouting;
