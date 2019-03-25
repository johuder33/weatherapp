import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core";
import ReactAnimatedWeather from "react-animated-weather";
import Fah2Cel from "fahrenheit-to-celsius";
import { styles, color } from "./styles";

const F2C = degree => Math.round(Fah2Cel(degree));

const WeatherCardComp = ({ classes, weather }) => {
  const { timezone } = weather;
  const { icon, temperature, summary } = weather.currently;
  const iconName = String(icon.replace(/(-)/g, "_")).toUpperCase();
  return (
    <Card classes={{ root: classes.card }}>
      <CardHeader
        title={timezone}
        titleTypographyProps={{
          variant: "h5",
          classes: { h5: classes.text },
          align: "center"
        }}
        subheader={summary}
        subheaderTypographyProps={{
          variant: "subtitle2",
          classes: { subtitle2: classes.text },
          align: "center"
        }}
      />
      <CardContent>
        <Grid container={true} justify={"center"}>
          <Grid item={true}>
            <ReactAnimatedWeather size={100} color={color} icon={iconName} />
          </Grid>

          <Divider />

          <Grid item={true} xs={12}>
            <Typography
              variant={"h5"}
              classes={{ h5: classes.text }}
              paragraph={true}
              align={"center"}
            >
              {`Temperatura: ${F2C(temperature)} º`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const WeatherCard = withStyles(styles)(WeatherCardComp);

export default WeatherCard;
