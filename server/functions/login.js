const dbLogin = require("../data/dbLogin.js");

async function login(req, res) {

  const email = req.body.email;
  const password = req.body.password;

  let [userResult, companyResult] = await dbLogin(email, password);

  userResult = userResult.map(row => {
    row.userType = "user"
    return row;
  });
  companyResult = companyResult.map(row => {
    row.userType = "company"
    return row;
  });

  const [result] = [...userResult, ...companyResult]

  if (result != undefined) {
    req.session.user = result.email;
    req.session.userType = result.userType;
    res.json({
      status: true,
      userType: result.userType
    });
  } else {
    req.session.user = null;
    req.session.userType = null;
    res.json({
      status: false,
    });
  }
}

module.exports = login;
