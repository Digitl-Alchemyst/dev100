# Code Challenge: Array Manipulation and Algorithms

## Problem Statement

Implement two functions that demonstrate advanced array manipulation and algorithmic thinking in JavaScript:

1. A function that rotates an array to the right by k steps.
2. A function that finds the length of the longest increasing subsequence in an array.

This challenge aims to enhance your understanding of array operations and dynamic programming concepts, which are crucial for solving complex algorithmic problems in software development.

## Function Signatures

```javascript
function rotateArray(arr, k) {
   // Your code here 
}

function longestIncreasingSubsequence(arr) {
   // Your code here
}
```

## Input

- For `rotateArray`:
  - `arr`: An array of numbers
  - `k`: A non-negative integer representing the number of steps to rotate

- For `longestIncreasingSubsequence`:
  - `arr`: An array of numbers

## Output

- `rotateArray`: Returns a new array rotated k steps to the right
- `longestIncreasingSubsequence`: Returns the length of the longest increasing subsequence in the array

## Example

### Input:
```javascript
let arr1 = [1, 2, 3, 4, 5];
let k = 2;
let arr2 = [10, 9, 2, 5, 3, 7, 101, 18];
```

### Output:
```javascript
rotateArray(arr1, k);
// should return [4, 5, 1, 2, 3]

longestIncreasingSubsequence(arr2);
// should return 4 (the longest increasing subsequence is [2, 5, 7, 101])
```

## Constraints

- The input arrays can contain positive integers, negative integers, and zero.
- For `rotateArray`, k can be any non-negative integer, including zero and values larger than the array length.
- The arrays will have at least one element.
- For `longestIncreasingSubsequence`, the subsequence doesn't need to be contiguous.

## Testing the Script

To test the functions, you can use the following code:

```javascript
let arr1 = [1, 2, 3, 4, 5];
console.log("Rotated array:", rotateArray(arr1, 2));
console.log("Rotated array (k > length):", rotateArray(arr1, 7));

let arr2 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Longest increasing subsequence length:", longestIncreasingSubsequence(arr2));

// Additional test cases
console.log("Rotate empty array:", rotateArray([], 3));
console.log("Rotate by 0:", rotateArray([1, 2, 3], 0));
console.log("LIS of sorted array:", longestIncreasingSubsequence([1, 2, 3, 4, 5]));
console.log("LIS of reverse sorted array:", longestIncreasingSubsequence([5, 4, 3, 2, 1]));
```

## Bonus Challenge

Implement the `rotateArray` function in-place, without using extra space proportional to the array size. (Hint: You can do this in O(1) extra space)

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

1. Array Rotation:
   - Rotating an array to the right by k steps means moving each element k positions to the right, wrapping around to the beginning of the array when reaching the end.
   - This operation is useful in various scenarios, such as implementing circular buffers or solving certain algorithmic problems.

2. Longest Increasing Subsequence (LIS):
   - A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
   - The longest increasing subsequence is the longest subsequence of a given sequence in which the subsequence's elements are in strictly increasing order.
   - This problem has applications in various fields, including bioinformatics and text processing.

### Step 2: Implementing the Functions

#### rotateArray

Method 1: Using array slicing

```javascript
function rotateArray(arr, k) {
    if (arr.length === 0) return arr;
    k = k % arr.length; // Handle cases where k > arr.length
    return arr.slice(-k).concat(arr.slice(0, -k));
}
```

Method 2: Reversing parts of the array (in-place rotation)

```javascript
function rotateArray(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
```

#### longestIncreasingSubsequence

Method 1: Dynamic Programming (O(n^2) time complexity)

```javascript
function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 0;
    let dp = new Array(arr.length).fill(1);
    let maxLen = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}
```

Method 2: Binary Search (O(n log n) time complexity)

```javascript
function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 0;
    let tails = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > tails[tails.length - 1]) {
            tails.push(arr[i]);
        } else {
            let j = binarySearch(tails, arr[i]);
            tails[j] = arr[i];
        }
    }

    return tails.length;
}

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
```

### Step 3: Testing the Functions

Use the provided test cases in the "Testing the Script" section to verify your implementation.

**Additional Test Cases**

1. Test Case for rotateArray:
   - Input: `([1, 2, 3, 4, 5], 7)`
   - Expected Output: `[4, 5, 1, 2, 3]`

2. Test Case for longestIncreasingSubsequence:
   - Input: `[3, 10, 2, 1, 20]`
   - Expected Output: `3` (The longest increasing subsequence is [3, 10, 20])

## Time and Space Complexity

- rotateArray (using slicing):
  - Time Complexity: O(n)
  - Space Complexity: O(n)

- rotateArray (in-place):
  - Time Complexity: O(n)
  - Space Complexity: O(1)

- longestIncreasingSubsequence (Dynamic Programming):
  - Time Complexity: O(n^2)
  - Space Complexity: O(n)

- longestIncreasingSubsequence (Binary Search):
  - Time Complexity: O(n log n)
  - Space Complexity: O(n)

## References

- [GeeksforGeeks: Program for array rotation](https://www.geeksforgeeks.org/array-rotation/)
- [LeetCode: Rotate Array](https://leetcode.com/problems/rotate-array/)
- [GeeksforGeeks: Longest Increasing Subsequence](https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/)
- [LeetCode: Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

## Related Problems

- Find the minimum number of rotations to sort an array
- Longest Common Subsequence
- Longest Bitonic Subsequence

## Key Takeaways

- Array rotation is a fundamental operation with applications in various algorithms and data structures.
- The Longest Increasing Subsequence problem introduces dynamic programming concepts and can be optimized using binary search.
- These problems demonstrate the importance of efficient algorithm design and the trade-offs between time and space complexity.

## Notes

When implementing array rotation, consider the trade-off between simplicity (using slicing) and memory efficiency (in-place rotation). For the Longest Increasing Subsequence problem, the dynamic programming solution is more intuitive but less efficient than the binary search approach. Understanding both methods provides insight into algorithm optimization techniques.
