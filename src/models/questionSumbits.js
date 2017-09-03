/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionSumbits",
    {
      questionSumbitId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionAnswerId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionSumbitTime: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    },
    {
      tableName: "questionSumbits",
      createdAt: "questionSumbitTimestamp",
      updatedAt: false,
      indexes: [
        {
          fields: ["userId"]
        },
        {
          fields: ["questionAnswerId"]
        }
      ]
    }
  );
};
