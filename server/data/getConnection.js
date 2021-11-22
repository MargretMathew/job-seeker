const { MongoClient } = require("mongodb");

const config = require("../config/config.json");

const url = config.db.url;
const dbName = config.db.dbName;

const client = new MongoClient(url);

async function getConnection() {
  await client.connect();
  return client.db(dbName);
}

module.exports = {
  getConnection,
};
