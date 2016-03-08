'use strict';

const async = require('async');
const _ = require('lodash');

module.exports = function(env, callback) {
  const environments = env.config.environments || {};
  const environment = environments[env.mode] || {};
  const plugins = environment.plugins || [];

  _.merge(env.config, environment);

  async.forEachSeries(plugins, env.loadPluginModule.bind(env), callback);
};
