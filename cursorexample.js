const { MongoClient } = require('mongodb');
const connection = "mongodb://localhost:27017";
const client = new MongoClient(connection);
async function run() {
  try {
    await client.connect();
    const testCollection = await client.db("movieapp").collection('data');
    const result = await testCollection.insertMany([
      {
        name: "Popeye",
        rating: 5,
        qty: 100
      },
      {
        name: "KFC",
        rating: 4,
        qty: 121
      },
    ]);
    console.log(result)
    const query = {
      name: "Popeye",
    };
    const cursor = testCollection.find(query);
    cursor.on("data", data => console.log(data));
    const allValues = await cursor.toArray();
    console.log(allValues);
    const firstResult = await cursor.toArray();
    console.log("First count: ", firstResult.length);
    await cursor.rewind();
    const secondResult = await cursor.toArray();
    console.log("Second count: ", secondResult.length);
    

  } finally {
    await client.close();
  }
}
run().catch(console.dir);