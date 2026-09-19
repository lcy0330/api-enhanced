const { constructServer } = require('./server')

let appPromise = null

module.exports = async (req, res) => {
  if (!appPromise) {
    appPromise = constructServer()
  }
  const app = await appPromise
  return app(req, res)
}
