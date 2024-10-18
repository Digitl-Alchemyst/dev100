function findLargestPerfectSquareSum(arr) {
  function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  let largestSum = 0;
  let largestSubarray = [];

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];
      console.log(
        `Checking sum: ${sum}, subarray: [${arr.slice(start, end + 1)}]`,
      );
      if (isPerfectSquare(sum)) {
        console.log(`Perfect square found: ${sum}`);
        if (sum > largestSum) {
          largestSum = sum;
          largestSubarray = arr.slice(start, end + 1);
          console.log(
            `New largest sum: ${largestSum}, subarray: [${largestSubarray}]`,
          );
        }
      }
    }
  }

  console.log(
    `Final result: sum = ${largestSum}, subarray = [${largestSubarray}]`,
  );
  return largestSum > 0
    ? { sum: largestSum, subarray: largestSubarray }
    : { sum: null, subarray: [] };
}


console.log('Test 1', findLargestPerfectSquareSum([1, 4, 9, 16, 25, 36]));
console.log('Test 2', findLargestPerfectSquareSum([7, 2, 8, 3, 4, 5, 6]));
console.log('Test 3', findLargestPerfectSquareSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log('Test 4', findLargestPerfectSquareSum([10, 20, 30, 40, 50]));
console.log('Test 5', findLargestPerfectSquareSum([2, 3, 5, 7, 11, 13, 17, 19]));
