const fastify = require('fastify')()

fastify
  .register(require('fastify-nextjs'), { dev: true })
  .after(() => {
    fastify.next('/')
  })

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listenging on http://localhost:3000')
})
