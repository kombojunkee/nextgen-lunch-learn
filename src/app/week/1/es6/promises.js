/**
 * Promises
 */

function promiseExample() {
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data asynchronously
      setTimeout(() => {
        const data = 'Some data';
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));  
}

promiseExample()