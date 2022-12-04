const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const userRouter = require("./routes//userRoutes");
const subjectRouter = require("./routes///subRoutes");
const AppError = require("./utils//appError");
const globalerrorhandler = require("./controllers/errorController");
const app = express();
app.use(helmet());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));
app.use(express.json());
app.use(mongoSanitize());
if (process.env.NODE_ENV === "development") {
  // development login
  app.use(morgan("dev"));
}
app.use((req, res, next) => {
  console.log("Request received");
  //console.log(req.headers);// its task is to dispaly the headers of the request
  next();
});

app.use((req, res, next) => {
  req.time = new Date().toString();
  console.log(req.headers); // this is to check the headers
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/users", userRouter);
app.use("/api/examsub", subjectRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalerrorhandler);
module.exports = app;
