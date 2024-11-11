const numberConversions = (value) => {
  // TODO: Convert input value using different number conversion methods
const usingNumber =  Number(value)
const usingParseInt = parseInt(value)
const usingParseFloat = parseFloat(value)
const usingUnary = +value
const usingMultiply = value * 1
  // Return an object with results from each conversion method
  return {
    usingNumber,
    usingParseInt,
    usingParseFloat,
    usingUnary,
    usingMultiply,
  };
};

console.log(numberConversions("123"));        // Test integer string
console.log(numberConversions("12.34"));      // Test decimal string
console.log(numberConversions("12px"));       // Test string with units
console.log(numberConversions(true));         // Test boolean
console.log(numberConversions([]));           // Test empty array
console.log(numberConversions(undefined));    // Test undefined