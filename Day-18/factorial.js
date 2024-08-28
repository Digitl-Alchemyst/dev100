function factorial(n) {
  if (n < 0) {
    return { undefined: 'Use a non-negative integer' };
  }
  if (n === 0 || n === 1) {
    return { 'A factor of 0 is always:': 1 };
  }
  let result = 1;
  let mathString = '';
  for (let i = 2; i <= n; i++) {
    result *= i;
    mathString += `${i} ${i === n ? ' = ' : ' * '} `;

  }
  return { mathString, result };
}

console.log(factorial(5)); // Should print 120
console.log(factorial(0)); // Should print 1
console.log(factorial(-3)); // Should print undefined
console.log(factorial(10)); // Should print 3628800
console.log(factorial(1)); // Should print 1
console.log(factorial(12)); // Should print 479001600
