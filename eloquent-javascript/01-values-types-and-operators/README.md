# 값, 변수, 제어 흐름

## 값

숫자(number), 문자열(string), 불리언(boolean), 객체(object), 함수(function), 미정의 값(undefined)

### 숫자

표준에서는 자바스크립트 숫자를 64비트 부동소수점 값으로 기술한다.

### 산술 연산

산술 연산자는 두 개의 값을 취해 그것으로부터 새로운 값을 만들어낸다.

더하기(+), 뺄셈(-), 곱하기(\*), 나누기(/), 나머지(%)

### 문자열

문자열은 텍스트를 표현하는 데 사용한다.

### 단항 연산자

두 값을 사용하는 연산자를 이항 연산자, 값을 하나만 취하는 연산자를 단항 연산자라고 한다.

```jsx
typeof 4.5; // "number"
typeof 'x'; // "string"
```

### 불리언 값, 비교, 불리언 로직

불리언 타입에는 true와 false라는 두 가지 값만 있다.

\>(~보다 큼), <(~보다 작음), >=(~보다 크거나 같다), <=(~보다 작거나 같다), ==(같다), !=(같지 않다)

&&(and), ||(or), !(not)

### 표현식과 문장

값을 만들어내는 코드의 일부를 표현식(expression), 표현식보다 더 규모가 큰 단위를 문장(statement)이라 한다.

## 변수

자바스크립트에서는 값을 잡아두기 위해 변수(variable)라는 것을 제공한다.

변수에는 항상 이름이 있으며, 이름으로 값을 가리킬 수 있다.

### 키워드와 예약어

```jsx
abstract boolean break byte case catch char class const continue debugger default delete do double else enum export extends false final finally float for function goto if implements import in instanceof int interface long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var void volatile while with
```

## 환경

변수의 모음과 특정 시점에 존재하는 변수의 값을 환경(environment)이라고 한다.

### 함수

함수(function)는 하나의 값으로 감싼 프로그램 조각이다.

```jsx
alert('안녕하세요!');
```

### prompt와 confirm

confirm을 이용하면 사용자에게 '확인/취소'를 묻는 질문을 할 수 있다. confirm은 불리언 값을 반환한다.

```jsx
confirm('그럼 함께하시겠습니까?');
```

prompt는 '질문을 하는 데' 쓸 수 있다. 첫 번째 인자는 질문 내용, 두 번째 인자는 사용자가 대답을 시작하는 텍스트다. 대화상자에 텍스트를 입력할 수 있으며, prompt 함수에서는 이를 문자열로 반환한다.

```jsx
prompt('알고 있는바를 모두 말해주세요.', '...');
```

### 환경 변경

자바스크립트 환경에 존재하는 거의 모든 변수에 새로운 값을 지정하는 것도 가능하다. 이는 유용할 수도 있지만 위험스럽기도 하다.

[실수로 변수를 재정의하는 것을 방지하는 방법](/eloquent-javascript/07-modules/README.md)
