// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const arr = [
  [3, 4, 5, 6, 7, 6, 7, 8, 9, 4, 5, 7, 6],
  [3, 4, 5, 6, 7, 8, 9, 97, 0],
];

function largestThree(arr) {
  const flatArr = arr.flat();
  let thirdLargest = 0;
  let secondLargest = 0;
  let largest = 0;

  for (let i of flatArr) {
    if (i > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = i;
    } else if (i > secondLargest && i < largest) {
      thirdLargest = secondLargest;
      secondLargest = i;
    } else if (i > thirdLargest && i < secondLargest) {
      thirdLargest = i;
    }
  }
  return { largest, secondLargest, thirdLargest };
}

const result = largestThree(arr);

console.log(result);
