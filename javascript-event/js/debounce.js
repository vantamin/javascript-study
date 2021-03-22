'use strict';

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function counter(element) {
  var counter = 0;
  return {
    increment: function () {
      counter++;
      element.innerHTML = counter;
    },
    reset: function () {
      counter = 0;
      element.innerHTML = counter;
    },
  };
}

var counter = counter(document.getElementById('counter'));
document.addEventListener('scroll', debounce(counter.increment, 250));
document.getElementById('reset').addEventListener('click', counter.reset);
