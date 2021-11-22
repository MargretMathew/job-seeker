const mongodb = require("mongodb");
const { getConnection } = require("./getConnection.js");

async function setStatus(email, user_email, status) {
  const connection = await getConnection();
  const collection = await connection.collection("companies");
  const user_collection = await connection.collection("users");

  result = await collection.aggregate([
    {
      $match: {
        email
      }
    },
    {
      $project: {
        name:1,
        _id:0
      }
    }
  ]).toArray()
  company = result[0].name;
  await user_collection.updateOne({
    email: user_email
  }, {
    $push: {
      messages: {
        type: (status=="select")?"success": "error",
        message: `${company} ${status}ed your job application`
      }
    }
  });

  if(status=="select") {
    return collection
      .updateOne({
        email
      }, {
        $addToSet: {
          selected: user_email
        }
      })
  }
  return collection
    .updateOne({
      email
    }, {
      $addToSet: {
        rejected: user_email
      }
    })
}

module.exports = setStatus;
