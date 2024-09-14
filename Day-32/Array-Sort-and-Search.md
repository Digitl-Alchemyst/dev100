# Code Challenge: Array Sorting and Searching

## Problem Statement

Implement two fundamental array operations in JavaScript: sorting and binary search. Create a function that sorts an array of numbers in ascending order, and another function that performs a binary search on a sorted array. These operations are crucial in computer science and demonstrate important concepts in algorithm design and efficiency.

## Function Signatures

```javascript
function sortArray(arr) {
   // Your code here 
}

function binarySearch(arr, target) {
   // Your code here
}
```

## Input

- For `sortArray`: 
  - `arr`: An array of numbers

- For `binarySearch`:
  - `arr`: A sorted array of numbers returned by `sortArray`
  - `target`: The number to search for

## Output

- `sortArray`: Returns a new array with elements sorted in ascending order
- `binarySearch`: Returns the index of the target element if found, or -1 if not found

## Example

### Input:
```javascript
let unsortedArray = [5, 2, 8, 1, 9];
let sortedArray = [1, 2, 5, 8, 9];
let target = 5;
```

### Output:
```javascript
sortArray(unsortedArray); // should return [1, 2, 5, 8, 9]
binarySearch(sortedArray, target); // should return 2
```

## Constraints

- The input arrays can contain positive integers, negative integers, and floating-point numbers.
- The arrays may be empty.
- For `binarySearch`, the input array must be sorted in ascending order.

## Testing the Script

To test the functions, you can use the following code:

```javascript
let unsortedArray = [5, 2, 8, 1, 9];
let sortedArray = sortArray(unsortedArray);
console.log("Sorted array:", sortedArray);
console.log("Binary search for 5:", binarySearch(sortedArray, 5));
console.log("Binary search for 3:", binarySearch(sortedArray, 3));

// Additional test cases
console.log(sortArray([])); // Expected: []
console.log(sortArray([1])); // Expected: [1]
console.log(sortArray([3, 3, 1, 2, 2])); // Expected: [1, 2, 2, 3, 3]
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Expected: 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // Expected: 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Expected: -1
```

## Bonus Challenge

Implement the `sortArray` function without using the built-in `sort()` method. Instead, implement a sorting algorithm of your choice (e.g., bubble sort, insertion sort, or quicksort).

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on two fundamental array operations:

1. Sorting: Arranging elements in a specific order (in this case, ascending order).
2. Binary Search: An efficient algorithm for finding an element in a sorted array.

Both operations are crucial in computer science and are often used in various applications, from databases to search engines.

### Step 2: Implementing the Functions

#### sortArray

Method 1: Using the built-in sort method

```javascript
function sortArray(arr) {
    return [...arr].sort((a, b) => a - b);
}
```

Method 2: Implementing Bubble Sort

```javascript
function sortArray(arr) {
    let sorted = [...arr];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
}
```

#### binarySearch

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

### Step 3: Testing the Functions

Use the provided test cases in the "Testing the Script" section to verify your implementation.

**Additional Test Cases**

1. Test Case for sortArray:
   - Input: `[3, 3, 1, 2, 2]`
   - Expected Output: `[1, 2, 2, 3, 3]`

2. Test Case for binarySearch:
   - Input: `([1, 2, 3, 4, 5], 6)`
   - Expected Output: `-1`

## Time and Space Complexity

- sortArray (using built-in sort):
  - Time Complexity: O(n log n)
  - Space Complexity: O(n)

- sortArray (using Bubble Sort):
  - Time Complexity: O(n^2)
  - Space Complexity: O(1)

- binarySearch:
  - Time Complexity: O(log n)
  - Space Complexity: O(1)

The built-in sort method typically uses an efficient sorting algorithm like QuickSort. Bubble Sort, while simpler to implement, is less efficient for large arrays. Binary search is very efficient, as it eliminates half of the remaining elements with each comparison.

## References

- [MDN Web Docs: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [GeeksforGeeks: Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
- [Khan Academy: Binary Search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)

## Related Problems

- Merge Sort: Another efficient sorting algorithm
- Search in Rotated Sorted Array: A variation of binary search

## Key Takeaways

- Sorting is a fundamental operation in computer science with various algorithms and trade-offs.
- Binary search is an efficient algorithm for searching in sorted arrays, demonstrating the power of divide-and-conquer strategies.
- Understanding these algorithms helps in choosing the right tool for different programming scenarios.

## Notes

While the built-in `sort()` method is convenient and efficient for most cases, implementing sorting algorithms from scratch helps in understanding their mechanics and trade-offs. Similarly, binary search showcases how taking advantage of the properties of sorted data can lead to highly efficient algorithms.
