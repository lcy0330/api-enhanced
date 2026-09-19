const generateConfig = require('./generateConfig')

let initPromise = null

async function init() {
  await generateConfig()
  const { constructServer } = require('./server')
  return constructServer()
}

module.exports = async (req, res) => {
  if (!initPromise) {
    initPromise = init()
  }
  const app = await initPromise
  return app(req, res)
}
