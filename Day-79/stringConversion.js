const stringConversions = (value) => {
  // TODO: Convert input value using different string conversion methods
  let usingString, usingToString, usingTemplate, usingConcatenation;

  try {
    // Using String() constructor
    usingString = String(value);

    // Using toString() method with null check
    usingToString = value?.toString() || '';

    // Using template literal with special handling for Symbol
    usingTemplate = (typeof value === 'symbol') ? value.description : `${value}`;

    // Using concatenation with special handling for Symbol
    usingConcatenation = (typeof value === 'symbol') ? value.description : '' + value;
  } catch (error) {
    // Fallback values in case of error
    return {
      usingString: 'Error',
      usingToString: 'Error',
      usingTemplate: 'Error',
      usingConcatenation: 'Error'
    };
  }
  // Return an object with results from each conversion method
  return {
    usingString,
    usingToString,
    usingTemplate,
    usingConcatenation,
  };
};

console.log(stringConversions(123)); // Test number
console.log(stringConversions(null)); // Test null
console.log(stringConversions(undefined)); // Test undefined
console.log(stringConversions({ name: "John" })); // Test object
console.log(stringConversions([1, 2, 3])); // Test array
console.log(stringConversions(Symbol("test"))); 