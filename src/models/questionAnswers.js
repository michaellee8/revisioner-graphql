/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionAnswers",
    {
      questionAnswerId: {
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
      questionAnswerMediaUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      questionAnswerText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      questionAnswerIsCorrect: {
        type: DataTypes.INTEGER(1),
        allowNull: false
      },
      questionAnswerScore: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    },
    {
      tableName: "questionAnswers",
      createdAt: "questionAnswerCreateTimestamp",
      updatedAt: "questionAnswerLastUpdateTimestamp",
      indexes: [
        {
          fields: ["questionId"]
        }
      ]
    }
  );
};
