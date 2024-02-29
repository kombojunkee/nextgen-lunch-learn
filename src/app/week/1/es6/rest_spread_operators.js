/**
 * Rest and Spread Operators
 */

function restSpreadOperators() {
  // Rest Operator
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  console.log(sum(1, 2, 3, 4, 5)); // 15

  // Spread Operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArray = [...arr1, ...arr2];
  console.log(combinedArray); // [1, 2, 3, 4, 5, 6]  
}

restSpreadOperators()