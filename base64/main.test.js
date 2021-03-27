'use strict';

const base64 = require('./main');

describe('base64', () => {
  test('encode', () => {
    expect(base64.encode('uü€')).toBe('dcO84oKs');
  });

  test('decode', () => {
    expect(base64.decode('dcO84oKs')).toBe('uü€');
  });
});
