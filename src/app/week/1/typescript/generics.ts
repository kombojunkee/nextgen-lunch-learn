/**
 * Generics
 */

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("TypeScript");
