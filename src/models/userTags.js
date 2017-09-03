/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "userTags",
    {
      userTagId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "users",
          key: "userId"
        }
      },
      userTagContent: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "userTags",
      createdAt: "userTagCreateTimestamp",
      updatedAt: false,
      indexes: [
        {
          fields: ["userId"]
        },
        {
          fields: ["userTagContent"]
        }
      ]
    }
  );
};
