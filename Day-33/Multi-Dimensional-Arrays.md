# Code Challenge: Multi-dimensional Arrays

## Problem Statement

Implement two functions to work with 2D arrays (matrices) in JavaScript: one that transposes a matrix (swaps rows and columns), and another that calculates the sum of each row in a matrix. This challenge aims to improve your understanding of multi-dimensional array manipulation, which is crucial for various applications in data processing, image manipulation, and mathematical computations.

## Function Signatures

```javascript
function transposeMatrix(matrix) {
   // Your code here 
}

function rowSums(matrix) {
   // Your code here
}
```

## Input

Both functions take a single parameter:
- `matrix`: A 2D array of numbers (i.e., an array of arrays)

## Output

- `transposeMatrix`: Returns a new 2D array with rows and columns swapped
- `rowSums`: Returns an array containing the sum of each row in the input matrix

## Example

### Input:
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

### Output:
```javascript
transposeMatrix(matrix);
// should return [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

rowSums(matrix);
// should return [6, 15, 24]
```

## Constraints

- The input matrix can contain positive integers, negative integers, and floating-point numbers.
- The matrix may not be square (i.e., number of rows may not equal number of columns).
- The matrix will have at least one row and one column.

## Testing the Script

To test the functions, you can use the following code:

```javascript
let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[1, 2], [3, 4], [5, 6]];

console.log("Transpose of matrix1:", transposeMatrix(matrix1));
console.log("Row sums of matrix1:", rowSums(matrix1));

console.log("Transpose of matrix2:", transposeMatrix(matrix2));
console.log("Row sums of matrix2:", rowSums(matrix2));

// Additional test cases
let matrix3 = [[1]];
console.log("Transpose of matrix3:", transposeMatrix(matrix3));
console.log("Row sums of matrix3:", rowSums(matrix3));

let matrix4 = [[-1, -2], [-3, -4]];
console.log("Transpose of matrix4:", transposeMatrix(matrix4));
console.log("Row sums of matrix4:", rowSums(matrix4));
```

## Bonus Challenge

Implement a function `matrixMultiplication(matrix1, matrix2)` that multiplies two matrices. Remember that matrix multiplication is only possible when the number of columns in the first matrix equals the number of rows in the second matrix.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Multi-dimensional arrays, or matrices, are arrays that contain other arrays as elements. They are used to represent tabular data or grids. In this challenge, we focus on two operations:

1. Transposing a matrix: This operation flips a matrix over its diagonal, switching the row and column indices of each element.
2. Calculating row sums: This involves summing all elements in each row of the matrix.

These operations are fundamental in linear algebra and have various applications in computer science and data analysis.

### Step 2: Implementing the Functions

#### transposeMatrix

Method 1: Using nested loops

```javascript
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];
    
    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    
    return result;
}
```

Method 2: Using map function

```javascript
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
```

#### rowSums

Method 1: Using nested loops

```javascript
function rowSums(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        result.push(sum);
    }
    return result;
}
```

Method 2: Using reduce function

```javascript
function rowSums(matrix) {
    return matrix.map(row => row.reduce((sum, num) => sum + num, 0));
}
```

### Step 3: Testing the Functions

Use the provided test cases in the "Testing the Script" section to verify your implementation.

**Additional Test Cases**

1. Test Case for transposeMatrix:
   - Input: `[[1, 2], [3, 4], [5, 6]]`
   - Expected Output: `[[1, 3, 5], [2, 4, 6]]`

2. Test Case for rowSums:
   - Input: `[[-1, -2], [-3, -4]]`
   - Expected Output: `[-3, -7]`

## Time and Space Complexity

- transposeMatrix:
  - Time Complexity: O(m * n), where m is the number of rows and n is the number of columns
  - Space Complexity: O(m * n) to store the transposed matrix

- rowSums:
  - Time Complexity: O(m * n), where m is the number of rows and n is the number of columns
  - Space Complexity: O(m) to store the sum of each row

Both functions need to iterate through all elements of the matrix once, resulting in a time complexity of O(m * n). The space complexity for transposeMatrix is O(m * n) as it creates a new matrix, while rowSums only needs to store m sums.

## References

- [MDN Web Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [GeeksforGeeks: Matrix Operations](https://www.geeksforgeeks.org/matrix-operations-in-javascript/)
- [Khan Academy: Matrix Transposition](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:properties-of-matrix-addition-and-scalar-multiplication/a/transposing-matrices)

## Related Problems

- Matrix Multiplication: Multiply two matrices
- Diagonal Sum: Calculate the sum of elements on the main diagonal of a square matrix

## Key Takeaways

- Multi-dimensional arrays are powerful data structures for representing tabular data or grids.
- Transposing a matrix and calculating row sums are fundamental operations in matrix manipulation.
- These concepts have wide applications in fields like linear algebra, image processing, and data analysis.
- JavaScript's built-in array methods like `map` and `reduce` can simplify operations on multi-dimensional arrays.

## Notes

When working with matrices, always consider edge cases such as non-square matrices or matrices with only one row or column. Also, be mindful of the differences between modifying the original matrix and creating a new one — in this challenge, we create new matrices/arrays to avoid modifying the input.
