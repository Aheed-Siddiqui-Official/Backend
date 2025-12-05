const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;



let _db;

const mongoConnect = (callback) => {
  
    .then((client) => {
      callback();
      _db = client.db('airbnb');
    })
    .catch((err) => {
      console.log("Error while connecting to mongo", err);
    });
};

const getDB = () => {
  if(!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
