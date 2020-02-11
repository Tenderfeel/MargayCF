const functions = require('firebase-functions');

exports.helloWorld = functions.https.onCall((data, context) => {
  return {
    message: "Hello from Functions!",
  };
});
