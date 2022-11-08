var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/movieapp'; //Enter your db url



MongoClient.connect(url,  async (err, client) => {
  const dataArr = [];
    if (err) {
      console.log(err);
    } else {
        const db = client.db();
      console.log("Connected to db");
      //var cursor = await db.collection("forms").find().toArray();
      //console.log({ cursor });
      const data = db.collection('forms').find();
      data.forEach(function (doc, error) {
        console.log(doc)
       //dataArr.push(doc);
      })
      //console.log(dataArr);
      //client.close();
    }
  });

  