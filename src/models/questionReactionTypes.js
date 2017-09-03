/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questionReactionTypes",
    {
      questionReactionType: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      questionReactionTypeWeight: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    },
    {
      tableName: "questionReactionTypes",
      createdAt: false,
      updatedAt: false
    }
  );
};
