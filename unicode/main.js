'use strict';

const char = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
  '₩',
];

const code = char
  .map((str) => ({ [str.charCodeAt(0)]: str }))
  .sort((a, b) => {
    return Object.keys(a) - Object.keys(b);
  });

const result = code.map((obj) => obj[Object.keys(obj)]);

console.log(code);
console.log(result);
