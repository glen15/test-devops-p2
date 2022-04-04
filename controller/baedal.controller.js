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
        const reviews = database.collection('review')

        const id = req.params.id

        const allReviews = await reviews.find({ restaurants_id: `${id}` }).toArray()
        console.log(allReviews);
        reply.code(200).send(allReviews)
    } finally {
        await client.close();
    }
}

async function updateReviews(req, reply) {
    try {
        await client.connect();

        const database = client.db('baedal');
        const reviews = database.collection('review')

        const id = req.params.id
        const comment = req.body.comment
        const rating = req.body.rating

        const updateData = {
            $set: {
                comment,
                rating,
            },
        };

        const updateReview = await reviews.updateOne({ restaurants_id: id }, updateData)
        console.log(updateReview);
        reply.code(201).send(updateReview)

    } finally {
        await client.close();
    }
}


module.exports = { getAllRestaurants, getAllReviews, updateReviews };