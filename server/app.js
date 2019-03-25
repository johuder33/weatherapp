const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.SERVER_PORT;

const weatherRoutes = require("./routes/weather");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", weatherRoutes);

app.listen(PORT, () => {
  console.log("Server is listening at", PORT);
});
