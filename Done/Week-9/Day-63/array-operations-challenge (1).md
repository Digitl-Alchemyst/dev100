# 🏆 Week-End Challenge: Array Operations Mastery

## Introduction
Throughout this week, you've learned about different array methods and their powers. Now it's time to put all that knowledge to the test with some real-world scenarios!

## 🎯 Your Mission
You're building a dashboard for a small online bookstore. You'll need to analyze their data and create useful insights for the store owner.

## 📚 The Data
```javascript
const bookSales = [
    { id: "b2", title: "Code Masters", genre: "education", price: 49.99, sales: 32, rating: 4.8 },
    { id: "b3", title: "Cooking 101", genre: "education", price: 19.99, sales: 28, rating: 3.9 },
    { id: "b5", title: "Web Basics", genre: "education", price: 39.99, sales: 22, rating: 4.1 },
    { id: "b8", title: "Python Pro", genre: "education", price: 45.99, sales: 38, rating: 4.9 }
    { id: "b1", title: "The Mountain", genre: "adventure", price: 29.99, sales: 45, rating: 4.5 },
    { id: "b6", title: "Desert Sands", genre: "adventure", price: 34.99, sales: 41, rating: 4.7 },
    { id: "b4", title: "Mystery House", genre: "mystery", price: 24.99, sales: 65, rating: 4.2 },
    { id: "b7", title: "Murder Clues", genre: "mystery", price: 29.99, sales: 35, rating: 4.4 },
];
```

## 🎯 Challenges

### 1. Best Performers
Create a function `findTopBooks(books, limit)` that returns the top-performing books based on total revenue (price * sales).
- The function should return an array of book titles
- Books should be ordered by revenue (highest first)
- The `limit` parameter determines how many books to return

### 2. Genre Analysis
Create a function `analyzeGenre(books, targetGenre)` that returns an object with:
- Total books in that genre
- Average rating for the genre
- Total revenue for the genre
- Best-selling book title in that genre

### 3. Price Range Finder
Create a function `findBooksInPriceRange(books, min, max)` that:
- Returns books within the given price range (inclusive)
- Sort them by rating (highest first)
- Include only books with above-average sales

### 4. Smart Recommendations
Create a function `getRecommendations(books, bookId)` that:
- Takes a book ID and returns 3 recommended books
- Recommendations should be from the same genre as the input book
- Should not include the input book
- Should be sorted by rating
- If there aren't enough books in the same genre, fill with highest-rated books from other genres

### 5. Sales Summary
Create a function `generateSalesSummary(books)` that returns an object containing:
- Total revenue across all books
- Best performing genre (by total revenue)
- Average book rating
- Number of books with sales above average
- Percentage of books with rating > 4.5

## 📝 Requirements
- Use appropriate array methods (map, filter, reduce, sort, etc.)
- Handle edge cases (empty arrays, invalid inputs, etc.)
- Round numerical values to 2 decimal places where appropriate
- Add error handling where necessary
- Write clean, readable code with good variable names

## 🎯 Testing
Test your functions with these scenarios:
1. Find top 3 books by revenue
2. Analyze the "education" genre
3. Find books between $25-$40 with above-average sales
4. Get recommendations for "Code Masters"
5. Generate a complete sales summary

## 🌟 Bonus Challenges
If you finish early:
1. Add a function to find books that have above-average ratings BUT below-average sales
2. Create a function that suggests price adjustments for underperforming books
3. Add a function to identify "hidden gems" (books with high ratings but low sales)

## 📈 Evaluation Criteria
- Correct functionality
- Code efficiency
- Error handling
- Code readability
- Creative problem-solving

## 🚫 Rules
- No use of external libraries
- Must use array methods (no traditional for loops)
- Must handle edge cases
- Must include comments explaining your logic

Ready to show off your array manipulation skills? Start coding! 💻

Remember: There are often multiple ways to solve these challenges. Focus on writing clean, efficient code that others can understand.

Good luck! 🍀


