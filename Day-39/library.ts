const library = (function () {
  return function (name, initialBookList = {}) {
    let libraryName = name;
    let bookList = { ...initialBookList };

    // Private function
    function setLibraryName(name) {
      libraryName = name;
      return libraryName;
    }

    // Public methods
    return {
      getLibraryName: function () {
        return libraryName;
      },
      getBooks: function () {
        return bookList;
      },
      addBook: function (title, author, copies = 1) {
        if (typeof title === "object" && title.title) {
          // If an object is passed, extract title, author, and copies
          ({ title, author, copies = 1 } = title);
        }
        if (bookList[title]) {
          bookList[title].copies += copies;
        } else {
          bookList[title] = { title, author, copies };
        }
      },
      checkoutBook: function (title) {
        if (typeof title === "object" && title.title) {
          title = title.title;
        }
        if (bookList[title] && bookList[title].copies > 0) {
          bookList[title].copies--;
          return true;
        }
        return false;
      },
      returnBook: function (title, author) {
        if (typeof title === "object" && title.title) {
          ({ title, author } = title);
        }
        if (bookList[title]) {
          bookList[title].copies++;
        } else {
          bookList[title] = { title, author, copies: 1 };
        }
        return true;
      },
    };
  };
})();

const myLibrary = library("Little JS Library", {});

// Helper function to log test results
function logTest(testName, result, expected) {
  console.log(`Test: ${testName}`);
  console.log(`Result: ${JSON.stringify(result)}`);
  console.log(`Expected: ${JSON.stringify(expected)}`);
  console.log(
    JSON.stringify(result) === JSON.stringify(expected) ? "PASS" : "FAIL"
  );
  console.log("---");
}

// Test getLibraryName
logTest("getLibraryName", myLibrary.getLibraryName(), "Little JS Library");

// Test initial empty library
logTest("Initial empty library", myLibrary.getBooks(), {});

// Test adding books
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 5);
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 3);
logTest("Add books", myLibrary.getBooks(), {
  "The Great Gatsby": {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    copies: 5,
  },
  "To Kill a Mockingbird": {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    copies: 3,
  },
});

// Test checking out a book
logTest(
  "Checkout existing book",
  myLibrary.checkoutBook("The Great Gatsby"),
  true
);
logTest("Books after checkout", myLibrary.getBooks(), {
  "The Great Gatsby": {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    copies: 4,
  },
  "To Kill a Mockingbird": {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    copies: 3,
  },
});

// Test returning a book
logTest(
  "Return existing book",
  myLibrary.returnBook("The Great Gatsby", "F. Scott Fitzgerald"),
  true
);
logTest("Books after return", myLibrary.getBooks(), {
  "The Great Gatsby": {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    copies: 5,
  },
  "To Kill a Mockingbird": {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    copies: 3,
  },
});

// Test checking out non-existent book
logTest("Checkout non-existent book", myLibrary.checkoutBook("1984"), false);

// Test returning non-existent book
logTest(
  "Return non-existent book",
  myLibrary.returnBook("1984", "George Orwell"),
  true
);
logTest("Books after returning non-existent book", myLibrary.getBooks(), {
  "The Great Gatsby": {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    copies: 5,
  },
  "To Kill a Mockingbird": {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    copies: 3,
  },
  "1984": { title: "1984", author: "George Orwell", copies: 1 },
});

// Test adding copies to existing book
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 2);
logTest(
  "Add copies to existing book",
  myLibrary.getBooks()["The Great Gatsby"],
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 7 }
);

// Test checking out all copies of a book
for (let i = 0; i < 7; i++) {
  myLibrary.checkoutBook("The Great Gatsby");
}
logTest("Checkout all copies", myLibrary.getBooks()["The Great Gatsby"], {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  copies: 0,
});

// Test checking out from empty stock
logTest(
  "Checkout from empty stock",
  myLibrary.checkoutBook("The Great Gatsby"),
  false
);

// Test adding book with object notation
myLibrary.addBook("Pride and Prejudice", "Jane Austen", 3);

logTest(
  "Add book with object notation",
  myLibrary.getBooks()["Pride and Prejudice"],
  { title: "Pride and Prejudice", author: "Jane Austen", copies: 3 }
);

console.log("All tests completed.");
