const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if(err) {
       return console.log('Hey unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

  //------------- start functionality ---------

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b992cbc9763f118f9174898')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

//deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//     console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
//     console.log(result);
// });

//findOneAndDelete
db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b99187bd5af8d1b746c2cab')
}).then((result) => {
    console.log(result);
});
//   ------------- disconnect -------------------
//     client.close();
});