const applyForJob = require("../data/applyForJob.js");

async function applyJob(req, res) {
  const email = req.session.user;
  const id = req.body.id;
  const result = await applyForJob(id, email);
  res.json({
    status: result.modifiedCount > 0
  })
}

module.exports = applyJob;
