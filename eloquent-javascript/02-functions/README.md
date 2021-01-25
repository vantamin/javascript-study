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

## 정의 순서

```jsx
console.log('미래에서 말하길:', future());

function future() {
  return '아직까지도 날아다니는 차는 없습니다.';
}
```

## 지역 변수

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

## 중첩된 유효범위(scope)

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

## 스택(stack)

함수가 호출되고 반환하는 방식

함수의 본문이 실행되는 동안 컴퓨터가 나중에 실행을 계속할 지점을 알 수 있게 함수를 호출한 문맥(context)을 저장하는 곳이 스택이다.

## 함수 값

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

## [클로저](/closure.js)

## 선택 인자

```jsx
function power(base, exponent) {
  var result = 1;
  if (exponent === undefined) exponent = 2;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
}
```
