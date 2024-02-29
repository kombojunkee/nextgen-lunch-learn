/**
 * Enhanced Object Literals
 */

function logGreeting() {
  const name = 'John'
  const age = 30;
  
  const person = {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }
  };
  
  person.greet()
}

logGreeting()