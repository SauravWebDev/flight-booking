const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

process.env.PORT = 4001;
process.env.NODE_ENV = "development";
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let router = express.Router();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Accept-Encoding, Accept-Language, User-Agent, Origin, Content-Type, authorization "
  );
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  next();
});
app.use(router);

require("./routes")(router);

http
  .createServer(app)
  .on("error", function (err) {
    console.log(err);
    process.exit(1);
  })
  .listen(process.env.PORT, function () {
    console.log(
      "server listening on port " +
        process.env.PORT +
        " in " +
        process.env.NODE_ENV
    );
  });
