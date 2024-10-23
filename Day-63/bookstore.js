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
}

function analyzeGenre(books, targetGenre) {
  // Returns { totalBooks, averageRating, totalRevenue, bestSellingTitle }
}

function findBooksInPriceRange(books, min, max) {
  // Returns array of books within price range, sorted by rating
}

function getRecommendations(books, bookId) {
  // Returns array of 3 recommended books based on genre and rating
}

function generateSalesSummary(books) {
  // Returns { totalRevenue, bestPerformingGenre, averageRating,
  //           booksAboveAverageSales, highRatingPercentage }
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
