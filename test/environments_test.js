'use strict';

const fs = require('fs');
const path = require('path');

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}

exports.environments = {
  'build': (test) => {
    const actual = read(path.join(__dirname, '..', 'tmp', 'index.html'));
    const expected = read(path.join(__dirname, 'expected', 'index.html'));

    test.equal(actual, expected, 'should manage environment-specific settings');

    test.done();
  },
};
