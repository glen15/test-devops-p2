'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        reply.code(200).send([{ title: "블로그" }, { note: "hello world" }])
    })
}
