module.exports = sequelize => {
  var models = {
    User: sequelize.import(__dirname + "/users"),
    QuestionSet: sequelize.import(__dirname + "/questionSets"),
    Question: sequelize.import(__dirname + "/questions"),
    QuestionAnswer: sequelize.import(__dirname + "/questionAnswers"),
    QuestionComment: sequelize.import(__dirname + "/questionComments"),
    QuestionReactionType: sequelize.import(
      __dirname + "/questionReactionTypes"
    ),
    QuestionReaction: sequelize.import(__dirname + "/questionReactions"),
    QuestionSetComment: sequelize.import(__dirname + "/questionSetComments"),
    QuestionSetFollow: sequelize.import(__dirname + "/questionSetFollows"),
    QuestionSetReactionType: sequelize.import(
      __dirname + "/questionSetReactionTypes"
    ),
    QuestionSetReaction: sequelize.import(__dirname + "/questionSetReactions"),
    QuestionSetTag: sequelize.import(__dirname + "/questionSetTags"),
    QuestionSumbit: sequelize.import(__dirname + "/questionSumbits"),
    QuestionTag: sequelize.import(__dirname + "/questionTags"),
    UserTag: sequelize.import(__dirname + "/userTags")
  };

  models.User.hasMany(models.QuestionSet, {
    as: "questionSets",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.User.hasMany(models.UserTag, {
    as: "userTags",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.User.hasMany(models.QuestionSetFollow, {
    as: "questionSetFollows",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.User.hasMany(models.QuestionSumbit, {
    as: "questionSumbits",
    foreignKey: "userId",
    sourceKey: "userId"
  });

  models.QuestionSet.hasMany(models.Question, {
    as: "questions",
    foreignKey: "questionSetId",
    sourceKey: "questionSetId"
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

  models.QuestionSet.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.Question.hasMany(models.QuestionAnswer, {
    as: "questionAnswers",
    foreignKey: "questionId",
    sourceKey: "questionId"
  });

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

  models.Question.belongsTo(models.QuestionSet, {
    as: "questionSet",
    foreignKey: "questionSetId",
    targetKey: "questionSetId"
  });

  models.QuestionAnswer.belongsTo(models.Question, {
    as: "question",
    foreignKey: "questionId",
    targetKey: "questionId"
  });

  models.QuestionAnswer.hasMany(models.QuestionSumbit, {
    as: "questionSumbits",
    foreignKey: "questionAnswerId",
    sourceKey: "questionAnswerId"
  });

  models.QuestionComment.belongsTo(models.Question, {
    as: "question",
    foreignKey: "questionId",
    targetKey: "questionId"
  });

  models.QuestionComment.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.QuestionReaction.belongsTo(models.Question, {
    as: "question",
    foreignKey: "questionId",
    targetKey: "questionId"
  });

  models.QuestionReaction.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.QuestionTag.belongsTo(models.Question, {
    as: "question",
    foreignKey: "questionId",
    targetKey: "questionId"
  });

  models.QuestionSumbit.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.QuestionSumbit.belongsTo(models.QuestionAnswer, {
    as: "questionAnswer",
    foreignKey: "questionAnswerId",
    targetKey: "questionAnswerId"
  });

  models.QuestionSetComment.belongsTo(models.QuestionSet, {
    as: "questionSet",
    foreignKey: "questionSetId",
    targetKey: "questionSetId"
  });

  models.QuestionSetComment.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.QuestionSetFollow.belongsTo(models.QuestionSet, {
    as: "questionSet",
    foreignKey: "questionSetId",
    targetKey: "questionSetId"
  });

  models.QuestionSetFollow.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.QuestionSetReaction.belongsTo(models.QuestionSet, {
    as: "questionSet",
    foreignKey: "questionSetId",
    targetKey: "questionSetId"
  });

  models.QuestionSetReaction.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  models.QuestionSetTag.belongsTo(models.QuestionSet, {
    as: "questionSet",
    foreignKey: "questionSetId",
    targetKey: "questionSetId"
  });

  models.QuestionSetTag.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
    targetKey: "userId"
  });

  return models;
};
