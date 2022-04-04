const { getAllRestaurants, getAllReviews, updateReviews } = require("../controller/baedal.controller");

async function routes(fastify, options) {
    fastify.get("/restaurants", getAllRestaurants);
    fastify.get("/restaurants/:id/reviews", getAllReviews);
    fastify.put("/restaurants/:id/reviews", updateReviews);
}
module.exports = routes;