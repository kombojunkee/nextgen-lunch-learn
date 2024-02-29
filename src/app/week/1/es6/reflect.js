/**
 * Reflect
 */

function reflectExample() {
  const person = {
    name: 'John',
    age: 30
  };
  
  // Using Reflect to perform operations
  Reflect.set(person, 'name', 'Alice'); // Equivalent to person.name = 'Alice';
  console.log(person.name); // Alice
  
  console.log(Reflect.has(person, 'age')); // true
  console.log(Reflect.deleteProperty(person, 'age')); // true
}

reflectExample()