# Code Challenge: Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to the `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Function Signature

```javascript
function twoSum(nums, target) {
   // Your code here 
}
```

## Input

- `nums`: An array of integers
- `target`: An integer

## Output

An array of two integers representing the indices of the two numbers in `nums` that add up to `target`.

## Example

### Input:

```javascript
nums = [2, 7, 11, 15]
target = 9
```

### Output:

```javascript
[0, 1]
```

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

## Constraints

- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists

## Bonus Challenge

Solve the problem in one pass through the array (i.e., with a time complexity of O(n)).

## Detailed Explanation

### **Spoilers Ahead**

To solve this problem efficiently, we can use a hash table (object in JavaScript) to store the complement of each number as we iterate through the array:

1. Create an empty object to store complements.
2. Iterate through the array:
   a. Calculate the complement (target - current number).
   b. If the complement exists in our object, we've found our pair.
   c. If not, add the current number and its index to the object.
3. If we complete the iteration without finding a pair, return an empty array or throw an error.

## Code Solution

```javascript
function twoSum(nums, target) {
    const complementMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in complementMap) {
            return [complementMap[complement], i];
        }
        
        complementMap[nums[i]] = i;
    }
    
    return []; // No solution found
}
```

## Time and Space Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)

We iterate through the array once, and in the worst case, we might need to store n-1 elements in our hash table before finding the solution.

## Test Cases

1. Test Case 1:
   - Input: `nums = [2, 7, 11, 15], target = 9`
   - Expected Output: `[0, 1]`

2. Test Case 2:
   - Input: `nums = [3, 2, 4], target = 6`
   - Expected Output: `[1, 2]`

3. Test Case 3:
   - Input: `nums = [3, 3], target = 6`
   - Expected Output: `[0, 1]`

4. Test Case 4:
   - Input: `nums = [1, 2, 3, 4, 5], target = 10`
   - Expected Output: `[]`

## Notes

- This solution uses extra space to achieve O(n) time complexity. There's a trade-off between time and space here.
- If the array is sorted, we could use a two-pointer approach to solve this in O(n) time with O(1) space, but sorting would take O(n log n) time.

## Related Problems

- Three Sum: Find three numbers in an array that sum to a target value.
- Four Sum: Find four numbers in an array that sum to a target value.
- Two Sum II - Input Array Is Sorted: Solve the two sum problem when the input array is sorted.

## Key Takeaways

- Hash tables can be used to achieve O(1) lookup time, which is crucial for many algorithmic problems.
- There's often a trade-off between time and space complexity in algorithm design.
- This problem demonstrates the complement approach, which is useful in many sum-related problems.

## References

- [LeetCode - Two Sum](https://leetcode.com/problems/two-sum/)
- [Hash Table Data Structure](https://en.wikipedia.org/wiki/Hash_table)
- [Time Complexity Analysis](https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/)





You're on the right track with your implementation! Your current solution correctly solves the Two Sum problem using a brute force approach. It checks all possible pairs of numbers in the array to find the two that add up to the target.

However, there's an opportunity to optimize this solution. The challenge is hinting at a more efficient approach using a hash map (object in JavaScript). Here's how you could improve it:

Use a single loop instead of nested loops.
Use an object to store the complement of each number (target - current number).
Check if the complement exists in the object as you go through the array.
This approach would reduce the time complexity from O(n^2) to O(n), making it more efficient for larger inputs.

Certainly! Let's break down the math behind the Two Sum problem:

The goal is to find two numbers in the array that add up to the target.

For any given number 'x' in the array, we're looking for another number 'y' such that: x + y = target

We can rearrange this equation to: y = target - x

This 'y' is what we call the complement of 'x' with respect to the target.

As we iterate through the array, for each number 'x', we calculate its complement (target - x) and check if that complement exists in the array.

If we find the complement, we've found our pair of numbers that sum to the target.

This approach allows us to solve the problem efficiently by only needing to go through the array once, using a hash map (object in JavaScript) to keep track of the numbers we've seen and their indices.

The math here is essentially simple addition and subtraction, but the key insight is recognizing that we can use the complement to find the solution in a single pass through the array.

```javascript
function twoSum(nums, target) {
  const complementMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complement in complementMap) {
      return [complementMap[complement], i];
    }

    complementMap[nums[i]] = i;
  }

  return []; // If no solution is found
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
```

Certainly! I'll explain the optimized twoSum function line by line:

function twoSum(nums, target) {
  const complementMap = {};

Copy

Apply

We define the function and initialize an empty object to store complements.

  for (let i = 0; i < nums.length; i++) {

Copy

Apply

We start a loop that iterates through each element of the input array.

    const complement = target - nums[i];

Copy

Apply

For each number, we calculate its complement (the number needed to reach the target).

    if (complement in complementMap) {
      return [complementMap[complement], i];
    }

Copy

Apply

We check if the complement exists in our map. If it does, we've found our pair and return their indices.

    complementMap[nums[i]] = i;

Copy

Apply

If the complement isn't in the map, we add the current number and its index to the map.

  }
  return []; // If no solution is found

Copy

Apply

If we've gone through the entire array without finding a pair, we return an empty array.

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]

Copy

Apply

These lines test the function with example inputs.

This implementation efficiently solves the Two Sum problem in a single pass through the array.