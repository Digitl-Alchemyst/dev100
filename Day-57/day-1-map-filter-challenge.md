# Code Challenge: Array Transformation with map() and filter()

## Problem Statement

In this challenge, you will work with two fundamental array methods in JavaScript: `map()` and `filter()`. Your task is to transform an array of numbers by first squaring each number and then filtering out the odd results.

This challenge serves as an introduction to array transformation and filtering, which are essential operations in data manipulation. By completing this challenge, you'll gain hands-on experience with these powerful array methods and understand how they can be chained together to achieve more complex transformations.

## Function Signature

```javascript
function squareAndFilterEvens(numbers) {
    // Your code here
}
```

## Input

An array of numbers.

## Output

An array of even squared numbers.

## Example

### Input:

`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

### Output:

`[4, 16, 36, 64, 100]`

## Constraints

- The input array will contain only positive integers.
- The length of the input array will be between 1 and 1000.

## Testing the Script

To test your solution, you can use the following code:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(squareAndFilterEvens(numbers));
// Expected output: [4, 16, 36, 64, 100]
```

## Bonus Challenge

Modify your function to accept an additional parameter that determines whether to filter for even or odd squared numbers.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge requires you to perform two operations on an array of numbers:

1. Square each number in the array.
2. Filter out the odd results, keeping only the even squared numbers.

To solve this, we'll use two important array methods:

- `map()`: This method creates a new array with the results of calling a provided function on every element in the array.
- `filter()`: This method creates a new array with all elements that pass the test implemented by the provided function.

### Step 2: Implementing the Functions

There are multiple ways to approach this problem. We'll explore two methods:

#### Method 1: Separate map() and filter()

1. Use `map()` to square all numbers in the array.
2. Use `filter()` on the resulting array to keep only the even numbers.

```javascript
function squareAndFilterEvens(numbers) {
    const squared = numbers.map(num => num * num);
    return squared.filter(num => num % 2 === 0);
}
```

#### Method 2: Chaining map() and filter()

We can chain these methods for a more concise solution:

```javascript
function squareAndFilterEvens(numbers) {
    return numbers
        .map(num => num * num)
        .filter(num => num % 2 === 0);
}
```

### Step 3: Testing the Functions

You can test the function with the provided example:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(squareAndFilterEvens(numbers));
// Expected output: [4, 16, 36, 64, 100]
```

**Test Cases**

1. Test Case 1:
   - Input: `[1, 2, 3, 4, 5]`
   - Expected Output: `[4, 16]`

2. Test Case 2:
   - Input: `[2, 4, 6, 8, 10]`
   - Expected Output: `[4, 16, 36, 64, 100]`

3. Test Case 3:
   - Input: `[1, 3, 5, 7, 9]`
   - Expected Output: `[]`

## Time and Space Complexity

- Time Complexity: O(n), where n is the length of the input array. We iterate through the array twice (once for map and once for filter), but this is still linear time.
- Space Complexity: O(n) in the worst case, where all squared numbers are even.

## References

- [MDN Web Docs: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN Web Docs: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Related Problems

- Implement a function that uses `reduce()` to sum all even squared numbers in an array.
- Create a function that uses `map()` and `filter()` to find all prime numbers in a given range.

## Key Takeaways

- `map()` is used for transforming each element in an array without changing the original array.
- `filter()` is used for creating a new array with all elements that pass a certain test.
- These methods can be chained together for more complex operations.
- Using these built-in methods often leads to more readable and maintainable code compared to traditional loops.

## Notes

While this solution works well for small to medium-sized arrays, for very large arrays or in performance-critical applications, you might consider combining the squaring and filtering operations into a single loop for efficiency. However, the readability and maintainability benefits of using `map()` and `filter()` often outweigh minor performance gains in most scenarios.
