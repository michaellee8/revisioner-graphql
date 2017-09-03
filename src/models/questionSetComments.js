/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionSetComments",
    {
      questionSetCommentId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      questionSetId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      questionSetCommentContent: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "questionSetComments",
      createdAt: "questionSetCommentCreateTimestamp",
      updatedAt: "questionSetCommentLastUpdateTimestamp",
      indexes: [
        {
          fields: ["questionSetId"]
        },
        {
          fields: ["userId"]
        }
      ]
    }
  );
};
