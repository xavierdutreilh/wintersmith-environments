'use strict';

const _ = require('lodash');

module.exports = function(env, callback) {
  const environments = env.config.environments || {};
  const environment = environments[env.mode] || {};

  _.merge(env.config, environment);

  env.loadPlugins(callback);
};
