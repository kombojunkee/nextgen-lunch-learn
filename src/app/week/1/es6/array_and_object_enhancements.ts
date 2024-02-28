/**
 * Array and Object Enhancements
 */

function arrayAndObjectEnhancements() {
  // Array.find()
  const numbers = [10, 20, 30, 40];
  const found = numbers.find(element => element > 25);
  console.log(found); // 30

  // Object.values() and Object.entries()
  const person = { name: 'John', age: 30 };
  console.log(Object.values(person)); // ['John', 30]
  console.log(Object.entries(person)); // [['name', 'John'], ['age', 30]]  
}

arrayAndObjectEnhancements()
console.log('ok')