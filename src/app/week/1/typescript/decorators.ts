/**
 * Decorators
 */

function log(target: any, key: string) {
  console.log(`Method ${key} is called`);
}

class MyClass {
  @log
  myMethod() {
      // Method implementation
  }
}