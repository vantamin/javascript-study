/**
 * 클래스 정의
 * TypeScript가 지원하는 클래스는 ECMAScript 6의 클래스와 상당히 휴사하지만 몇 가지 TypeScript만의 고유한 확장 기능이 있다.
 */
{
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    walk() {
      console.log(`${this.name} is walking.`);
    }
  }

  const person = new Person('Lee');
  person.walk();
}

/**
 * 접근 제한자
 */
{
  class Foo {
    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  {
    const foo = new Foo('x', 'y', 'z');

    console.log(foo.x);
    // console.log(foo.y); // Error
    // console.log(foo.z); // Error
  }

  class Bar extends Foo {
    constructor(x: string, y: string, z: string) {
      super(x, y, z);

      console.log(this.x);
      console.log(this.y);
      // console.log(this.z); // Error
    }
  }
}

/**
 * 생성자 파라미터에 접근 제한자 선언
 */
{
  class Foo {
    constructor(public x: string) {}
  }

  const foo = new Foo('Hello');
  console.log(foo);
  console.log(foo.x);

  class Bar {
    constructor(private x: string) {}
  }

  const bar = new Bar('Hello');

  console.log(bar);
}

/**
 * readonly 키워드
 */
{
  class Foo {
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;

    constructor() {
      this.MSG = 'hello';
    }

    log() {
      // this.MAX_LEN = 10; // Error
      // this.MSG = 'Hi'; // Error

      console.log(`MAX_LEN: ${this.MAX_LEN}`);
      console.log(`MSG: ${this.MSG}`);
    }
  }

  new Foo().log();
}

/**
 * static 키워드
 */
{
  class Foo {
    static instanceCounter = 0;

    constructor() {
      Foo.instanceCounter++;
    }
  }

  var foo1 = new Foo();
  var foo2 = new Foo();

  console.log(Foo.instanceCounter);
  // console.log(foo2.instanceCounter); // Error
}

/**
 * 추상 클래스
 */
{
  abstract class Animal {
    abstract makeSound(): void;

    move(): void {
      console.log('roaming the earth ...');
    }
  }

  // new Animal() // Error

  class Dog extends Animal {
    makeSound() {
      console.log('bowwow~~');
    }
  }

  const myDog = new Dog();
  myDog.makeSound();
  myDog.move();
}
