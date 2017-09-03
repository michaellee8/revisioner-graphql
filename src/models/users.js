/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userFirebaseAuthId: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      userPhotoUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      userIntro: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: "users",
      createdAt: "userCreateTimestamp",
      updatedAt: "userLastInteractionTimestamp",
      indexes: [
        {
          fields: ["userFirebaseAuthId"]
        },
        {
          fields: ["userName"]
        }
      ]
    }
  );
};
