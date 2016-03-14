'use strict';

const async = require('async');
const _ = require('lodash');

module.exports = function(env, callback) {
  if (!env.config.environments) {
    return callback(new Error('environments must be defined.'));
  }

  const environment = env.config.environments[env.mode] || {};
  const plugins = environment.plugins || [];

  _.merge(env.config, environment);

  async.forEachSeries(plugins, env.loadPluginModule.bind(env), callback);
};
