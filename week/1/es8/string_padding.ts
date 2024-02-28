/**
 * String Padding
 */

function stringPadding() {
  const str = 'hello';
  console.log(str.padStart(10, 'X')); // 'XXXXXhello'
  console.log(str.padEnd(10, 'Y')); // 'helloYYYYY'
}

stringPadding()