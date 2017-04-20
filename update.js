const mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/${process.argv[2]}`, (err, db) => {
    if (err) throw err;

    const users = db.collection('users');

    users.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, (err, res) => {
        if (err) throw err;

        console.log(res);

        db.close();
    })
});
