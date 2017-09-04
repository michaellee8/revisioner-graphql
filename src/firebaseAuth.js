var firebaseAdmin = require("firebase-admin");
var User = require("./initDb").models.User;

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    require("./serviceAccountKey.json")
  ),
  databaseURL: "https://revisioner-3c321.firebaseio.com"
});
module.exports = function firebaseAuth(req, res, next) {
  if (req.get("X-Firebase-Id") && req.get("X-Firebase-Token")) {
    firebaseAdmin
      .auth()
      .verifyIdToken(req.get("X-Firebase-Token"))
      .then(decodedToken => {
        if (decodedToken.uid === req.get("X-Firebase-Id")) {
          req.userFirebaseId = decodedToken.uid;
          User.findOne({
            where: { userFirebaseAuthId: decodedToken.uid }
          })
            .then(user => {
              req.userId = user.userId;
              next();
            })
            .catch(err => {
              console.log(
                "Error occured in login of " +
                  decodedToken.uid +
                  " because of: \n",
                err
              );
              res.status(500).send({ error: "Server internal error" });
            });
          User.update(
            {},
            { where: { userFirebaseAuthId: decodedToken.uid } }
          ).catch(err =>
            console.log(
              "Error occured in login of " +
                decodedToken.uid +
                " because of: \n",
              err
            )
          );
        } else {
          res.status(400).send({ error: "Invalid auth data" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(400).send({ error: "Invalid auth data" });
      });
  } else {
    req.userFirebaseId = null;
    next();
  }
};
