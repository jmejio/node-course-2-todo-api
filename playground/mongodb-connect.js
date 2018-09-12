const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if(err) {
       return console.log('Hey unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert *todo*');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Juan M',
    //     age: 40,
    //     location: 'Tampa, FL'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert *User*');
    //     }
    //     console.log(result.ops);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp()); //use id to get time
    // });



    

    client.close();
});