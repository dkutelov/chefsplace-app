const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage().bucket();
const auth = admin.auth();

// Always terminate with send, end or redirect! Otherwise the functio will keep running.
exports.deleteUser = functions.https.onRequest(async (req, res) => {
  const { email } = req.body;

  const user = await auth.getUserByEmail(email).catch((error) => {
    console.log(error);
    res.status(500).send({ message: "Unable to find user!" });
  });

  auth
    .deleteUser(user.uid)
    .then(() => {
      res.status(200).send("User susccesfully deleted!");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});
