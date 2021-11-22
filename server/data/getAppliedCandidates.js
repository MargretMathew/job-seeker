const { getConnection } = require("./getConnection.js");

async function getAppliedCandidates(email) {
  const connection = await getConnection();
  const collection = await connection.collection("companies");

  return collection.aggregate([
    {
      $match: {
        email
      }
    },
    {
      $unwind: {
        "path": '$applied'
      }
    },
    {
      $project: {
        _id: 0,
        user: "$applied"
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: 'email',
        as: 'user_data'
      }
    },
    {
      $unwind: {
        path: "$user_data"
      }
    },
    {
      $project: {
        id: "$user_data._id",
        email: "$user",
        name: "$user_data.name",
        phone: "$user_data.contact"
      }
    }
  ]).toArray();
}

module.exports = getAppliedCandidates;
