/**
 * Default Parameters
 */

function greet2() {
  function greet(name = 'John') {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); // Hello, John!
  greet('Alice'); // Hello, Alice!  
}

greet2()