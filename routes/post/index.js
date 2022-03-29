'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        reply.code(200).send("바꿔도 되는거냐")
    })
}
