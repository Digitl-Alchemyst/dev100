function filterEvenNumbers(arr) {
  // Your code here
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

function squareElements(arr) {
  // Your code here
  let squared = [];
  for (let i = 0; i < arr.length; i++) {
    squared.push(arr[i] * arr[i]);
  }
  return squared;
}

function squareFilteredNumbers(arr) {
  // Your code here
  let squaredEvens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      squaredEvens.push(arr[i] * arr[i]);
    }
  }
  return squaredEvens;
}

const arr = [1, 2, 3, 4, 5];
const arr1 = [-2, -1, 0, 1, 2];
const arr2 = [];
const arr3 = [1, 3, 5, 7, 9];
const arr4 = Array.from({ length: 15 }, (_, i) => i + 1);
const arr5 = Array.from(
  { length: 25 },
  () => Math.floor(Math.random() * 1000) - 500
);

console.log(filterEvenNumbers(arr));
console.log(filterEvenNumbers(arr1));
console.log(filterEvenNumbers(arr2));
console.log(filterEvenNumbers(arr3));
console.log(filterEvenNumbers(arr4));
console.log(filterEvenNumbers(arr5));

console.log(squareElements(arr));
console.log(squareElements(arr1));
console.log(squareElements(arr2));
console.log(squareElements(arr3));
console.log(squareElements(arr4));
console.log(squareElements(arr5));

console.log(squareFilteredNumbers(arr));
console.log(squareFilteredNumbers(arr1));
console.log(squareFilteredNumbers(arr2));
console.log(squareFilteredNumbers(arr3));
console.log(squareFilteredNumbers(arr4));
console.log(squareFilteredNumbers(arr5));











