const getJobDetails = require("../data/getJobDetails.js");

async function getJob(req, res) {
  const email = req.session.user;
  const [result] = await getJobDetails(email);
  res.json(result)
}

module.exports = getJob;
