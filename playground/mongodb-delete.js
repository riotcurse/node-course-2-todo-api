//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({test: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name: "Rio"}).then((results)=>{
    console.log(results);
  },(err)=>{"Goofed."})
  //db.close();
  const id = "5a60a741a501a202cfce500c";
  db.collection('Users').deleteOne({_id: new ObjectID(id)}).then((results)=>{
    console.log(results);
  },(err)=>{console.log("Goofed 2.")});
});
