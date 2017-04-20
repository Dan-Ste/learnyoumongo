const mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/${process.argv[2]}`, (err, db) => {
    if (err) throw err;

    const collection = db.collection(process.argv[3]);

    collection.remove({
        _id: process.argv[4]
    }, (err, res) => {
        db.close()
    })
});
