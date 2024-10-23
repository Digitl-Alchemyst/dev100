# Code Challenge: Library Inventory Management with reverse() and Advanced sort()

## Problem Statement

You're a software developer working for a local library. The library wants to implement a new inventory management system. Your task is to create a `LibraryInventory` class that can perform the following operations:

1. Reverse the order of books (useful for displaying books from newest to oldest or vice versa).
2. Sort books by different criteria (title, author, publication year) in both ascending and descending order.
3. Find books by a specific author, sorted by publication year.

This challenge will help you understand how to use `reverse()` and implement custom `sort()` functions in a practical, real-world scenario.

## Class Signature

```javascript
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class LibraryInventory {
  constructor() {
    this.books = [];
  }

  addBook(title, author, year) {
    this.books.push(new Book(title, author, year));
  }

  reverseInventory() {
    // TODO: Implement this method
  }

  sortBooks(criteria, ascending = true) {
    // TODO: Implement this method
  }

  findBooksByAuthor(author) {
    // TODO: Implement this method
  }

  displayInventory() {
    this.books.forEach(book => console.log(`${book.title} by ${book.author} (${book.year})`));
  }
}
```

## Input/Output

- `reverseInventory()`: Reverses the order of books in the inventory. Returns nothing.
- `sortBooks(criteria, ascending)`: Sorts the books based on the given criteria ('title', 'author', or 'year') and order (ascending or descending). Returns nothing.
- `findBooksByAuthor(author)`: Returns an array of books by the specified author, sorted by publication year (newest first).

## Example

```javascript
const library = new LibraryInventory();

library.addBook("1984", "George Orwell", 1949);
library.addBook("To Kill a Mockingbird", "Harper Lee", 1960);
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
library.addBook("Pride and Prejudice", "Jane Austen", 1813);

console.log("Original inventory:");
library.displayInventory();

library.reverseInventory();
console.log("\nReversed inventory:");
library.displayInventory();

library.sortBooks('year', false);
console.log("\nSorted by year (descending):");
library.displayInventory();

console.log("\nBooks by Jane Austen:");
console.log(library.findBooksByAuthor("Jane Austen"));
```

## Constraints

- You must use the `reverse()` method for reversing the inventory.
- Implement custom comparison functions for sorting.
- The `findBooksByAuthor()` method should be case-insensitive.

## Testing the Script

To test your implementation, you can use the example code provided above.

## Bonus Challenge

Implement an additional method:
- `findBooksBetweenYears(startYear, endYear)`: Returns an array of books published between `startYear` and `endYear` (inclusive), sorted by year.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge involves creating a `LibraryInventory` class with methods that manipulate an array of `Book` objects using `reverse()` and custom `sort()` functions.

### Step 2: Implementing the Class

Here's a step-by-step implementation of the `LibraryInventory` class:

```javascript
class LibraryInventory {
  constructor() {
    this.books = [];
  }

  addBook(title, author, year) {
    this.books.push(new Book(title, author, year));
  }

  reverseInventory() {
    this.books.reverse();
  }

  sortBooks(criteria, ascending = true) {
    this.books.sort((a, b) => {
      let comparison = 0;
      switch (criteria) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'author':
          comparison = a.author.localeCompare(b.author);
          break;
        case 'year':
          comparison = a.year - b.year;
          break;
        default:
          throw new Error('Invalid sorting criteria');
      }
      return ascending ? comparison : -comparison;
    });
  }

  findBooksByAuthor(author) {
    return this.books
      .filter(book => book.author.toLowerCase() === author.toLowerCase())
      .sort((a, b) => b.year - a.year);
  }

  displayInventory() {
    this.books.forEach(book => console.log(`${book.title} by ${book.author} (${book.year})`));
  }
}
```

### Step 3: Testing the Class

You can test the class with the provided example code. Here's what each method does:

- `reverseInventory()`: Uses `reverse()` to reverse the order of books in the array.
- `sortBooks()`: Uses a custom comparison function with `sort()` to order books based on the given criteria.
- `findBooksByAuthor()`: Uses `filter()` to find books by a specific author, then `sort()` to order them by year.

## Time and Space Complexity

- `reverseInventory()`: 
  - Time Complexity: O(n), where n is the number of books
  - Space Complexity: O(1)
- `sortBooks()`: 
  - Time Complexity: O(n log n)
  - Space Complexity: O(1) (in-place sort)
- `findBooksByAuthor()`: 
  - Time Complexity: O(n log n)
  - Space Complexity: O(k), where k is the number of books by the specified author

## Key Takeaways

- The `reverse()` method is a simple way to invert the order of array elements.
- Custom sort functions allow for complex sorting logic based on multiple criteria.
- Combining methods like `filter()` and `sort()` can create powerful data manipulation tools.
- Case-insensitive comparisons are important for user-friendly search functionality.

## Notes

This implementation works well for small to medium-sized libraries. For very large inventories, consider using more advanced data structures or database solutions for improved performance, especially for frequent sorting and searching operations.
