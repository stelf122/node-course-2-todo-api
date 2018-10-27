const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bd46c543a449fdb5577ae0f'}).then((todo) => {

});

Todo.findByIdAndRemove('5bd46c543a449fdb5577ae0f').then((todo) => {
    console.log(todo);
});