const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb+srv://mas:mas29@mas.lrkcwy5.mongodb.net/?appName=MAS';

MongoClient.connect(url).then(() => {
  
})