const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const Routes = require('./app/routes/routes')

const LOCAL_DB = config.get("DATABASE_LOCAL")
const DB = config.get("DATABASE").replace(
  "<password>",
  config.get("PASSWORD")
);
console.log(DB)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connection Successfull");
  });
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", Routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // console.log('env', req.app.get('env'));
  res.locals.message = err.message;
  res.locals.error = config.get("env") === "development" ? err : {};

  // render the error page
    res.status(err.status || 500);
    res.json({ message: `No API is registered with this route ${req.url} and method ${req.method}` });
});


module.exports = app;
