'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        reply.code(200).send("git action version 5.0")
    })
}
