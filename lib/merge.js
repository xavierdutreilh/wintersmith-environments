const _ = require('lodash')

function merge (destination, source) {
  return _.mergeWith(destination, source, (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue)
    }
  })
}

module.exports = merge
