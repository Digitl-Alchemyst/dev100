function squareAndFilterEvens(numbers, filter) {
  if (filter === true) {
    return numbers.filter((num) => num % 2 === 0).map((num) => num * num);
  } else {
    return numbers.filter((num) => num % 2 !== 0).map((num) => num * num);
  }

  
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(squareAndFilterEvens(numbers, false));
// Expected Evens output: [4, 16, 36, 64, 100]
// Expected Odds output: [ 1, 9, 25, 49, 81 ]