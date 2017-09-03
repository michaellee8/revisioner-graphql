module.exports = sequelize => {
  var models = {
    QuestionAnswer: sequelize.import(__dirname + "/questionAnswers"),
    QuestionComment: sequelize.import(__dirname + "/questionComments"),
    QuestionReaction: sequelize.import(__dirname + "/questionReactions"),
    QuestionReactionType: sequelize.import(
      __dirname + "/questionReactionTypes"
    ),
    Question: sequelize.import(__dirname + "/questions"),
    QuestionSetComment: sequelize.import(__dirname + "/questionSetComments"),
    QuestionSetFollow: sequelize.import(__dirname + "/questionSetFollows"),
    QuestionSetReaction: sequelize.import(__dirname + "/questionSetReactions"),
    QuestionSetReactionType: sequelize.import(
      __dirname + "/questionSetReactionTypes"
    ),
    QuestionSet: sequelize.import(__dirname + "/questionSets"),
    QuestionSetTag: sequelize.import(__dirname + "/questionSetTags"),
    QuestionSumbit: sequelize.import(__dirname + "/questionSumbits"),
    QuestionTag: sequelize.import(__dirname + "/questionTags"),
    User: sequelize.import(__dirname + "/users"),
    UserTag: sequelize.import(__dirname + "/userTags")
  };
  models.Question.hasMany(models.QuestionComment, {
    as: "questionComments",
    foreignKey: "questionId",
    sourceKey: "questionId"
  });

  models.Question.hasMany(models.QuestionReaction, {
    as: "questionReactions",
    foreignKey: "questionId",
    sourceKey: "questionId"
  });

  models.Question.hasMany(models.QuestionTag, {
    as: "questionTags",
    foreignKey: "questionId",
    sourceKey: "questionId"
  });

  models.Question.hasMany(models.QuestionSumbit, {
    as: "questionSumbits",
    foreignKey: "questionId",
    sourceKey: "questionId"
  });

  models.QuestionSet.hasMany(models.QuestionSetComment, {
    as: "questionSetComments",
    foreignKey: "questionSetId",
    sourceKey: "questionSetId"
  });

  models.QuestionSet.hasMany(models.QuestionSetFollow, {
    as: "questionSetFollows",
    foreignKey: "questionSetId",
    sourceKey: "questionSetId"
  });

  models.QuestionSet.hasMany(models.QuestionSetReaction, {
    as: "questionSetReactions",
    foreignKey: "questionSetId",
    sourceKey: "questionSetId"
  });

  models.QuestionSet.hasMany(models.QuestionSetTag, {
    as: "questionSetTags",
    foreignKey: "questionSetId",
    sourceKey: "questionSetId"
  });

  models.User.hasMany(models.UserTag, {
    as: "userTags",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.User.hasMany(models.QuestionSet, {
    as: "questionSet",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.UserTag.hasMany(models.User, {
    as: "users",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.QuestionTag.hasMany(models.Question, {
    as: "questions",
    foreignKey: "questionId",
    sourceKey: "questionId"
  });

  models.QuestionSetTag.hasMany(models.QuestionSet, {
    as: "questionSets",
    foreignKey: "questionSetId",
    sourceKey: "questionSetId"
  });
  return models;
};
