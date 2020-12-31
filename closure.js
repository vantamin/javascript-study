/**
 * closure
 * 함수를 값으로 다룰 수 있다
 * 함수 스택의 특성
 * 지역 변수를 생성한 후 이 지역 변수를 반환하는 함수를 반환
 * upward Funarg problem 상향 펀아그 문제
 * 일부 지역 변수에 '닫혀 있는' 함수를 closure라 한다.
 */

function createFunction() {
  var local = 100;
  return function () {
    return local;
  };
}

function makeAdder(amount) {
  return function (number) {
    return number + amount;
  };
}

var addTwo = makeAdder(2);
addTwo(3);
// -> 5
