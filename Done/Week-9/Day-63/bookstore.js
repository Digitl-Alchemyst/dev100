const bookSales = [
  {
    id: "b1",
    title: "The Mountain",
    genre: "adventure",
    price: 29.99,
    sales: 45,
    rating: 4.5,
  },
  {
    id: "b2",
    title: "Code Masters",
    genre: "education",
    price: 49.99,
    sales: 32,
    rating: 4.8,
  },
  {
    id: "b3",
    title: "Cooking 101",
    genre: "education",
    price: 19.99,
    sales: 28,
    rating: 3.9,
  },
  {
    id: "b4",
    title: "Mystery House",
    genre: "mystery",
    price: 24.99,
    sales: 65,
    rating: 4.2,
  },
  {
    id: "b5",
    title: "Web Basics",
    genre: "education",
    price: 39.99,
    sales: 22,
    rating: 4.1,
  },
  {
    id: "b6",
    title: "Desert Sands",
    genre: "adventure",
    price: 34.99,
    sales: 41,
    rating: 4.7,
  },
  {
    id: "b7",
    title: "Murder Clues",
    genre: "mystery",
    price: 29.99,
    sales: 35,
    rating: 4.4,
  },
  {
    id: "b8",
    title: "Python Pro",
    genre: "education",
    price: 45.99,
    sales: 38,
    rating: 4.9,
  },
];

function findTopBooks(books, limit) {
  // Returns array of top book titles by revenue (price * sales)
  books.sort((a, b) => b.price * b.sales - a.price * a.sales);
  return books.slice(0, limit).map((book) => book.title);
}

function analyzeGenre(books, targetGenre) {
  // Returns { totalBooks, averageRating, totalRevenue, bestSellingTitle }
  const filteredByGenre = books.filter((book) => book.genre === targetGenre);
  const totalBooks = filteredByGenre.length;
  const averageRating =
    filteredByGenre.reduce((total, book) => total + book.rating, 0) /
    totalBooks;
  const totalRevenue = filteredByGenre.reduce(
    (total, book) => total + book.price * book.sales,
    0
  );
  const bestSellingTitle = filteredByGenre.reduce((best, book) =>
    book.sales > best.sales ? book : best
  ).title;

  return {
    totalBooks,
    averageRating,
    totalRevenue,
    bestSellingTitle,
  };
}

function findBooksInPriceRange(books, min, max) {
  // Returns array of books within price range, sorted by rating
  return books.filter((book) => book.price >= min && book.price <= max);
}

function getRecommendations(books, bookId) {
  // Returns array of 3 recommended books based on genre and rating
  const targetBook = books.find((book) => book.id === bookId);
  const targetGenre = targetBook.genre;
  const targetRating = targetBook.rating;
  const recommendedBooks = books.filter(
    (book) => book.genre === targetGenre && book.rating > targetRating
  );
  return recommendedBooks.slice(0, 3);
}

function generateSalesSummary(books) {
  // Returns { totalSales, averageSales, totalRevenue, totalSalesByGenre, bestPerformingGenre, averageRating, highRatingPercentage, booksAboveAverageSales }
  const totalRevenue = books.reduce(
    (total, books) => total + books.price * books.sales,
    0
  );

  const totalSalesByGenre = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + book.sales;
    return acc;
  }, {});
  const bestPerformingGenre = Object.keys(totalSalesByGenre).reduce(
    (best, genre) => {
      return totalSalesByGenre[genre] > totalSalesByGenre[best] ? genre : best;
    },
    Object.keys(totalSalesByGenre)[0]
  );
  const averageRating =
    books.reduce((total, book) => total + book.rating, 0) / books.length;

  const totalSales = books.reduce((sum, book) => sum + book.sales, 0);
  const averageSales = totalSales / books.length;
  const booksAboveAverageSales = books.filter(
    (book) => book.sales > averageSales
  );
  const highRatingPercentage =
    (books.filter((book) => book.rating > averageRating).length /
      books.length) *
    100;

  return {
    totalSales,
    averageSales,
    totalRevenue,
    totalSalesByGenre,
    bestPerformingGenre,
    averageRating,
    highRatingPercentage,
    booksAboveAverageSales,
  };
}

// Test findTopBooks
console.log("Top 3 performing books:");
console.log(findTopBooks(bookSales, 3));

// Test analyzeGenre
console.log("\nEducation genre analysis:");
console.log(analyzeGenre(bookSales, "education"));

// Test findBooksInPriceRange
console.log("\nBooks between $25-$40 with above-average sales:");
console.log(findBooksInPriceRange(bookSales, 25, 40));

// Test getRecommendations
console.log("\nRecommendations for Code Masters:");
console.log(getRecommendations(bookSales, "b2"));

// Test generateSalesSummary
console.log("\nOverall sales summary:");
console.log(generateSalesSummary(bookSales));
