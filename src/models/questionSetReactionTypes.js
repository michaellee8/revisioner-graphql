/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionSetReactionTypes",
    {
      questionSetReactionType: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      questionSetReactionTypeWeight: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    },
    {
      tableName: "questionSetReactionTypes",
      createdAt: false,
      updatedAt: false
    }
  );
};
