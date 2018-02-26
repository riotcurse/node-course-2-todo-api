const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a819d485a1e435a06c03fbb11';//'5a819d485a1e435a06c03fbb';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('ID not found.')
//   }
//   console.log('Todo by ID',todo);
// }).catch((e) => console.log(e));
var id = '5a7463f7359ea6381fcd906f';
User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found.');
  }
  console.log('User By ID',JSON.stringify(user,undefined,2));
}).catch((e)=>{console.log(e)});
