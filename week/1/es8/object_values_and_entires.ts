/**
 * Object.values() and Object.entries()
 */

function objectFunctions() {
  const person = { name: 'John', age: 30 };
  console.log(Object.values(person)); // ['John', 30]
  console.log(Object.entries(person)); // [['name', 'John'], ['age', 30]]
}

objectFunctions()
