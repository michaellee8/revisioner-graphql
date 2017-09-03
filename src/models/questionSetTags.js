/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionSetTags",
    {
      questionSetTagId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      questionSetId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionSetTagContent: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "questionSetTags",
      createdAt: "questionSetTagCreateTimestamp",
      updatedAt: false,
      indexes: [
        {
          fields: ["questionSetId"]
        },
        {
          fields: ["questionSetTagContent"]
        }
      ]
    }
  );
};
