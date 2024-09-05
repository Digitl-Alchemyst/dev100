# Day 3 Coding Challenge: Closures

## Problem Statement

Create a function called `createCounter` that returns another function, known as the counter function. The counter function, when called, should increment and return the current count. The initial value of the count should be specified when creating the counter. This is a great way to explore closures in JavaScript, as the inner function (the counter) will have access to the outer function's scope even after the outer function has finished executing.

### What is a Closure?

A closure is a feature in JavaScript where an inner function has access to the variables of an outer function, even after the outer function has completed its execution. In this challenge, the counter function is a closure because it retains access to the initialValue from the createCounter function, allowing it to increment and return the count.

## Function Signature

```javascript
function createCounter(initialValue) {
   // Your code here 
}
```

## Input
- `initialValue`: An integer representing the starting value of the counter.

## Output
The `createCounter` function should return another function that, when called, increments the counter and returns the updated value.

## Examples
1. Usage:
```javascript
const counter1 = createCounter(0);
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3
const counter2 = createCounter(10);
console.log(counter2()); // Output: 11
console.log(counter2()); // Output: 12
```
## Test the Function
After implementing the function, create multiple counters with different initial values and test them to ensure they maintain separate counts.

## Expanded Instructions

### Step 1: Understanding the Problem

The goal is to create a function that generates a counter function. The counter function should start counting from a given initial value and increment by 1 each time it's called. This involves the concept of closures, where the inner function retains access to the outer function's variables.

### Step 2: Potential Solutions

**Closure Approach:**
- Define a function createCounter that takes an initial value as an argument.
- Inside createCounter, define and return an inner function (the counter function) that increments the initial value and returns the updated value each time it is called.

### Step 3: Implementing the Function

Implement the `createCounter` function as described in the function signature. The returned function should have access to a variable that keeps track of the count.

```javascript
function createCounter(initialValue) {
  let count = initialValue;
  
  return function() {
    count += 1;
    return count;
  };
}

```

### Explanation:

This challenge introduces closures, which are functions that have access to variables in their outer (enclosing) lexical scope, even after the outer function has returned. Closures are powerful for creating private state and data encapsulation in JavaScript.
- The createCounter function initializes a count variable with the initialValue provided.
- The inner function (which is returned) increments the count by 1 and returns the updated count.
- The magic of closures allows the inner function to maintain access to the count variable, even after the createCounter function has finished executing. This means that each call to the counter function will remember the last value of count and increment from there.


## Bonus Challenge: 

### Challenge 1: Decrementing Counter
Modify the createCounter function to return two functions: one that increments the count and another that decrements the count. Ensure both functions share the same count variable.

**Function Signature:**

```javascript
function createCounterWithDecrement(initialValue) {
   // Your code here 
}
```

**Example Usage:**

```javascript

const counter = createCounterWithDecrement(5);
console.log(counter.increment()); // Output: 6
console.log(counter.decrement()); // Output: 5
console.log(counter.decrement()); // Output: 4
```

### Challenge 2: Resetting the Counter
Enhance the createCounter function to include a method that resets the counter to its initial value.

Hint: You might need to return an object with multiple methods (increment, decrement, reset).

**Function Signature:**

```javascript
function createCounterWithReset(initialValue) {
   // Your code here 
}
```

**Example Usage:**

```javascript
const counter = createCounterWithReset(10);
console.log(counter.increment()); // Output: 11
console.log(counter.reset()); // Output: 10
```

### Test the Function
- Create multiple counters with different initial values.
- Test that each counter maintains its own state.
- Test the bonus challenges to ensure the counter can decrement and reset.
