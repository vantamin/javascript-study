'use strict';

const sort = require('./sort');

test('sort', () => {
  expect(sort('₩~}|{`_^@?>=<;:/.-,+*)(\'&%$#"!')).toBe(
    '!"#$%&\'()*+,-./:;<=>?@^_`{|}~₩'
  );
});
