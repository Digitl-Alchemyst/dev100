# Code Challenge: Library Catalog System

## Problem Statement

Create a TypeScript-based library catalog system that manages books and their borrowers. This challenge focuses on using interfaces and type aliases to model the library's data structure and relationships.

The purpose of this challenge is to demonstrate how TypeScript's interfaces and type aliases can be used to create clear, maintainable data models. It shows the practical benefits of structured typing in a real-world scenario while introducing concepts like optional properties, readonly fields, and interface extension.

## Function Signature

```typescript
// Type Aliases and Interfaces
type ISBN = string;
type Status = 'available' | 'borrowed' | 'maintenance';

interface Book {
  readonly isbn: ISBN;
  title: string;
  author: string;
  publishedYear: number;
  status: Status;
  borrower?: Borrower;
}

interface Borrower {
  id: number;
  name: string;
  email: string;
  currentBooks: ISBN[];
}

interface LibraryCatalog {
  addBook(book: Book): void;
  removeBook(isbn: ISBN): boolean;
  getBorrowerDetails(isbn: ISBN): Borrower | undefined;
  updateBookStatus(isbn: ISBN, status: Status, borrower?: Borrower): boolean;
}

// TODO: Implement the LibraryCatalog interface
const createLibraryCatalog = (): LibraryCatalog => {
  // Implementation here
};
```

## Input

The system should handle various operations on books and borrowers using the defined interfaces:
- Adding new books to the catalog
- Removing books from the catalog
- Updating book status
- Managing borrower information

## Output

Different methods should return appropriate types as defined in the interface:
- void for operations that don't need to return values
- boolean for operations that need to indicate success/failure
- Specific types (Borrower, Book) for data retrieval operations

## Example

### Input:
```typescript
const catalog = createLibraryCatalog();

const newBook: Book = {
  isbn: "978-0-7475-3269-9",
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  publishedYear: 1997,
  status: "available"
};

catalog.addBook(newBook);
```

### Output:
```typescript
console.log(catalog.getBorrowerDetails("978-0-7475-3269-9")); // undefined
catalog.updateBookStatus(
  "978-0-7475-3269-9", 
  "borrowed", 
  { id: 1, name: "John Doe", email: "john@example.com", currentBooks: [] }
); // true
```

## Constraints

- ISBN must be a valid string format
- Book status must be one of the defined Status types
- Borrower ID must be unique
- A book can only have one borrower at a time
- The isbn property must be readonly
- All required properties must be properly typed

## Testing the Script

```typescript
const catalog = createLibraryCatalog();

// Add a book
const book: Book = {
  isbn: "978-1-2345-6789-0",
  title: "TypeScript Programming",
  author: "John Developer",
  publishedYear: 2023,
  status: "available"
};

catalog.addBook(book);

// Add a borrower
const borrower: Borrower = {
  id: 1,
  name: "Alice Smith",
  email: "alice@example.com",
  currentBooks: []
};

// Test borrowing process
console.log(catalog.updateBookStatus(book.isbn, "borrowed", borrower)); // Expected: true
console.log(catalog.getBorrowerDetails(book.isbn)); // Expected: borrower details
```

## Bonus Challenge

Extend the system to include:
- Interface for library fines and due dates
- Generic type for handling different types of library items (books, magazines, etc.)
- Intersection types for special collection items

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on TypeScript's type modeling capabilities:
1. Interfaces define contracts for objects
2. Type aliases create custom types and union types
3. Optional properties handle nullable fields
4. Readonly properties protect against mutations
5. Interface implementation ensures type compliance

### Step 2: Implementing the Functions

**Method 1: Using a Map-based Implementation**

```typescript
const createLibraryCatalog = (): LibraryCatalog => {
  const books = new Map<ISBN, Book>();

  return {
    addBook(book: Book): void {
      books.set(book.isbn, book);
    },

    removeBook(isbn: ISBN): boolean {
      return books.delete(isbn);
    },

    getBorrowerDetails(isbn: ISBN): Borrower | undefined {
      return books.get(isbn)?.borrower;
    },

    updateBookStatus(isbn: ISBN, status: Status, borrower?: Borrower): boolean {
      const book = books.get(isbn);
      if (!book) return false;

      book.status = status;
      if (borrower) {
        book.borrower = borrower;
      } else {
        delete book.borrower;
      }
      
      return true;
    }
  };
};
```

**Method 2: Using a Class-based Implementation**

```typescript
class LibraryCatalogImpl implements LibraryCatalog {
  private books: Map<ISBN, Book> = new Map();

  addBook(book: Book): void {
    this.books.set(book.isbn, {...book});
  }

  removeBook(isbn: ISBN): boolean {
    return this.books.delete(isbn);
  }

  getBorrowerDetails(isbn: ISBN): Borrower | undefined {
    return this.books.get(isbn)?.borrower;
  }

  updateBookStatus(isbn: ISBN, status: Status, borrower?: Borrower): boolean {
    const book = this.books.get(isbn);
    if (!book) return false;

    book.status = status;
    if (borrower) {
      book.borrower = borrower;
    } else {
      delete book.borrower;
    }
    
    return true;
  }
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1: Adding and retrieving a book
   - Input: `addBook(newBook)`
   - Expected Output: Book should be retrievable

2. Test Case 2: Updating book status
   - Input: `updateBookStatus(isbn, "borrowed", borrower)`
   - Expected Output: `true` and status should be updated

3. Test Case 3: Attempting to modify readonly ISBN
   - Input: `book.isbn = "new-isbn"`
   - Expected Output: TypeScript compilation error

## Time and Space Complexity

- Time Complexity: O(1) for all operations using Map
- Space Complexity: O(n) where n is the number of books

## References

- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Handbook - Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

## Related Problems

- Implementing Generic Collections
- Type-safe Event Systems
- Data Modeling with Discriminated Unions

## Key Takeaways

- Interfaces provide a powerful way to define object shapes
- Type aliases offer flexibility in type definitions
- Optional properties handle nullable/undefined cases elegantly
- Readonly properties prevent accidental mutations
- Interface implementation ensures type safety

## Notes

This challenge demonstrates how TypeScript's type system can model real-world data relationships while providing type safety. The concepts learned here are fundamental to TypeScript development and are commonly used in larger applications where data integrity is crucial.

Key learning points:
- Difference between type aliases and interfaces
- When to use optional properties
- Understanding readonly modifiers
- Interface implementation patterns
- Type-safe data modeling