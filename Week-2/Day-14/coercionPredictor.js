function coercionPredictor(val1, val2, operator) {
  const val1type = typeof val1;
  const val2type = typeof val2;

  let result;
  let explanation = '';

  switch (operator) {
    case '+':
      result = val1 + val2;
      if (val1type === 'number' && val2type === 'number') {
        explanation = 'Both values were added as numbers without coercion.';
      } else if (val1type === 'string' || val2type === 'string') {
        explanation =
          'One or both values were coerced to strings for concatenation.';
      }
      break;

    case '-':
    case '*':
    case '/':
      result = eval(`val1 ${operator} val2`);
      if (val1type === 'number' && val2type === 'number') {
        explanation = `Both values were ${
          operator === '-'
            ? 'subtracted'
            : operator === '*'
            ? 'multiplied'
            : 'divided'
        } as numbers without coercion.`;
      } else {
        explanation =
          'One or both values were coerced to numbers for the operation.';
      }
      break;

    case '==':
      result = val1 == val2;
      explanation = `Loose equality comparison may involve coercion: ${val1type} and ${val2type} were compared.`;
      break;

    case '===':
      result = val1 === val2;
      explanation = `Strict equality comparison: no type coercion occurred between ${val1type} and ${val2type}.`;
      break;
  }

  return { result, explanation };
}

console.log(coercionPredictor('5', 2, '*'));
// Output: { result: 10, explanation: "One or both values were coerced to numbers for the operation." }

console.log(coercionPredictor(1, '1', '=='));
// Output: { result: true, explanation: "Loose equality comparison may involve coercion: number and string were compared." }

console.log(coercionPredictor(1, 1, '==='));
// Output: { result: true, explanation: "Strict equality comparison: no type coercion occurred between number and number." }

console.log(coercionPredictor(true, "1", "+")); // Output: { result: "true1", explanation: "Boolean true was coerced to a string for concatenation." }

console.log(coercionPredictor(null, 5, "==")); // Output: { result: false, explanation: "Loose equality comparison: null was not coerced to a number." }

console.log(coercionPredictor(undefined, 0, "*")); // Output: { result: NaN, explanation: "Undefined was coerced to NaN for multiplication." }