function findLongestPerfectSquareSubsequence(arr) {
  function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  }

  let maxLength = 0;
  let longestSubsequence = [];

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];

      if (isPerfectSquare(sum)) {
        let currentLength = end - start + 1;

        // Update only if we find a longer subsequence, or if this is the first subsequence
        if (currentLength > maxLength) {
          maxLength = currentLength;
          longestSubsequence = arr.slice(start, end + 1);
        }
      }
    }
  }

  return longestSubsequence;
}

// Test cases
console.log(findLongestPerfectSquareSubsequence([1, 7, 3, 9, 8, 12, 4, 2, 16])); // Expected: [3, 9, 8, 12, 4]
console.log(findLongestPerfectSquareSubsequence([4, 16, 1, 3, 8, 12, 7])); // Expected: [1, 3]
console.log(findLongestPerfectSquareSubsequence([1, 2, 3, 5])); // Expected: []
console.log(findLongestPerfectSquareSubsequence([2, 3, 5, 7, 11, 13, 17, 19])); // Expected: [11, 13, 17, 19]
console.log(findLongestPerfectSquareSubsequence([1, 1, 1, 1, 1])); // Expected: [1, 1, 1, 1]
console.log(findLongestPerfectSquareSubsequence([9, 16, 25, 36])); // Expected: [9, 16, 25, 36]
console.log(findLongestPerfectSquareSubsequence([10, 20, 30, 40, 50])); // Expected: []
console.log(findLongestPerfectSquareSubsequence([1, 8, 3, 4, 2, 9, 5, 6, 7])); // Expected: [8, 3, 4, 2, 9]
