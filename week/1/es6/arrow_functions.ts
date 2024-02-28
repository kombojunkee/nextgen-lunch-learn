/**
 * Arrow functions
 */

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
// const add = (a, b) => a + b;

const button = document.getElementById('myButton');
const obj = {
  name: 'John',
  handleClick: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

// button.addEventListener('click', obj.handleClick); // 'this' inside handleClick refers to 'button' element

// const button = document.getElementById('myButton');
// const obj = {
//   name: 'John',
//   handleClick: () => {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// button.addEventListener('click', obj.handleClick); // 'this' inside handleClick refers to 'obj' object

// const name = 'John';
// console.log(`Hello, ${name}!`);