/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionSetFollows",
    {
      questionSetFollowId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionSetId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    },
    {
      tableName: "questionSetFollows",
      createdAt: "questionSetFollowTimestamp",
      updatedAt: false,
      indexes: [
        {
          fields: ["userId"]
        },
        {
          fields: ["questionSetId"]
        }
      ]
    }
  );
};
