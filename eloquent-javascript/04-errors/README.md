# 오류 처리

## 문제 유형

문제 유형은 프로그래머의 실수와 런타임 문제로 나뉜다.

### 프로그래머의 실수

프로그래머가 필요한 인자를 함수에 전달하지 않았다면 프로그래머의 실수다.

### 런타임 오류

프로그램에서 사용자에게 이름을 입력해 달라고 했는데 빈 문자열을 돌려받았다면 런타임 오류다.

## 오류 처리

```jsx
function between(string, start, end) {
  var startAt = staring.indexOf(start) + start.length;
  var endAt = string.indexOf(end, startAt);
  return string.slice(startAt, endAt);
}

between("루이 '팝' 암스트롱", "'", "'"); // 팝
```

### 특별한 값 반환

함수가 스스로 해결할 수 없는 문제에 직면하면 정상적으로는 반환할 수 없는 값을 반환한다.

```jsx
function between(string, start, end) {
  var startAt = string.indexOf(start);
  if (startAt == -1) return undefined;
  startAt += start.length;
  var endAt = string.indexOf(end, startAt);
  if (endAt == -1) return undefined;

  return string.slice(startAt, endAt);
}

var input = prompt('뭐라도 말씀 좀 해주세요', '');
var parenthesized = between(input, '(', ')');
if (parenthesized != undefined)
  console.log("'", parenthesized, "'에 괄호를 치셨군요.");
```

단점

첫째, 함수가 모든 가능한 종류의 값을 반환할 수 없다.

두 번째, 때때로 코드가 어수선해질 수 있다.

```jsx
function lastElement(array) {
  if (array.length > 0) return array[array.length - 1];
  else return undefined;
}

lastElement([1, 2, undefined]); // undefined
```

### 예외

예외 처리(exception handing)은 어떤 이유로 함수에서 정상적으로 값을 반환하지 못한다면 하던 일을 멈추고 즉시 문제를 처리하는 방법을 알고 있는 곳으로 되돌아가는 것이다.

스택 풀기는 현재 함수뿐만 아니라 해당 함수를 호출한 쪽에서도 벗어나 현재 코드 실행을 시작한 최상위 수준의 호출부로 이동하는 것이다.

```jsx
function lastElement(array) {
  if (array.length > 0) return array[array.length - 1];
  else throw '빈 배열의 마지막 요소는 취할 수 없습니다.';
}

function lastElementPlusTen(array) {
  return lastElement(array) + 10;
}

try {
  console.log(lastElementPlusTen([]));
} catch (error) {
  console.log('뭔가 잘못됨: ', error);
}
```

throw는 예외를 발생 시킨다.

try는 예외에 대한 장애물을 설정한다. try 다음에 나오는 블록 내의 코드에서 예외가 발생하면 catch 블록이 실행된다.

### 예외가 발생한 후의 정리

```jsx
var currentThing = null;

function processThing(thing) {
  var prevThing = currentThing;
  currentThing = thing;
  // 복잡한 처리를 수행...
  currentThing = prevThing;
}
```

finally 키워드는 '어떤 일이 일어나든 try 블록에 있는 코드를 실행한 후 이 코드를 실행한다.'

```jsx
function processThing(thing) {
  var prevThing = currentThing;
  currentThing = thing;
  try {
    // 복잡한 처리를 수행...
  } finally {
    currentThing = prevThing;
  }
}
```

### 오류 객체

```jsx
try {
  console.log(Sasquatch);
} catch (error) {
  console.log('예외 발생: ' + error.message);
}

throw new Error('늑대가 나타났다!');
```

### 선택적인 예외 포착

```jsx
for (;;) {
  try {
    alert(inputNumber() + 5);
    break;
  } catch (e) {
    alert('숫자를 입력하지 않았습니다. 다시 시도하세요.');
  }
}
```

```jsx
var InvalidInputError = new Error('유효하지 않은 숫자 입력');

function inputNumber() {
  var input = Number(prompt('숫자를 입력하세요', ''));
  if (isNaN(input)) throw InvalidInputError;
  return input;
}

for (;;) {
  try {
    alert(inputNumber() + 5);
    break;
  } catch (e) {
    if (e != InvalidInputError) throw e;
    alert('숫자를 입력하지 않았습니다. 다시 시도하세요.');
  }
}
```

## 자동화된 테스트

```jsx
function testBetween() {
  function assert(name, x) {
    if (!x) throw 'Assertion failed: ' + name;
  }

  assert('똑같은 구분자', between('a |b| c'), '|', '|' == 'b');
  assert('전체 문자열', between('[[n]]'), '[[', ']]' == 'n'));
  assert('순서가 거꾸로임', between(']x['), '[', ']' == undefined));
  assert('종결 문자 누락', between(' -->'), '-->', '<--' == undefined));
  // 기타 등등
}
```
