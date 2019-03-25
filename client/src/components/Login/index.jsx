import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { ContextApp } from "../Context";
import { routes } from "../../constants";
import { hasPosition, getPosition } from "../../helpers";
import { styles } from "./styles";

const LoginComp = ({ classes, history }) => {
  const { setPosition } = useContext(ContextApp);

  useEffect(() => {
    if (hasPosition()) {
      const location = getPosition();
      setPosition(JSON.parse(location));
      history.push(routes.map);
    }
  }, []);

  return (
    <Grid
      container={true}
      alignItems={"center"}
      classes={{ container: classes.container }}
      justify={"center"}
    >
      <Grid item={true} xs={12} sm={3} md={4} classes={{ item: classes.item }}>
        <Typography variant={"h4"}>Weather World App</Typography>

        <img
          src={"assets/alliot.png"}
          alt={"alliot logo"}
          className={classes.logo}
        />

        <Button
          color={"primary"}
          variant={"contained"}
          onClick={() => {
            navigator.geolocation.getCurrentPosition(position => {
              const { latitude: lat, longitude: lng } = position.coords;
              setPosition({ lat, lng });
              history.push(routes.map);
            });
          }}
        >
          Compartir mi ubicación
        </Button>

        <Paper classes={{ root: classes.paper }}>
          <Typography variant={"subtitle2"}>
            Para iniciar la app, es necesario compartir tu ubicación actual
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

const Login = withStyles(styles)(LoginComp);

export default Login;
