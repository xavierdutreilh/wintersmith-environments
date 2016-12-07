'use strict';

const fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}

exports.environments = {
  'build': (test) => {
    const actual = read(`${__dirname}/../tmp/index.html`);
    const expected = read(`${__dirname}/expected/index.html`);

    test.equal(actual, expected, 'should manage environment-specific settings');

    test.done();
  },
};
