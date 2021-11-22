const { getConnection } = require("./getConnection.js");

async function getJobs() {
  const connection = await getConnection();
  const collection = await connection.collection("companies");

  return collection
    .aggregate([
      {
        $match: {
          job: {
            $ne: null
          }
        }
      },
      {
        $project: {
          name: "$job.name",
          company: "$name",
          description: "$job.description"
        }
      }
    ])
    .toArray();
}

module.exports = getJobs;
