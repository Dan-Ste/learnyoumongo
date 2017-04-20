const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const size = process.argv[2];

mongo.connect(url, (err, db) => {
  if(err) throw err;

  const prices = db.collection('prices');

  prices.aggregate({
    $match: {size: size}
  }, {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }, (err, results) => {
    if(err) throw err;

    console.log(results[0].average.toFixed(2));

    db.close();
  })
})
