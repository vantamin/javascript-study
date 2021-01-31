# 함수

## 함수 정의 해부

```jsx
function square(x) {
  return x * x;
}
square(12);
```

어떤 수의 제곱을 계산하는 함수

```jsx
function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
}

power(2, 10);
```

### 정의 순서

```jsx
console.log('미래에서 말하길:', future());

function future() {
  return '아직까지도 날아다니는 차는 없습니다.';
}
```

### 지역 변수

```jsx
var x = 'A';

function setVarToB() {
  x = 'B';
}
setVarToB();
x; // 'B'

function setVarToC() {
  var x;
  x = 'C';
}
setVarToC();
x; // 'B'
```

### 중첩된 유효범위(scope)

```jsx
function multiplyAbsolute(number, factor) {
  function multiply(number) {
    return number * factor;
  }
  if (number < 0) return multiply(-number);
  else return multiply(number);
}
```

변수의 가시성에 대한 접근법을 어휘적 유효범위(lexical scoping)라 한다.

```jsx
var someting = 1;
{
  var someting = 2;
  // 변수를 가지고 작업을 수행
}
// 블록 바깥
```

### 스택(stack)

함수가 호출되고 반환하는 방식

함수의 본문이 실행되는 동안 컴퓨터가 나중에 실행을 계속할 지점을 알 수 있게 함수를 호출한 문맥(context)을 저장하는 곳이 스택이다.

### 함수 값

일급(first-class) 특성("함수는 값이다.")

```jsx
/**
 * 인자 없이 호출하는 연산
 */
var a = null;
function b() {
  return 'B';
}
(a || b)();
// 'B'
```

```jsx
/**
 * 익명 함수 표현식
 */
var a = null;
(
  a ||
  function () {
    return 'B';
  }
)();
// 'B'
```

### [클로저](/closure.js)

### 선택 인자

```jsx
function power(base, exponent) {
  var result = 1;
  if (exponent === undefined) exponent = 2;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
}
```

## 기법

### 중복 방지

```jsx
var number = 5;
if (number < 10) console.lg('0', number);
else console.log(number);
```

```jsx
function zeroPad(number, width) {
  var string = String(Math.round(number));
  while (string.length < width) string = '0' + string;
  return string;
}
```

### 재귀

```jsx
function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}
```

자바스크립트에서는 간단한 반복문을 실행하는 것이 함수를 여러 번 호출하는 것보다 상당히 비용이 적게 든다.

재귀가 늘 반복문에 대해 덜 효율적인 대안에 불과한 것은 아니다.

```jsx
function findSequence(goal) {
  function find(start, history) {
    if (start == goal) return history;
    else if (start > goal) return null;
    else
      return (
        find(start + 5, '(' + history + ' + 5)') ||
        find(start * 3, '(' + history + ' * 3)')
      );
  }
  return find(1, '1');
}

findSequence(24);
```
