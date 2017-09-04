var { resolver } = require("graphql-sequelize");
var models = require("../models");

module.exports = {
  Query: {
    question: resolver(models.Question, {
      before: (findOptions, args, context) => {
        findOptions.where = { questionId: args.id };
        return findOptions;
      },
      list: false
    }),
    questions: models.User.find({
      where: { userId: context.userId }
    })
  }
};
