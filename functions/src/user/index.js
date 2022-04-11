const functions = require("firebase-functions");

exports.hiUser = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello from user!", { structuredData: true });
  response.send("Hi, User");
});
