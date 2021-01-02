/**
 * execution context 실행 컨텍스트
 * 실행 가능한 코드가 실행되기 위해 필요한 환경
 * 일반적으로 실행 가능한 코드는 전역 코드와 함수 내 코드
 * e.g. 변수, 함수 선언, scope, this
 */

var x = 'xxx';

function foo() {
  var y = 'yyy';

  function bar() {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}
foo();
