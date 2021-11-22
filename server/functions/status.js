const setStatus = require("../data/setStatus.js");

async function status(req, res) {
  const email = req.session.user;
  const user_email = req.body.email
  const job_status = req.body.status
  const result = await setStatus(email, user_email, job_status);
  res.json(result)
}

module.exports = status;
