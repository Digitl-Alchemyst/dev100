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
        if(borrower) {
            book.borrower = borrower;
        } else {
            delete book.borrower;
        }
        return true;
    }
}

// Create an instance of the class
const catalog = new LibraryCatalogImpl();

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