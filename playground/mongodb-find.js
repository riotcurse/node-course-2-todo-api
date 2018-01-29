//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a60a5973122ec02c6734862')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {'Unable to fetch Todos.'});

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {'Unable to fetch Todos.'});
  db.collection('Users').find(
    {name: "Rio"}
  ).toArray().then((docs) => {
    console.log('Users:')
    console.log(JSON.stringify(docs,undefined,2))
  },(err) => {
    console.log('Unable to fetch Users.')
  })

  //db.close();
});
