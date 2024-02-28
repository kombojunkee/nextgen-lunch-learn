/**
 * Classes
 */

function greet3() {
  class Person {
    name: string;
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }

  const john = new Person('John');
  john.greet(); // Hello, my name is John.
}

greet3()