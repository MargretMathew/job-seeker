const newUser = require("../data/newUser.js");

async function signup(req, res) {

  const name = req.body.name;
  const email = req.body.email;
  const contact = req.body.contact;
  const password = req.body.password;
  const resume = req.files.resume;

  resume?.mv(`../server/user_data/resume/${email}.pdf`);

  const result = await newUser(name, email, contact, password);

  res.json({
    status: result.insertedId != undefined
  });
}

module.exports = signup;
