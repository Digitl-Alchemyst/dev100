function findBookByISBN(books, isbn) {
  // Your code here
  return books.find((book) => book.isbn === isbn);
}

function sortBooksByYear(books) {
  // Your code here
  return books.sort((a, b) => a.year - b.year);
}

const library = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    isbn: "9780141439518",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isbn: "9780743273565",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    isbn: "9780446310789",
  },
  { title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935" },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isbn: "9780316769488",
  },
];

const isbnToFind = "9780451524935";

// console.log(sortBooksByYear(library));
console.log(findBookByISBN(library, isbnToFind));
