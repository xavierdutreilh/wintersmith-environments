'use strict';

const path = require('path');

const async = require('async');

const merge = require(path.join(__dirname, 'merge'));

function index(env, callback) {
  if (!env.config.environments) {
    return callback(new Error('environments must be defined.'));
  }

  const environment = env.config.environments[env.mode] || {};

  merge(env.config, environment);

  async.forEachSeries(environment.plugins, (plugin, callback) => {
    env.loadPluginModule(plugin, callback);
  }, callback);
}

module.exports = index;
