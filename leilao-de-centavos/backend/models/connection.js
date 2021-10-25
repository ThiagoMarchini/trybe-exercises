const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewURLParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017';

let connection = null;

const getConnection = async () => {
  connection = connection
    || (await MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db('leilaoCents')));
    return connection;
};

module.exports = { getConnection };