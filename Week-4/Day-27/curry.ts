function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curried(...args.concat(args2));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Should output 6
console.log(curriedAdd(1, 2)(3)); // Should also output 6
console.log(curriedAdd(1)(2, 3)); // Should also output 6

// Another Example

const curryDiscount =
  (fn) =>
  (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...more) => curryDiscount(fn)(...args, ...more);

const applyDiscount = curryDiscount(
  (discount, price) => price * (1 - discount)
);

const applyTenPercentDiscount = applyDiscount(0.1);
const applyTwentyPercentDiscount = applyDiscount(0.2);
const applyHolidayDiscount = applyDiscount(0.15);

console.log(applyTenPercentDiscount(100)); // 90
console.log(applyTenPercentDiscount(200)); // 180
console.log(applyTwentyPercentDiscount(100)); // 80
console.log(applyTwentyPercentDiscount(200)); // 160
console.log(applyHolidayDiscount(100)); // 85
console.log(applyHolidayDiscount(200)); // 170

// I kind of get this kind but need some practice with it.
