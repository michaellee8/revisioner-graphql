var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var graphqlHTTP = require("express-graphql");
// var graphqlRoot = require("./graphql/root");
var firebaseAuth = require("./firebaseAuth");
var fs = require("fs");
var cors = require("cors");
var { buildSchema } = require("graphql");
const { getSchema } = require("./crud.js");
console.log("gg");
// const { getSchema } = require("graphql-sequelize-crud-teselagen");
const db = require("./initDb");

var app = express();

// app.use(logger("dev"));
app.enable("trust proxy");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/uid", firebaseAuth);

app.use(
  "/graphql",
  graphqlHTTP({
    // schema: buildSchema(fs.readFileSync("./graphql/schema.graphql", "utf-8")),
    schema: getSchema(db),
    // rootValue: graphqlRoot,
    graphiql: true
  })
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: "error" });
});

module.exports = app;
