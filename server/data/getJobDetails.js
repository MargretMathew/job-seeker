const { getConnection } = require("./getConnection.js");

async function getJobDetails(email) {

  const connection = await getConnection();
  const collection = await connection.collection("companies");
  console.log(email);
  return collection.aggregate([
    {
      $match: {
        email
      }
    },
    {
      $project: {
        name: "$job.name",
        description: "$job.description",
      }
    }
  ]).toArray();

}

module.exports = getJobDetails;
