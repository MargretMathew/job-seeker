const { getConnection } = require("./getConnection.js");

async function addJob(name, desc, email) {
  const connection = await getConnection();
  const collection = await connection.collection("companies");

  return collection
    .updateOne({
      email
    }, {
      $set: {
        job: {
          name,
          description: desc
        }
      }
    })
}

module.exports = addJob;
