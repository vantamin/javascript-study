# 함수형 프로그래밍

함수를 영리하게 조합하는 방법을 통해 추상화를 달성한다.

## 추상화

Abstraction

## 고차 함수

다른 함수를 대상으로 동작하는 함수

```jsx
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log);
```

```jsx
function sum(numbers) {
  var total = 0;
  forEach(numbers, function (number) {
    total += number;
  });
  return total;
}
```

### 함수 수정

```jsx
function negate(func) {
  return function (x) {
    return !func(x);
  };
}
var isNotNaN = negate(isNaN);
isNotNaN(NaN); // false
```

```jsx
function negate(func) {
  return function () {
    return !func.apply(null, arguments);
  };
}
```

### reduce 함수

```jsx
function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}
```

```jsx
function countZeros(array) {
  function counter(total, element) {
    return total + (element === 0 ? 1 : 0);
  }
  return reduce(counter, 0, array);
}
```

```jsx
function count(test, array) {
  var counted = 0;
  forEach(array, function (element) {
    if (test(element)) counted++;
  });
  return counted;
}

function countZeroes(array) {
  function isZero(x) {
    return x === 0;
  }
  return count(isZero, array);
}
```

### 배열 매핑

```jsx
function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

map(Math.round, [0.01, 2, 9, 89, Math.PI]); // [0, 2, 10, 3Î]
```
