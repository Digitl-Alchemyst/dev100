

function isEvenOrOdd(num) {
  // Your code here
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(`${4} is`, isEvenOrOdd(4)); // Should print "Even"
console.log(`${7} is`, isEvenOrOdd(7)); // Should print "Odd"
console.log(`${10} is`, isEvenOrOdd(10)); // Should print "Even"
console.log(`${11} is`, isEvenOrOdd(11)); // Should print "Odd"

arr = [47, 183, 76, 92, 129, 251, 39, 168, 102, 205, 88, 149, 214, 54, 33, 238, 71, 187, 121, 43, 97, 215, 134, 210, 6];
function isArrayEvenOrOdd(arr) {
    let results = [];
  // Your code here
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
  if (num % 2 == 0) {
    results.push( `${num} is even`);
  } else {
    results.push( `${num} is odd`);
  }

}
return results;
}

console.log(isArrayEvenOrOdd(arr));


;
function sortOddsAndEvens(arr) {
    let even = [];
    let odd = [];
  // Your code here
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
  if (num % 2 == 0) {
    even.push(num);
  } else {
    odd.push(num);
  }

}
return {'even': even, 'odd': odd};
}

console.log(sortOddsAndEvens([12, 7, 24, 3, 18, 22, 5, 9, 41, 14, 33, 28])); // Should print { even: [12, 24, 18, 22, 14, 28], odd: [7, 3, 5, 9, 41, 33] }
console.log(sortOddsAndEvens([45, 19, 8, 30, 2, 27, 10, 50, 4, 39, 17, 13])); // Should print { even: [8, 30, 2, 10, 4, 50, 4], odd: [45, 19, 27, 39, 17, 13] }
console.log(
  sortOddsAndEvens([132, 475, 256, 104, 387, 294, 189, 412, 67, 439, 311, 489]),
); // Should print { even: [132, 256, 104, 294, 412, 4], odd: [475, 387, 67, 439, 311, 489] }
console.log(
  sortOddsAndEvens([101, 236, 482, 319, 77, 405, 152, 279, 451, 18, 163, 396]),
); // Should print { even: [236, 482, 152, 405, 18, 396], odd: [101, 319, 77, 451, 163] }