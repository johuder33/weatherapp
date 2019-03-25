import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const LoadingWeather = ({ label }) => (
  <Card>
    <CardContent>
      <Grid container={true} justify={"center"}>
        <Grid item={true}>
          <CircularProgress size={80} />
        </Grid>
        <Divider />
        <Grid item={true} xs={12}>
          <Typography align={"center"} variant={"subtitle2"}>
            {label}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default LoadingWeather;
