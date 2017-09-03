/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionTags",
    {
      questionTagId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      questionTagContent: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      questionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "questions",
          key: "questionId"
        }
      }
    },
    {
      tableName: "questionTags",
      createdAt: "questionTagCreateTimestamp",
      updatedAt: false,
      indexes: [
        {
          fields: ["questionTagContent"]
        },
        {
          fields: ["questionId"]
        }
      ]
    }
  );
};
