/**
 * 타입 선언
 */
let foo: string = 'hello';
let bar: number = 1;

function multiply1(x: number, y: number): number {
  return x * y;
}
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply1(10, 3));

// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'blue';
color = 'red';
let myName: string = `Lee`;
let greeting: string = `Hello, my name is ${myName}.`;

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
let tuple: [string, number];
tuple = ['hello', 10];
// tuple = [10, 'hello']; // Error
// tuple = ['hello', 10, 'world', 100]; // Error
// tuple.push(true); // Error

// enum : 열거형은 숫자값 집합에 이름을 지정한 것이다.
enum Color1 {
  Red,
  Green,
  Blue,
}
let c1: Color1 = Color1.Green;

console.log(c1);

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;

console.log(c2);

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c3: Color3 = Color3.Blue;

console.log(c3);

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

function warnUser(): void {
  console.log('This is my warning message');
}

// never : 결코 발생하지 않은 값
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}

let primiteveStr: string;
primiteveStr = 'hello';
// primiteveStr = new String('hello'); // Error

let objectStr: String;
objectStr = 'hello';
objectStr = new String('hello');

// Date 타입
const today: Date = new Date();

// HTMLElement 타입
// const elem: HTMLElement = document.getElementById('myId');

class Person {}
// Person 타입
const person: Person = new Person();

/**
 * 정적 타이핑
 */
{
  let foo: string, bar: number, baz: boolean;

  foo = 'Hollo';
  bar = 123;
  baz = true;
}

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 10));

/**
 * 타입 추론
 */
{
  let foo = 123;
}

{
  let foo;

  foo = 'Hello';
  console.log(typeof foo);

  foo = true;
  console.log(typeof foo);
}
