'use strict';

/**
 * 타입에 관해
 * 미정의 값
 * undefined
 * null "이 값은 정의됐지만 값이 없다."
 */

/**
 * 자동 타입 변환
 * 다른 타입의 값과 비교할 때 자바스크립트는 두 값 중 하나를 다른 값의 타입으로 변환하려고 한다.
 */
false == 0; // true
'' == 0; // true
'5' == 5; // true

null === undefined; // false
false === 0; // false
'' === 0; // false
'5' === 5; // false

var mybeNull = null;
// ... mybeNull에 문자열을 넣을지도 모르는 알 수 없는 코드 ...
if (mybeNull) console.log('mybeNull에 값이 들어 있습니다');

/**
 * 자동 타입 변환의 위험성
 */
'아폴로' + 5; // '아폴로5'
null + '로 만들기'; // 'null로 만들기'
'5' * 5; // 25
'딸기' * 5; // NaN
Number('5') * 5; // 25

/**
 * &&와 ||
 */
var input = prompt('성함이 어떻게 되십니까?', '홍길동');
console.log('안녕하세요 ' + (input || '고객님'));

false || alert('전 나타납니다!');
false && alert('전 아니에요.');
