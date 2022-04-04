'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        reply.code(200).send("project day 3 - git action version 4.0")
    })
}
