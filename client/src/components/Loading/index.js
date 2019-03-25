import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ loading, size, color }) => {
  return loading ? <CircularProgress size={size} color={color} /> : null;
};

export default Loading;
