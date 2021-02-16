# 자료 구조: 객체와 배열

## 기본적인 자료 구조

### 프로퍼티

일부 자바스크립트 값은 그 값과 연관된 다른 값을 갖기도 하는데, 이런 연관관계를 프로퍼티라 한다.

```jsx
var text = 'purple haze';
text['length']; // 11
text.length; // 11
```

### 객체 값

객체라는 값 타입은 프로퍼티를 마음껏 추가하고 제거하고 변경할 수 있다.

```jsx
var cat = { color: '회색', name: '금강', size: 46 };
cat.size = 47;
cat.size; // 47
delete cat.size;
cat.size; // undefined
```

변수와 마찬가지로 객체에 추가된 각 프로퍼티는 이름을 붙여 구분한다.

```jsx
var empty = {};
empty.notReally = 1000;
empty; // { notReally: 1000 }
```

유효하지 않은 변수명인 프로퍼티 이름에는 점 표기법으로 접근할 수 없으며, 대괄호로만 접근할 수 있다.

```jsx
var thing = { 'gabba gabba': 'hey', 5: 10 };
thing['5']; // 10
thing[2 + 3]; // 10
delete thing['gabba gabba'];
```

변수를 사용해 프로퍼티의 이름을 지정할 수 있다.

```jsx
var propertyName = 'length';
var text = 'coco';
text[propertyName]; // 4
```

in 연산자를 사용하면 객체에 특정 프로퍼티가 있는지 검사할 수 있다.

```jsx
var chineseBox = {};
chineseBox.context = context;
'context' in chineseBox; // true
'context' in chineseBox.context; // true
```

### 집합으로서의 객체

집합은 어떤 값도 한 번 이상 나타낼 수 없는 값의 모음이다.

```jsx
var set = { 금강: true };
set['란'] = true;
delete set['금강'];
'샘' in set; // false
```

### 변경 가능성

```jsx
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 == object2; // true
object1 == obejct3; // false

object1.value = 15;
object2.value; // 15
object3.value; // 10
```

### 컬렉션으로서의 객체: 배열

양수 인자를 하나 받아 0부터 시작해 지정한 숫자를 포함해 그 사이에 있는 모든 숫자가 담긴 배열을 반환하는 함수를 작성해보자.

```jsx
function range(upto) {
  var result = [];
  for (var i = 0; i <= upto; i++) result[i] = i;
  return result;
}
range(4); // [0, 1, 2, 3, 4]
```

반복문 변수에 한 글자짜리 문자(보통 i, j, k)를 사용하는 것은 프로그래머들 사이에서 널리 퍼져 있는 습관이다.

### 메서드

함수를 담고 있는 프로퍼티를 일반적으로 메서드(method)라 한다.

```jsx
var saying = [];
saying.push('마른');
saying.push('하늘에');
saying.push('날벼락');
saying; // ['마른', '하늘에', '날벼락']
saying.join(' '); // '마른 하늘에 날벼락'
saying.pop(); // '날벼락'
saying; // ['마른', '하늘에']
```

push 메서드는 배열 끝에 값을 삽입할 수 있다. pop 메서드는 배열에서 마지막 값을 꺼내 반환한다. join 메서드는 문자열 배열로부터 단 하나의 긴 문자열을 만들어낸다.

## 막내 이모의 고양이 문제 해결하기

```jsx
for (var i = 0; i < ARCHIVE.length; i++) {
  var email = ARCHIVE[i];
  // 이메일을 처리...
}
```

### 단락 분리

split 메서드는 문자열을 배열로 쪼개며, 인자로 전달된 문자열을 이용해 어느 부분을 기준으로 잘라야 할지 판단한다.

```jsx
var words = '소 잃고 외양간 고친다';
words.split(' '); // ['소', '잃고', '외양간', '고친다']
```

### 관련 단락 찾기

x.charAt(0)은 첫 문자를 반환하며, 1은 두 번째 문자를 반환한다.

```jsx
var paragraph = '태어난 고양이(2003/11/15, 어미는 반야) : 아라';
paragraph.charAt(0) == '태' &&
  paragraph.charAt(0) == '어' &&
  paragraph.charAt(0) == '난'; // true
```

slice 메서드는 첫 번째 인자로 전달한 위치의 문자부터 시작해 두 번째 인자로 지정한 위치의 문자 바로 앞에서 끝나는 범위의 문자열을 복사한다.

```jsx
paragraph.slice(0, 3) == '태어난'; // true
```

```jsx
function startsWith(string, pattern) {
  return string.slice(0, pattern.length) == pattern;
}

startsWith('rotation', 'rot'); // true
```

### 고양이 이름 추출

indexOf 메서드는 문자열 안의 문자나 부문자열의 (최초) 위치를 찾는데 사용할 수 있다.

```jsx
function catNames(paragraph) {
  var colon = paragraph.indexOf(':');
  return paragraph.slice(colon + 2).split(', ');
}

cateNames('태어난 고양이(2004/09/20), 어미는 라나 : 샘, 삐용이'); // ['샘', '삐용이']
```

### 전체 알고리즘

```jsx
var livingCats = { 금강: true };

for (var mail = 0; mail < ARCHIVE.length; mail++) {
  var paragraphs = ARCHIVE[mail].split('\n');
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (startsWith(paragraph, '태어난')) {
      var names = catName(paragraph);
      for (var name = 0; name < names.length; name++) {
        livingCats[names[name]] = true;
      }
    } else if (startsWith(paragraph, '눈감은')) {
      var names = catNames(paragraph);
      for (var name = 0; name < names.length; name++) {
        delete livingCats[names[name]];
      }
    }
  }
}

if ('나비' in livingCats) console.log('나비가 살아 있구나');
else console.log('안녕 나비야, 좋은 곳으로 가거라.');

for (var cat in livingCats) console.log('cat');
```

### 코드 정리

```jsx
function addToSet(set, values) {
  for (var i = 0; i < values; i++) set[values[i]] = true;
}

function removeFromSet(set, values) {
  for (var i = 0; i < values.length; i++) delete set[values[i]];
}

var livingCats = { 금강: true };

for (var mail = 0; mail < ARCHIVE.length; mail++) {
  var paragraphs = ARCHIVE[mail].split('\n');
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (startsWith(paragraph, '태어난'))
      addToSet(livingCats, catNames(paragraph));
    else if (startsWith(paragraph, '눈감은'))
      removeFromSet(livingCats, catNames(paragraph));
  }
}
```

```jsx
function findLivingCats() {
  var livingCats = { 금강: true };

  function handleParagraph(paragraph) {
    if (startsWith(paragraph, '태어난'))
      addToSet(livingCats, catNames(paragraph));
    else startsWith(paragraph, '눈감은');
    removeFromSet(livingCats, catNames(paragraph));
  }

  for (var mail = 0; mail < ARCHIVE.length; mail++) {
    var paragraphs = ARCHIVE[mail].split('\n');
    for (var i = 0; i < paragraphs.length; i++) handleParagraph(paragraphs[i]);
  }
  return livingCats;
}

var howMany = 0;
for (var cat in findLivingCats()) howMany++;
console.log('현재 ', howMany, '마리의 고양이가 살아 있습니다.');
```

### 날짜 표현

```jsx
var when = { year: 1980, month: 2, day: 1 };
var when = new Date(1980, 1, 1);

// 현재 시간을 나타내는 날짜 객체를 생성한다.
new Date();
// 1980년 2월 1일
new Date(1980, 1, 1);
// 2007년 3월 30일 8시 20분 30초
new Date(2007, 2, 30, 8, 20, 30);
```

인자의 순서는 년, 월, 일, 시, 분, 초, 밀리초다.

```jsx
var today = new Date();
console.log(
  '년: ',
  today.getFullYear(),
  ', 월: ',
  today.getMonth(),
  ', 일: ',
  today.getDate()
);
console.log(
  '시: ',
  today.getHours(),
  ', 분: ',
  today.getMinutes(),
  ', 초: ',
  today.getSeconds()
);
console.log('요일: ', today.getDay());

today.getTime();
```

객체 내부에서는 날짜를 1970년 1월 1일로부터 밀리 초로 얼마나 지났는지를 표현한다.

```jsx
var wende = new Date(1989, 10, 9);
var gulfWarOne = new Data(1990, 6, 2);

wende < gulfWarOne; // true
wende == wende; // true
wende == new Date(1989, 10, 9); // false
```

==는 두 객체가 같은 프로퍼티를 담고 있을 때조차도 비교하면 false가 반환된다.

```jsx
var wende1 = new Date(1989, 10, 9);
var wende2 = new Date(1989, 10, 9);

wende1.getTime() == wende2.getTime(); // true
```

Date 객체의 getTimezoneOffset 함수는 그리니치 표준시와의 차이를 분 단위로 파악하는 데 사용할 수 있다.

```jsx
new Date().getTimezoneOffset(); // -60
```

### 날짜 추출

```jsx
'태어난 고양이(2001/04/02, 어미는 율리) : 누리, 보리';
'눈감은 고양이(2006/04/27) : 아리';

function extractDate(paragraph) {
  function numberAt(start, length) {
    return Number(paragraph.slice(start, start + length));
  }
  return new Date(numberAt(8, 4), numberAt(13, 2) - 1, numberAt(16, 2));
}
```

### 더 많은 정보 수집

집합에 고양이에 관한 정보를 담은 객체를 저장한다.

```jsx
function catRecode(name, birthdate, mother) {
  return { name: name, birth: birthdate, mother: mother };
}

function addCats(set, names, birthdate, mother) {
  for (var i = 0; i < names.length; i++)
    set[names[i]] = catRecord(names[i], birthdate, mother);
}

function deadCats(set, names, deathdate) {
  for (var i = 0; i < names.length; i++) set[names[i]].death = deathdate;
}
```

어미 고양이의 이름을 추출한다.

```jsx
function extractMother(paragraph) {
  var start = paragraph.indexOf(', 어미는 ') + ', 어미는 '.length;
  var end = paragraph.indexOf(')');
  return paragraph.slice(start, end);
}

extractMother('태어난 고양이(2003/11/15, 어미는 금강) : 아라'); // 금강
```

```jsx
function findCats() {
  var cats = { 금강: catRecode('금강', new Date(1997, 2, 5), '알 수 없음') };

  function handleParagraph(paragraph) {
    if (startsWith(paragraph, '태어난')) {
      addCats(
        cats,
        catNames(paragraph),
        extractDate(paragraph),
        extractMother(paragraph)
      );
    } else if (startsWith(paragraph, '눈감은')) {
      deadCats(cats, catNames(paragraph), extractDate(paragraph));
    }
  }

  for (var mail = 0; mail < ARCHIVE.length; mail++) {
    var paragraphs = ARCHIVE[mail].split('\n');
    for (var i = 0; i < paragraphs.length; i++) {
      handleParagraph(paragraphs[i]);
    }
  }
  return cats;
}
```

### 데이터 표현

```jsx
function formatDate(date) {
  return (
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  );
}

function catInfo(data, name) {
  var cat = data[name];
  if (cat == undefinde) return name + '이라는 이름의 고양이는 없습니다.';
  var message =
    name + ', 태어난 날은 ' + formatDate(cat.birth) + ', 어미는 ' + cat.mother;
  if ('death' in cat) message += ', 눈감은 날은 ' + formatDate(cat.death);
  return message + '.';
}

catInfo(catData, '아라'); // '아라, 태어난 날은 2004/6/1, 어미는 반야.'
```

고양이가 담긴 객체를 인자로 전달하며 아직까지 살아 있는 고양이 가운데 가장 나이가 많은 고양이의 이름을 반환한다.

```jsx
function oldestCat(data) {
  var oldest = null;
  for (var name in data) {
    var cat = data[name];
    if (!('death' in cat) && (oldest == null || oldest.birth > cat.birth))
      oldest = cat;
  }

  if (oldest == null) return null;
  else return oldest.name;
}
```
