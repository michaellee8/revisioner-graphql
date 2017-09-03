module.exports = {
  QuestionAnswer: sequelize.import(__dirname + "/questionAnswers"),
  QuestionComment: sequelize.import(__dirname + "/questionComents"),
  QuestionReaction: sequelize.import(__dirname + "/questionReactions"),
  QuestionReactionType: sequelize.import(__dirname + "/questionReactionTypes"),
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
