'use strict';

/**
 * 프로그램 구조
 */
var theNumber = Number(prompt('숫자를 입력하세요', ''));
console.log('입력한 숫자의 제곱은 ' + theNumber * theNumber + '입니다.');

/**
 * 조건부 실행
 */
var theNumber = Number(prompt('숫자를 입력하세요', ''));
if (!isNaN(theNumber))
  console.log('입력한 숫자의 제곱은 ' + theNumber * theNumber + '입니다.');

if (true == false) console.log('헷갈려!');
else console.log('참은 거짓이 아닙니다.');

var num = prompt('숫자를 입력하세요:', '0');

if (num < 10) console.log('작음');
else if (num < 100) console.log('중간');
else console.log('큼');

/**
 * while과 do 반복문
 */
var currentNumber = 0;
while (currentNumber <= 12) currentNumber = currentNumber + 2;

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
result;

do {
  var input = prompt('당신은 누구세요?');
} while (!input);

/**
 * for 반복문
 */
for (var number = 0; number <= 12; number = number + 2) console.log(number);

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1) result = result * 2;
result;

/**
 * 반복문 빠져나오기
 * 20보다 크고 7로 나눌 수 있는 첫 번째 수를 찾는 프로그램
 */
for (var counter = 20; ; counter++) {
  if (current % 7 == 0) break;
}
current;

for (var current = 20; current % 7 != 0; current++); // 아무 일도 하지 않음

/**
 * 간결한 방식의 변수 갱신
 */

var result = 1;
for (var counter = 0; counter < 10; counter++) result *= 2;

/**
 * switch를 이용한 분기
 */
switch (prompt('날씨가 어때요?')) {
  case '비':
    console.log('우산을 꼭 가져오세요.');
    break;
  case '맑음':
    console.log('옷차림을 가볍게 하세요.');
  case '흐림':
    console.log('외출하기에 좋습니다.');
    break;
  default:
    console.log('날씨가 어떤지 알 수 없음!');
    break;
}

/**
 * 주석(comment)
 */
// 곧 정의할 counter 변수는
// 값을 0부터 시작한다.
var counter = 0;
// 이어서 구문을 반복한다. 모자를 꽉 잡아라.
while (counter < 100 /* counter가 100 보다 작다 */)
  /* 반복문을 실행할 때마다 counter의 값을 증가시킨다.
  counter에 1을 더한다고 보면 된다. */
  counter++;
// 여기까지 오면 프로그램이 끝난다.
