'use strict';

const unicode = require('./main');

describe('unicode', () => {
  test('encode', () => {
    expect(unicode.encode('한')).toBe('d55c');
  });

  test('decode', () => {
    expect(unicode.decode('d55c')).toBe('한');
  });
});
