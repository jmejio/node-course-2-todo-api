const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if(err) {
       return console.log('Hey unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

  //------------- start functionality ---------

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b994bda9763f118f91750a8')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5b991aecaaa2c9186c637d2e")
    }, {
        $set: {name: 'Juan M. Ramirez'},  //just update
        $inc: {age: 20}  //increment
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    
//   ------------- disconnect -------------------
//     client.close();
});