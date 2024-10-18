const add2 = (x) => {
  return x + 2;
};
const multiplyBy3 = (x) => {
  return x * 3;
};
const subtract1 = (x) => {
  return x - 1;
};

function compose(...functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

console.log(compose(add2, multiplyBy3, subtract1)(4)); // Expected 11
console.log(compose(subtract1, multiplyBy3, add2)(4)); // Expected 17
