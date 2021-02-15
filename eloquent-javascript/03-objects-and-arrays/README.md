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
