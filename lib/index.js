'use strict';

const path = require('path');

const async = require('async');

const merge = require(path.join(__dirname, 'merge'));

function index(env, callback) {
  if (!env.config.environments) {
    return callback(new Error('environments must be defined.'));
  }

  const environment = env.config.environments[env.mode] || {};
  const plugins = environment.plugins || [];

  merge(env.config, environment);

  async.forEachSeries(plugins, env.loadPluginModule.bind(env), callback);
}

module.exports = index;
