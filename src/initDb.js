var Sequelize = require("sequelize");

const db = new Sequelize("revisioner", "root", "mlml1026", {
  host: "localhost",
  dialect: "mysql"
});

const models = require("./models")(db);
db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    Object.keys(models).forEach(key =>
      models[key]
        .sync({ force: true })
        .then(() => console.log("Model " + key + " is initalized"))
        .catch(err =>
          console.log("Model " + key + " is not initalized because of:\n", err)
        )
    );
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { db, models };
