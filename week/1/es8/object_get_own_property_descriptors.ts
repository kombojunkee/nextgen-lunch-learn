/**
 * Object.getOwnPropertyDescriptors()
 */

function objectDescriptors() {
  const obj = {
    name: 'John',
    age: 30
  };
  
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  console.log(descriptors);
}

objectDescriptors()
