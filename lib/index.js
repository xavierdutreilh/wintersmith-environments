const async = require('async')

const merge = require('./merge')

function index (env, callback) {
  if (!env.config.environments) {
    return callback(new Error('environments must be defined.'))
  }

  const environment = env.config.environments[env.mode] || {}

  env.logger.verbose(`patching environment - mode: ${env.mode}`)
  merge(env.config, environment)
  env.logger.verbose('new config:', env.config)

  async.forEachSeries(environment.plugins, (plugin, callback) => {
    env.logger.verbose(`loading new plugin: ${plugin}`)
    env.loadPluginModule(plugin, callback)
  }, callback)
}

module.exports = index
