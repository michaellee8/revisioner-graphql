var Sequelize = require("sequelize");

const db = new Sequelize("revisioner", "root", "mlml1026", {
  host: "localhost",
  dialect: "mysql"
});

db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    const models = require("./models")(db);
    Object.keys(models).forEach(key =>
      models[key]
        .sync({ force: false })
        .then(() => console.log("Model " + key + " is initalized"))
        .catch(err =>
          console.log("Model " + key + " is not initalized because of:\n", err)
        )
    );
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
