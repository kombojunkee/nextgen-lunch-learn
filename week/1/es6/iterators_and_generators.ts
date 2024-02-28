/**
 * Iterators and Generators
 */

function iteratorsAndGenerators() {
  // Iterator
  const iterableObject = {
    [Symbol.iterator]() {
      let count = 0;
      return {
        next() {
          if (count < 3) {
            count++;
            return { value: count, done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };

  for (const value of iterableObject) {
    console.log(value); // 1, 2, 3
  }

  // Generator
  function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = generatorFunction();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3  
}

iteratorsAndGenerators()