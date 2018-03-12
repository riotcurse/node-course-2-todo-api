const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove({_id: '5a9feba9ea9e993673975332'}).then((todo)=>{})
// Todo.findByIdAndRemove('5a9feba9ea9e993673975332').then((doc)=>{
//   console.log(doc);
// });
