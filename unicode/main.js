'use strict';

const unicode = {
  encode: (str) => str.charCodeAt(0).toString(16),
  decode: (str) => String.fromCharCode(parseInt(str, 16)),
};

module.exports = unicode;
