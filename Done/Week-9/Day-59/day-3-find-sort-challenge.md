# Code Challenge: Book Library Management with find() and sort()

## Problem Statement

In this challenge, you will work with an array of book objects representing a small library. Your task is to implement two functions:

1. Use the `find()` method to locate a book by its ISBN.
2. Use the `sort()` method to arrange the books based on their publication year.

This challenge introduces the `find()` method for searching arrays and the `sort()` method for ordering array elements. By completing this challenge, you'll gain practical experience in working with array methods and manipulating objects, which are common tasks in real-world programming scenarios.

## Function Signatures

```javascript
function findBookByISBN(books, isbn) {
    // Your code here
}

function sortBooksByYear(books) {
    // Your code here
}
```

## Input

For `findBookByISBN`:
- `books`: An array of book objects
- `isbn`: A string representing the ISBN of the book to find

For `sortBooksByYear`:
- `books`: An array of book objects

Each book object has the following structure:
```javascript
{
    title: string,
    author: string,
    year: number,
    isbn: string
}
```

## Output

`findBookByISBN`: Returns the book object if found, or `undefined` if not found.
`sortBooksByYear`: Returns a new array of book objects sorted by publication year (oldest to newest).

## Example

### Input:

```javascript
const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isbn: "9780743273565" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "9780446310789" },
    { title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935" },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isbn: "9780141439518" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, isbn: "9780316769488" },
];

const isbnToFind = "9780446310789";
```

### Output:

For `findBookByISBN(library, isbnToFind)`:
```javascript
{ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "9780446310789" }
```

For `sortBooksByYear(library)`:
```javascript
[
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isbn: "9780743273565" },
    { title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "9780446310789" }
]
```

## Constraints

- The ISBN will always be a string of 13 digits.
- The publication year will always be a positive integer.
- The library array will contain between 1 and 1000 books.

## Testing the Script

To test your solution, you can use the following code:

```javascript
const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isbn: "9780743273565" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "9780446310789" },
    { title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935" }
];

console.log(findBookByISBN(library, "9780446310789"));
console.log(sortBooksByYear(library));
```

## Bonus Challenge

Modify the `sortBooksByYear` function to accept a second parameter that determines the sort order (ascending or descending).

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge involves two main tasks:

1. Searching for a specific book in an array of book objects using the `find()` method.
2. Sorting an array of book objects based on their publication year using the `sort()` method.

Key concepts to understand:

- The `find()` method returns the first element in an array that satisfies a provided testing function.
- The `sort()` method sorts the elements of an array in place and returns the sorted array.

### Step 2: Implementing the Functions

#### Implementation of findBookByISBN

```javascript
function findBookByISBN(books, isbn) {
    return books.find(book => book.isbn === isbn);
}
```

This function uses the `find()` method to locate the book with the matching ISBN. The `find()` method iterates through the array and returns the first element for which the callback function returns true.

#### Implementation of sortBooksByYear

```javascript
function sortBooksByYear(books) {
    return [...books].sort((a, b) => a.year - b.year);
}
```

This function uses the `sort()` method to arrange the books based on their publication year. The `sort()` method takes a comparison function as an argument. By subtracting `a.year` from `b.year`, we ensure that the books are sorted in ascending order by year.

Note: We use the spread operator (`[...books]`) to create a new array before sorting. This ensures that we don't modify the original array.

### Step 3: Testing the Functions

You can test the functions with the provided example:

```javascript
const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isbn: "9780743273565" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "9780446310789" },
    { title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935" }
];

console.log(findBookByISBN(library, "9780446310789"));
console.log(sortBooksByYear(library));
```

**Test Cases**

1. Test Case for findBookByISBN:
   - Input: `findBookByISBN(library, "9780451524935")`
   - Expected Output: `{ title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935" }`

2. Test Case for findBookByISBN (book not found):
   - Input: `findBookByISBN(library, "1234567890123")`
   - Expected Output: `undefined`

3. Test Case for sortBooksByYear:
   - Input: `sortBooksByYear(library)`
   - Expected Output: Array of books sorted by year (as shown in the example output)

## Time and Space Complexity

- For findBookByISBN:
  - Time Complexity: O(n) in the worst case, where n is the number of books.
  - Space Complexity: O(1), as we're not creating any new data structures.

- For sortBooksByYear:
  - Time Complexity: O(n log n), due to the sorting algorithm.
  - Space Complexity: O(n), as we're creating a new sorted array.

## References

- [MDN Web Docs: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Related Problems

- Implement a function that uses `filter()` to find all books by a specific author.
- Create a function that uses `sort()` to arrange books alphabetically by title.

## Key Takeaways

- The `find()` method is useful for locating a specific element in an array based on a condition.
- The `sort()` method can be customized with a comparison function to sort arrays of objects based on specific properties.
- When working with objects, it's important to consider which properties to use for searching and sorting.
- Creating a new array before sorting (using the spread operator or `slice()`) helps maintain the original array's order.

## Notes

While these methods are powerful, they have limitations. For very large datasets, more efficient searching and sorting algorithms might be necessary. Additionally, the `sort()` method modifies the original array, which is why we created a copy in our implementation. Always consider the implications of mutating data structures in your code.
