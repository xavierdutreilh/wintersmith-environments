'use strict';

const fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, {'encoding': 'utf8'});
}

exports.environments = {
  'build': (test) => {
    const actual = read('tmp/index.html');
    const expected = read('test/expected/index.html');

    test.equal(actual, expected, 'should manage environment-specific settings');

    test.done();
  },
};
