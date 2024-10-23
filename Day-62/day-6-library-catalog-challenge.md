# Code Challenge: Library Catalog Management with reverse() and sort()

## Problem Statement

You're developing a digital catalog system for a library. The system needs to manage a list of books and provide various sorting and display options. Your task is to implement functions that will help librarians and users navigate the catalog efficiently.

This challenge will demonstrate practical uses of the `reverse()` and `sort()` methods in a real-world scenario of managing and displaying book information.

## Function Signatures

```javascript
function reverseShelfOrder(books) {
    // TODO: Reverse the order of books (as if taking them off one shelf and putting them on another in reverse order)
}

function sortBooksByTitle(books) {
    // TODO: Sort the books by title in a case-insensitive manner
}

function sortBooksByAuthorThenTitle(books) {
    // TODO: Sort the books first by author (last name), then by title, both case-insensitive
}

function sortBooksByPublicationYearDescending(books) {
    // TODO: Sort the books by publication year in descending order (newest first)
}
```

## Input

An array of book objects. Each book object has the following structure:

```javascript
{
    title: string,
    author: string,  // in "Lastname, Firstname" format
    publicationYear: number
}
```

## Output

Each function should return the sorted or reversed array of book objects.

## Example

```javascript
const libraryBooks = [
    { title: "The Great Gatsby", author: "Fitzgerald, F. Scott", publicationYear: 1925 },
    { title: "To Kill a Mockingbird", author: "Lee, Harper", publicationYear: 1960 },
    { title: "1984", author: "Orwell, George", publicationYear: 1949 },
    { title: "Pride and Prejudice", author: "Austen, Jane", publicationYear: 1813 },
    { title: "The Catcher in the Rye", author: "Salinger, J.D.", publicationYear: 1951 }
];

console.log(reverseShelfOrder(libraryBooks));
// Should print the array in reverse order

console.log(sortBooksByTitle(libraryBooks));
// Should print: 
// [
//   { title: "1984", ... },
//   { title: "The Catcher in the Rye", ... },
//   { title: "The Great Gatsby", ... },
//   { title: "Pride and Prejudice", ... },
//   { title: "To Kill a Mockingbird", ... }
// ]

console.log(sortBooksByAuthorThenTitle(libraryBooks));
// Should print books sorted by author's last name, then by title

console.log(sortBooksByPublicationYearDescending(libraryBooks));
// Should print books sorted from newest to oldest
```

## Constraints

- Use the `reverse()` method for the `reverseShelfOrder` function.
- Implement custom comparison functions for the sorting methods.
- Handle edge cases such as missing data (e.g., a book without a publication year).

## Testing the Script

To test your implementation, you can use the following code:

```javascript
const libraryBooks = [
    { title: "The Great Gatsby", author: "Fitzgerald, F. Scott", publicationYear: 1925 },
    { title: "To Kill a Mockingbird", author: "Lee, Harper", publicationYear: 1960 },
    { title: "1984", author: "Orwell, George", publicationYear: 1949 },
    { title: "Pride and Prejudice", author: "Austen, Jane", publicationYear: 1813 },
    { title: "The Catcher in the Rye", author: "Salinger, J.D.", publicationYear: 1951 }
];

console.log("Reversed shelf order:");
console.log(reverseShelfOrder([...libraryBooks]));

console.log("\nSorted by title:");
console.log(sortBooksByTitle([...libraryBooks]));

console.log("\nSorted by author then title:");
console.log(sortBooksByAuthorThenTitle([...libraryBooks]));

console.log("\nSorted by publication year (descending):");
console.log(sortBooksByPublicationYearDescending([...libraryBooks]));
```

## Bonus Challenge

Implement an additional function:
- `sortBooksByPopularity(books, borrowCount)`: Sort books by their borrow count (most borrowed first). The `borrowCount` parameter is an object where keys are book titles and values are the number of times each book has been borrowed.

## Detailed Expla