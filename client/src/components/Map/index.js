import React, { useState, useContext } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import { ContextApp } from "../Context";
import Loading from "../Loading";
import { googleMapURL } from "../../constants";
import WeatherContent from "../WeatherContent";

const LoadingMap = () => (
  <Typography align={"center"} component={"div"}>
    <Loading loading={true} />
    Cargando...
  </Typography>
);

const MapWrapper = props => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState({ lat: null, lng: null });

  return (
    <GoogleMap
      zoom={props.defaultZoom}
      defaultCenter={props.defaultCenter}
      onClick={e => {
        const latLng = e.latLng;
        setLocation(latLng.toJSON());
        setOpen(!open);
      }}
      defaultOptions={{
        zoomControl: false,
        scaleControl: false,
        panControl: false
      }}
    >
      <Dialog
        maxWidth={"md"}
        open={open}
        onClose={() => setOpen(!open)}
        keepMounted={true}
      >
        <WeatherContent location={location} />
      </Dialog>
    </GoogleMap>
  );
};

const WeatherMap = withScriptjs(withGoogleMap(MapWrapper));

const WeatherPreloadedMap = props => (
  <WeatherMap
    {...props}
    loadingElement={<LoadingMap />}
    googleMapURL={googleMapURL}
  />
);

const Map = () => {
  const { currentPosition } = useContext(ContextApp);
  return (
    <WeatherPreloadedMap
      containerElement={<div style={{ height: `inherit` }} />}
      mapElement={<div style={{ height: `inherit` }} />}
      defaultZoom={3}
      defaultCenter={currentPosition}
    />
  );
};

export default Map;
