const { getConnection } = require("./getConnection.js");

async function newUser(name, email, contact, password) {

  const connection = await getConnection();
  const collection = await connection.collection("users");

  return collection.insertOne({
    name,
    email,
    contact,
    password,
    messages: []
  });

}

module.exports = newUser;
