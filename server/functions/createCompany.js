const insertCompany = require("../data/insertCompany.js");

async function createCompany(req, res) {

  const name = req.body.name;
  const email = req.body.email;
  const contact = req.body.contact;
  const password = req.body.password;

  const result = await insertCompany(name, email, contact, password);

  res.json({
    status: result.insertedId != undefined
  });
}

module.exports = createCompany;
