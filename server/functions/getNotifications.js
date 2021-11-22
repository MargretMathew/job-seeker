const notifications = require("../data/notifications.js");

async function getNotifications(req, res) {
  const email = req.session.user;
  try {
    var [{messages}] = await notifications(email);
  } catch(err) {
    var messages = []
  }
  res.json(messages)
}

module.exports = getNotifications;
