/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionReactions",
    {
      questionReactionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      questionReactionType: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: "questionReactionTypes",
          key: "questionReactionType"
        }
      },
      questionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "questions",
          key: "questionId"
        }
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "users",
          key: "userId"
        }
      }
    },
    {
      tableName: "questionReactions",
      createdAt: "questionReactionTimestamp",
      updatedAt: false,
      indexes: [
        {
          fields: ["questionReactionType"]
        },
        {
          fields: ["questionId"]
        },
        {
          fields: ["userId"]
        }
      ]
    }
  );
};
