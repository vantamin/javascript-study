'use strict';

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last;
  var deferTimer;
  return function () {
    var context = scope || this;
    var now = +new Date();
    var args = arguments;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
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
document.addEventListener('scroll', throttle(counter.increment));
document.getElementById('reset').addEventListener('click', counter.reset);
