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

    db.collection('Users').find({
        name: 'Mike'
    }).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    db.collection('Users').find({
        name: 'Mike'
    }).toArray().then((docs) => {
        console.log('simple:', docs);
        console.log('Stringify:', JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });



  //------------- disconnect -------------------
    //client.close();
});