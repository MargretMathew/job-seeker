const getAppliedCandidates = require("../data/getAppliedCandidates.js");

async function getJob(req, res) {
  const email = req.session.user;
  const result = await getAppliedCandidates(email);
  res.json(result)
}

module.exports = getJob;
