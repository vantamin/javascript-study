'use strict';

const sort = (str) => {
  return str
    .split('')
    .map((str) => ({ [str.charCodeAt(0)]: str }))
    .sort((a, b) => Object.keys(a) - Object.keys(b))
    .map((obj) => obj[Object.keys(obj)])
    .join('');
};

module.exports = sort;
