# Code Challenge: Array Statistics with reduce()

## Problem Statement

In this challenge, you will use the `reduce()` method to calculate various statistics from an array of grades. Your task is to compute the sum, count, minimum, and maximum values from the given array in a single pass.

This challenge introduces the powerful `reduce()` method, which is a versatile tool for array processing in JavaScript. By using `reduce()`, you'll learn how to perform complex calculations and transformations on arrays efficiently, consolidating multiple operations into a single method call.

## Function Signature

```javascript
function calculateStatistics(grades) {
    // Your code here
}
```

## Input

An array of numbers representing grades.

## Output

An object containing the following properties:
- `sum`: The sum of all grades
- `count`: The total number of grades
- `min`: The minimum grade
- `max`: The maximum grade

## Example

### Input:

`[85, 90, 78, 92, 88, 76]`

### Output:

```javascript
{
  sum: 509,
  count: 6,
  min: 76,
  max: 92
}
```

## Constraints

- The input array will contain only positive numbers.
- The length of the input array will be between 1 and 1000.

## Testing the Script

To test your solution, you can use the following code:

```javascript
const grades = [85, 90, 78, 92, 88, 76];
const statistics = calculateStatistics(grades);
console.log(statistics);
console.log(`Average: ${statistics.sum / statistics.count}`);
```

## Bonus Challenge

Modify your function to also calculate the median grade. Remember that for an even number of grades, the median is the average of the two middle grades when sorted.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge requires you to use the `reduce()` method to perform multiple calculations on an array of grades in a single pass. The `reduce()` method is a powerful array method that allows you to reduce an array to a single value, but in this case, we'll be reducing it to an object containing multiple values.

Key concepts to understand:

1. The `reduce()` method takes a callback function as its first argument and an initial value as its second argument.
2. The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.
3. We can use an object as the accumulator to store multiple values.

### Step 2: Implementing the Function

Here's a step-by-step approach to solve this problem:

```javascript
function calculateStatistics(grades) {
    return grades.reduce((stats, grade) => {
        // Update sum
        stats.sum += grade;
        
        // Update count
        stats.count++;
        
        // Update min
        if (grade < stats.min) {
            stats.min = grade;
        }
        
        // Update max
        if (grade > stats.max) {
            stats.max = grade;
        }
        
        return stats;
    }, { sum: 0, count: 0, min: Infinity, max: -Infinity });
}
```

Let's break down the solution:

1. We start with an initial value for our accumulator: an object with `sum`, `count`, `min`, and `max` properties.
2. For each grade in the array, we:
   - Add it to the sum
   - Increment the count
   - Compare it with the current min and max, updating if necessary
3. We return the accumulator object after processing all grades.

### Step 3: Testing the Function

You can test the function with the provided example:

```javascript
const grades = [85, 90, 78, 92, 88, 76];
const statistics = calculateStatistics(grades);
console.log(statistics);
console.log(`Average: ${statistics.sum / statistics.count}`);
```

**Test Cases**

1. Test Case 1:
   - Input: `[100, 90, 80, 70, 60]`
   - Expected Output: `{ sum: 400, count: 5, min: 60, max: 100 }`

2. Test Case 2:
   - Input: `[75]`
   - Expected Output: `{ sum: 75, count: 1, min: 75, max: 75 }`

3. Test Case 3:
   - Input: `[92, 92, 92]`
   - Expected Output: `{ sum: 276, count: 3, min: 92, max: 92 }`

## Time and Space Complexity

- Time Complexity: O(n), where n is the number of grades. We iterate through the array once.
- Space Complexity: O(1), as we're using a single object to store our statistics regardless of the input size.

## References

- [MDN Web Docs: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Related Problems

- Use `reduce()` to group an array of objects by a specific property.
- Implement a function that uses `reduce()` to flatten a nested array.

## Key Takeaways

- `reduce()` is a powerful method for performing complex calculations on arrays.
- You can use an object as an accumulator in `reduce()` to track multiple values.
- `reduce()` can often replace multiple separate array iterations, leading to more efficient code.
- Understanding `reduce()` opens up new possibilities for data processing and transformation in JavaScript.

## Notes

While `reduce()` is very powerful, it's important to balance its use with code readability. For very simple operations, using separate methods or a for loop might be more immediately understandable to other developers reading your code. However, as you become more comfortable with `reduce()`, you'll find it an invaluable tool in your JavaScript toolkit.
