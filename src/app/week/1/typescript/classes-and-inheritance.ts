/**
 * Classes and Inheritance
 */

class Animal {
  constructor(public name: string) {}
  move(distance: number) {
      console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  bark() {
      console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.move(10);
dog.bark();
