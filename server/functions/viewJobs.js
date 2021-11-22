const getJobs = require("../data/getJobs.js");

async function createCompany(req, res) {

  const result = await getJobs();

  res.json(result);
}

module.exports = createCompany;
