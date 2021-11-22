const { getConnection } = require("./getConnection.js");

async function dbLogin(email, password) {

  const connection = await getConnection();
  const userCollection = await connection?.collection("users");
  const companyCollection = await connection?.collection("companies");

  return Promise.all([
    userCollection
      ?.find({
        email,
        password
      })
      ?.toArray(),
    companyCollection
      ?.find({
        email,
        password
      })
      ?.toArray()
  ])

}

module.exports = dbLogin;
