const addJob = require("../data/addJob.js");

async function postJob(req, res) {
  const jobName = req.body.jobName;
  const description = req.body.description;
  const email = req.session.user;

  console.log(req.session);

  console.log(`login: ${email}`);
  const result = await addJob(jobName, description, email);
  res.json({
    status: result.matchedCount>0,
  });
}

module.exports = postJob;
