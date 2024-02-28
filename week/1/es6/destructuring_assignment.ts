/**
 * Destructuring Assignment
 */

function logName() {
  const person = { name: 'John', age: 30 };
  const { name, age } = person;
  console.log(name, age);
}

logName()