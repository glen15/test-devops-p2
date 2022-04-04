const { getAllRestaurants, getAllReviews, updateReviews } = require("../controller/baedal.controller");

async function routes(fastify, options) {
    fastify.get("/api/restaurants", getAllRestaurants);
    fastify.get("/api/restaurants/:id/reviews", getAllReviews);
    fastify.put("/api/restaurants/:id/reviews", updateReviews);
}
module.exports = routes;