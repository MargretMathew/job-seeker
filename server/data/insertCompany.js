const { getConnection } = require("./getConnection.js");

async function insertCompany(name, email, contact, password) {
  const connection = await getConnection();
  const collection = await connection.collection("companies");

  return collection.insertOne({
    name,
    email,
    contact,
    password,
    job: null,
    applied: [],
    selected: [],
    rejected: []
  });

}

module.exports = insertCompany;
