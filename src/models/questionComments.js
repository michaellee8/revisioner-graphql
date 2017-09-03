/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionComments",
    {
      questionCommentId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      },
      questionCommentContent: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "questionComments",
      createdAt: "questionCommentCreateTimestamp",
      updatedAt: "questionCommentLastUpdateTimestamp",
      indexes: [
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
