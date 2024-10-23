# Weekend Coding Challenge: Understanding Array Operations in JavaScript

## 🎯 Challenge Overview
In this weekend challenge, you'll work with financial transaction data to learn how to chain multiple array methods together. This challenge will help you understand how to process and analyze data using JavaScript's built-in array methods.

## 🎓 Learning Objectives
- Understanding how to use multiple array methods together
- Learning about data transformation and analysis
- Practice working with financial data
- Understanding method chaining in JavaScript

## 📝 The Challenge
You are given a dataset of financial transactions. Each transaction has an ID, type (debit or credit), and amount. Your task is to analyze this data by performing multiple operations in sequence.

### Starting Data:
```javascript
const transactions = [
    { id: 1, type: "debit", amount: 100 },
    { id: 2, type: "credit", amount: 50 },
    { id: 3, type: "debit", amount: 75 },
    { id: 4, type: "credit", amount: 200 },
    { id: 5, type: "debit", amount: 150 }
];
```

### 🎯 Tasks
You need to create a chain of array operations that will:
1. Filter out all credit transactions (keep only debits)
2. Extract just the amount values from the remaining transactions
3. Sort these amounts in descending order (highest to lowest)
4. Get only the top 2 highest expenses
5. Calculate the total of these top 2 expenses

### 📚 Required Methods
You'll need to use these array methods:
- `.filter()` - For keeping only specific items in an array
- `.map()` - For transforming array items
- `.sort()` - For ordering items
- `.slice()` - For getting a portion of an array
- `.reduce()` - For calculating a single value from multiple values

## 🛠️ Template to Complete
```javascript
const top2Expenses = transactions
    // Step 1: Filter out credits
    .filter()
    // Step 2: Map to amounts
    .map()
    // Step 3: Sort descending
    .sort()
    // Step 4: Get top 2
    .slice()
    // Step 5: Calculate total
    .reduce();

console.log(`Total of top 2 expenses: ${top2Expenses}`);
```

## 💡 Hints
1. For filtering, remember that you want to keep transactions where `type === "debit"`
2. When mapping, you only need the `amount` property from each transaction
3. For sorting in descending order, remember that `sort()` needs a comparison function
4. `slice()` takes a start and end index - what indices will get you the first 2 items?
5. `reduce()` needs both an accumulator function and an initial value

## 🎯 Expected Output
The program should output the sum of the two largest debit amounts.

## 🌟 Solution Example
```javascript
const top2Expenses = transactions
    .filter(transaction => transaction.type === "debit")
    .map(transaction => transaction.amount)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((total, amount) => total + amount, 0);

console.log(`Total of top 2 expenses: ${top2Expenses}`);
// Expected output: Total of top 2 expenses: 250
```

## 🤔 Understanding the Solution
Let's break down each step:

1. **Filter**: 
   - Input: `[{id:1, type:"debit", amount:100}, ...]`
   - Output: `[{id:1, type:"debit", amount:100}, {id:3, type:"debit", amount:75}, {id:5, type:"debit", amount:150}]`
   - What happened? Kept only debit transactions

2. **Map**:
   - Input: Array of debit transaction objects
   - Output: `[100, 75, 150]`
   - What happened? Extracted just the amount values

3. **Sort**:
   - Input: `[100, 75, 150]`
   - Output: `[150, 100, 75]`
   - What happened? Ordered amounts from highest to lowest

4. **Slice**:
   - Input: `[150, 100, 75]`
   - Output: `[150, 100]`
   - What happened? Kept only the first 2 items

5. **Reduce**:
   - Input: `[150, 100]`
   - Output: `250`
   - What happened? Added the two numbers together

## 🎯 Bonus Challenges
1. Modify the code to find the average of all debit transactions
2. Find the difference between the highest debit and highest credit
3. Group transactions by type and calculate the total for each type

## 🤔 Reflection Questions
1. Why is method chaining useful in this scenario?
2. What would happen if there were no debit transactions?
3. How would you modify the code to get the bottom 2 expenses instead?
4. Can you think of real-world applications where this type of data processing would be useful?
