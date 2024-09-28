# Code Challenge: Library Book Tracker using Encapsulation and Closures

## Problem Statement

Create a library book tracking system using closures to encapsulate private data (book inventory) and provide public methods for adding books, checking out books, returning books, and getting the current inventory status. This challenge aims to reinforce understanding of closures and encapsulation in JavaScript, using a practical, non-financial example.

## Function Signature

```javascript
function createLibrary() {
   // Your code here 
}
```

## Input

The `createLibrary` function doesn't take any input parameters. However, the methods it returns will accept inputs as follows:

- `addBook(title, author, copies)`: 
  - `title` (string): The title of the book
  - `author` (string): The author of the book
  - `copies` (number): The number of copies to add

- `checkoutBook(title)`:
  - `title` (string): The title of the book to check out

- `returnBook(title)`:
  - `title` (string): The title of the book to return

## Output

The function should return an object with the following methods:
- `addBook(title, author, copies)`: Adds the specified book to the inventory
- `checkoutBook(title)`: Removes one copy of the specified book from the inventory
- `returnBook(title)`: Adds one copy of the specified book back to the inventory
- `getInventory()`: Returns the current inventory status

## Example

```javascript
const library = createLibrary();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 5);
library.addBook("To Kill a Mockingbird", "Harper Lee", 3);
console.log(library.getInventory());
library.checkoutBook("The Great Gatsby");
console.log(library.getInventory());
library.returnBook("The Great Gatsby");
console.log(library.getInventory());
```

## Constraints

- Book titles are case-sensitive and unique
- The number of copies must be a positive integer
- You cannot check out a book if there are no copies available

## Testing the Script

To test your implementation, create a library and perform various operations. Here's an example:

```javascript
const library = createLibrary();

// Add books
library.addBook("1984", "George Orwell", 3);
library.addBook("Pride and Prejudice", "Jane Austen", 2);

// Check inventory
console.log(library.getInventory());

// Checkout and return books
library.checkoutBook("1984");
console.log(library.getInventory());
library.returnBook("1984");
console.log(library.getInventory());

// Test edge cases
library.checkoutBook("Pride and Prejudice");
library.checkoutBook("Pride and Prejudice");
library.checkoutBook("Pride and Prejudice"); // Should show an error
library.returnBook("Moby Dick"); // Should show an error

// Add more copies
library.addBook("Pride and Prejudice", "Jane Austen", 1);
console.log(library.getInventory());
```

## Bonus Challenge

Implement additional features such as:
1. A `searchBooks(query)` method that returns books matching a title or author query
2. A `getPopularBooks()` method that returns books that have been checked out the most
3. An `removeBook(title)` method that completely removes a book from the inventory

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Closures and Encapsulation

Closures in JavaScript allow a function to access variables from an outer function even after the outer function has finished executing. This creates a private scope for those variables.

Encapsulation is the bundling of data and the methods that operate on that data within a single unit. It restricts direct access to some of an object's components, which prevents accidental interference and misuse of the methods and data.

In our library example:
- The book inventory is the private data we want to encapsulate.
- The methods to add, checkout, return books, and get inventory form the public interface.

### Step 2: Implementing the createLibrary Function

Here's a step-by-step guide to implementing the `createLibrary` function:

1. Define the outer function and initialize the private inventory:

```javascript
function createLibrary() {
    const inventory = {};

    // The rest of the implementation will go here...
}
```

2. Define the public methods within the outer function:

```javascript
function createLibrary() {
    const inventory = {};

    function addBook(title, author, copies) {
        if (typeof copies !== 'number' || copies <= 0 || !Number.isInteger(copies)) {
            throw new Error('Copies must be a positive integer');
        }
        if (inventory[title]) {
            inventory[title].copies += copies;
        } else {
            inventory[title] = { author, copies };
        }
    }

    function checkoutBook(title) {
        if (!inventory[title] || inventory[title].copies === 0) {
            throw new Error('Book not available');
        }
        inventory[title].copies--;
    }

    function returnBook(title) {
        if (!inventory[title]) {
            throw new Error('Book not in library catalog');
        }
        inventory[title].copies++;
    }

    function getInventory() {
        return Object.entries(inventory).map(([title, info]) => ({
            title,
            author: info.author,
            copies: info.copies
        }));
    }

    // The return statement will go here...
}
```

3. Return an object containing the public methods:

```javascript
function createLibrary() {
    // ... (previous code)

    return {
        addBook,
        checkoutBook,
        returnBook,
        getInventory
    };
}
```

### Step 3: Understanding How Closures Provide Encapsulation

In this implementation:

- The `inventory` object is not directly accessible from outside the `createLibrary` function. It's a private variable.
- The `addBook`, `checkoutBook`, `returnBook`, and `getInventory` functions form a closure over the `inventory` object. They can access and modify it, but external code cannot.
- Each time `createLibrary` is called, it creates a new closure with its own `inventory` object, allowing for multiple independent library instances.

### Step 4: Testing the Implementation

Use the testing script provided earlier to verify that your implementation works correctly. Make sure to test edge cases and error conditions.

## Time and Space Complexity

- Time Complexity: 
  - O(1) for addBook, checkoutBook, and returnBook operations
  - O(n) for getInventory, where n is the number of unique books
- Space Complexity: O(n), where n is the number of unique books

The time complexity for most operations is constant because they involve simple object property access or modification. The getInventory method has linear time complexity as it needs to iterate over all books. The space complexity is linear with the number of unique books stored.

## References

- [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info: Closure](https://javascript.info/closure)
- [MDN Web Docs: Encapsulation](https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation)

## Related Problems

- Implement a playlist manager with methods to add songs, remove songs, and shuffle the playlist
- Create a simple task manager with the ability to add tasks, mark tasks as complete, and list tasks

## Key Takeaways

- Closures provide a way to create private variables and methods in JavaScript
- Encapsulation helps in creating secure and modular code by restricting direct access to internal details
- Proper error handling and input validation are crucial for creating robust applications
- Using objects to store structured data can simplify management of complex information

## Notes

While this implementation provides basic encapsulation, it's important to note that in a real-world library system, you would likely need additional features like user management, due dates for checked-out books, and possibly a database for persistent storage.
