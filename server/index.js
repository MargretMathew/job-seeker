const chalk = require("chalk");
const express = require("express");
const route = require("./routes/main.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const config = require("./config/config.json");

const port = process.env.PORT || config.port;
const app = express();

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(fileUpload());
app.use(
  session({
    secret: "erhjkllioasedrcfvgbhn",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/resume", express.static(__dirname + "/user_data/resume"));

app.use("/", express.static(__dirname + "/static/dist"));
app.use("/", route);

app.listen(port, () => {
  console.log(chalk.green.inverse(`App started on port ${port}`));
});
