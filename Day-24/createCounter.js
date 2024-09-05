function createCounter(initialValue) {
  let count = initialValue;

  return function () {
    count += 1;
    return count;
  };
}

function createCounterWithDecrement(initialValue) {
  let count = initialValue;

  return function () {
    count -= 1;
    return count;
  };
}

function createCounterWithReset(initialValue) {
  let count = initialValue;

  return function () {
    count += 1;
    console.log('Count +1 before reset:', count);
    count += 2
    console.log('Count +2 before reset:', count);

    count = initialValue;
    return count;
  };
}

// Test createCounter
const counter = createCounter(5);
console.log(counter()); // Expected output: 6
console.log(counter()); // Expected output: 7
console.log(counter()); // Expected output: 8

// Test createCounterWithDecrement
const decrementCounter = createCounterWithDecrement(10);
console.log(decrementCounter()); // Expected output: 9
console.log(decrementCounter()); // Expected output: 8
console.log(decrementCounter()); // Expected output: 7

// Test createCounterWithReset
const resetCounter = createCounterWithReset(3);
console.log(resetCounter()); // Expected output: 3
console.log(resetCounter()); // Expected output: 3
console.log(resetCounter()); // Expected output: 3
