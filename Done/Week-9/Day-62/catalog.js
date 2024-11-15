function reverseShelfOrder(books) {
  // TODO: Reverse the order of books (as if taking them off one shelf and putting them on another in reverse order)
  return books.reverse();
}

function sortBooksByTitle(books) {
  // TODO: Sort the books by title in a case-insensitive manner
  return books.sort((a, b) => a.title.localeCompare(b.title));
}

function sortBooksByAuthorThenTitle(books) {
  // TODO: Sort the books first by author (last name), then by title, both case-insensitive
  return books.sort((a, b) => {
    if (a.author === b.author) {
      return a.title.localeCompare(b.title);
    }
    return a.author.localeCompare(b.author);
  });
}

function sortBooksByPublicationYearDescending(books) {
  // TODO: Sort the books by publication year in descending order (newest first)
  return books.sort((a, b) => b.publicationYear - a.publicationYear);
}


const libraryBooks = [
  {
    title: "The Great Gatsby",
    author: "Fitzgerald, F. Scott",
    publicationYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Lee, Harper",
    publicationYear: 1960,
  },
  { title: "1984", author: "Orwell, George", publicationYear: 1949 },
  {
    title: "Pride and Prejudice",
    author: "Austen, Jane",
    publicationYear: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "Salinger, J.D.",
    publicationYear: 1951,
  },
  {
    title: "The Hobbit",
    author: "Tolkien, J.R.R.",
    publicationYear: 1937,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Rowling, J.K.",
    publicationYear: 1997
  },
  {
    title: "The Lord of the Rings",
    author: "Tolkien, J.R.R.",
    publicationYear: 1954,
  },
  {
    title: "The Da Vinci Code",
    author: "Brown, Dan",
    publicationYear: 2003,
  },
];

console.log("Reversed shelf order:");
console.log(reverseShelfOrder([...libraryBooks]));

console.log("\nSorted by title:");
console.log(sortBooksByTitle([...libraryBooks]));

console.log("\nSorted by author then title:");
console.log(sortBooksByAuthorThenTitle([...libraryBooks]));

console.log("\nSorted by publication year (descending):");
console.log(sortBooksByPublicationYearDescending([...libraryBooks]));