const newUser = require("../data/newUser.js");

async function signup(req, res) {
  await req.session.destroy();
  res.json({
    status: true
  });
}

module.exports = signup;
