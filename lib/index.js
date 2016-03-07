'use strict';

const _ = require('lodash');

module.exports = function(env, callback) {
  var environments = env.config.environments || {};
  var environment = environments[env.mode] || {};

  _.merge(env.config, environment);

  callback();
};
