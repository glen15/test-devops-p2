const { getAllRestaurants, getAllReviews } = require("../controller/baedal.controller");

async function routes(fastify, options) {
    fastify.get("/restaurants", getAllRestaurants);
    fastify.get("/restaurants/:id/reviews", getAllReviews);
}
module.exports = routes;