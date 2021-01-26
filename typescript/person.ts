export class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHellow() {
    return 'Hello, ' + this.name;
  }
}
