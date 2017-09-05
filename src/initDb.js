var Sequelize = require("sequelize");
var Promise = require("bluebird");

const db = new Sequelize("revisioner", "apppp", "ggg-revisioner", {
  // host: "/cloudsql/michaellee8-nuclide-server:asia-east1:revisioner-mysql",
  dialect: "mysql",
  // port: "12345",
  dialectOptions: {
    socketPath:
      "/cloudsql/michaellee8-nuclide-server:asia-east1:revisioner-mysql"
  }
});

const models = require("./models")(db);

function getModelSyncPromise(models, keys, index = 0) {
  return models[keys[index]]
    .sync({ force: false, logging: false })
    .then(() => {
      console.log(
        "\x1b[32m" + "Model " + keys[index] + " has been initalized" + "\x1b[0m"
      );
      return index + 1 < keys.length
        ? getModelSyncPromise(models, keys, index + 1)
        : null;
    })
    .catch(err =>
      console.log(
        "\x1b[31m" +
          "Model " +
          keys[index] +
          " has not been initalized due to an error",
        err,
        "\x1b[0m"
      )
    );
}
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    getModelSyncPromise(models, Object.keys(models));
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { db, models };
