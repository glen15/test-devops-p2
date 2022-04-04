const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.DB_CONNECT);

async function getAllRestaurants(req, reply) {
    try {
        console.log("들어왔나")
        await client.connect();
        const database = client.db('baedal');
        const restaurants = database.collection('restaurants');
        const allRestaurants = await restaurants.find({}).toArray()
        console.log(allRestaurants);
        reply.code(200).send(allRestaurants)
    } finally {
        await client.close();
    }
}

async function getAllReviews(req, reply) {
    try {
        await client.connect();
        const database = client.db('baedal');
        const id = req.params.id
        const query = { rastaurants_id: `${id}` }
        const reviews = database.collection('review')
        // const allReviews = await reviews.findOne(query)
        const allReviews = await reviews.find(query).toArray()
        console.log(allReviews);
        reply.code(200).send(allReviews)
    } finally {
        await client.close();
    }
}

// async function addUser(req, reply) {
//     const users = this.mongo.db.collection("users");
//     const { name, age } = req.body;
//     const data = { name, age };
//     const result = await users.insertOne(data);
//     reply.code(201).send(result.ops[0]);
// }

module.exports = { getAllRestaurants, getAllReviews };