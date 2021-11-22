const mongodb = require("mongodb");
const { getConnection } = require("./getConnection.js");

async function applyForJob(id, email) {
  const connection = await getConnection();
  const collection = await connection.collection("companies");
  return collection
  .updateOne({
    _id: new mongodb.ObjectId(id)
  }, {
    $addToSet: {
      applied: email
    }
  })
}

module.exports = applyForJob;
