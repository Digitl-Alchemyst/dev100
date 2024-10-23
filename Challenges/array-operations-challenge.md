# 🚀 Weekend Challenge: Array Operations Mastery

## The Story
You've been hired by a growing tech startup to help build their data analytics dashboard. They have information about their users' activities, purchases, and engagement, but they need your help to make sense of it all!

## The Challenge
You'll be working with three different datasets, each requiring different array manipulation techniques. Your goal is to create functions that analyze this data in various ways.

### Dataset 1: User Activity
```javascript
const userActivity = [
    { userId: 1, action: "login", timestamp: "2024-03-01T10:00:00" },
    { userId: 2, action: "purchase", timestamp: "2024-03-01T10:05:00" },
    { userId: 1, action: "logout", timestamp: "2024-03-01T11:00:00" },
    { userId: 3, action: "login", timestamp: "2024-03-01T11:30:00" },
    { userId: 2, action: "comment", timestamp: "2024-03-01T11:45:00" },
    { userId: 3, action: "purchase", timestamp: "2024-03-01T12:00:00" },
    { userId: 4, action: "login", timestamp: "2024-03-01T12:15:00" },
    { userId: 4, action: "comment", timestamp: "2024-03-01T12:30:00" },
    { userId: 4, action: "purchase", timestamp: "2024-03-01T12:45:00" }
];
```

### Dataset 2: Product Purchases
```javascript
const purchases = [
    { productId: "P1", price: 29.99, category: "Electronics" },
    { productId: "P2", price: 9.99, category: "Books" },
    { productId: "P1", price: 29.99, category: "Electronics" },
    { productId: "P3", price: 14.99, category: "Clothing" },
    { productId: "P2", price: 9.99, category: "Books" },
    { productId: "P4", price: 49.99, category: "Electronics" },
    { productId: "P3", price: 14.99, category: "Clothing" }
];
```

### Dataset 3: User Feedback
```javascript
const feedback = [
    { rating: 5, comment: "Great product!", helpful: 10 },
    { rating: 2, comment: "Didn't work well", helpful: 3 },
    { rating: 4, comment: "Good but expensive", helpful: 7 },
    { rating: 1, comment: "Terrible", helpful: 15 },
    { rating: 5, comment: "Amazing!", helpful: 8 },
    { rating: 3, comment: "Average", helpful: 2 }
];
```

## Your Tasks

### Part 1: User Activity Analysis
1. Create a function that counts how many unique users performed each type of action
2. Find the user who was most active (performed the most actions)
3. Create a timeline of events sorted by timestamp

### Part 2: Purchase Analysis
1. Calculate the total revenue by category
2. Find the most popular product (most frequently purchased)
3. Create a summary of average price per category

### Part 3: Feedback Analysis
1. Calculate the average rating
2. Find the most helpful negative review (rating < 3)
3. Group reviews by rating and count them

### Part 4: Advanced Challenges
1. Create a function that finds users who logged in but never made a purchase
2. Calculate the time between login and purchase for users who bought something
3. Find products that were purchased multiple times in the same category

## Requirements
- Use array methods like `map`, `filter`, `reduce`, `sort`, and others as needed
- Create reusable functions
- Handle edge cases (empty arrays, missing data, etc.)
- Use modern JavaScript features where appropriate
- Comment your code to explain your thought process
- Don't use external libraries - only vanilla JavaScript

## Scoring Criteria
- Correct functionality (40%)
- Code organization and cleanliness (20%)
- Efficient use of array methods (20%)
- Error handling (10%)
- Code comments and documentation (10%)

## Tips for Success
- Break down each problem into smaller steps
- Test your functions with different input scenarios
- Consider performance when working with larger datasets
- Use console.log() to debug your progress
- Think about how to make your functions reusable

## Getting Started
1. Create separate functions for each task
2. Test each function individually
3. Think about edge cases
4. Consider how you might combine multiple array methods to solve complex problems

## Example Function Structure
```javascript
function analyzeUserActivity(activities) {
    // Your code here
    // Remember to handle edge cases!
    return analysis;
}

function calculateRevenue(purchases) {
    // Your code here
    // Remember to handle edge cases!
    return revenue;
}

function analyzeFeedback(feedback) {
    // Your code here
    // Remember to handle edge cases!
    return analysis;
}
```

## Bonus Challenge
Create a master analysis function that combines data from all three datasets to:
1. Find which product categories receive the best feedback
2. Identify users who make purchases but never leave feedback
3. Calculate the average time between login and purchase for different product categories

## Submission
Your code should:
- Be well-commented
- Include test cases
- Handle edge cases
- Use consistent naming conventions
- Follow JavaScript best practices

Remember: There are multiple ways to solve these challenges. Focus on writing clean, efficient, and maintainable code rather than finding the shortest possible solution.

Good luck! 🚀
