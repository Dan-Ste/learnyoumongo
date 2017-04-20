const mongo = require('mongodb').MongoClient;
const age = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) throw err;

    const parrots = db.collection('parrots');

    parrots.find({
        age: {
            $gt: +age
        }
    }).toArray((err, docs) => {
        if (err) throw err;
        console.log(docs);
        db.close();
    });
});
