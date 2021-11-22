const { getConnection } = require("./getConnection.js");

async function notifications(email) {
  const connection = await getConnection();
  const collection = await connection.collection("users");
  return collection
    .aggregate([
      {
        $match: {
          email: email
        }
      },
      {
        $project: {
          _id: 0,
          messages: 1
        }
      }
    ]).toArray();

}

module.exports = notifications;
