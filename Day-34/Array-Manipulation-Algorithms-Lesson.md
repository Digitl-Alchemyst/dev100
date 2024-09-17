# Array Rotation and Longest Increasing Subsequence: 1-Hour Lesson Plan

## Introduction (5 minutes)

Good morning/afternoon, class! Today, we're going to explore two interesting array operations in JavaScript:
1. Rotating an array to the right by k steps
2. Finding the length of the longest increasing subsequence in an array

These operations might sound complex, but don't worry! We'll break them down step-by-step and make sure everyone understands each concept before moving on.

## Part 1: Array Rotation (25 minutes)

### 1.1 Understanding Array Rotation (5 minutes)

Let's start by understanding what it means to rotate an array. Imagine you have a line of people, and you ask everyone to move a certain number of places to the right, with the person at the end moving to the beginning. This is essentially what array rotation does with elements in an array.

For example, if we have the array [1, 2, 3, 4, 5] and we rotate it by 2 steps to the right, we get [4, 5, 1, 2, 3].

### Discussion:
Can anyone tell me what would happen if we rotated [1, 2, 3, 4, 5] by 1 step to the right? How about 5 steps? 

(Wait for responses)

Great! You've noticed that rotating by 1 step gives us [5, 1, 2, 3, 4], and rotating by 5 steps gives us back the original array. This brings us to an important concept: when we rotate by the length of the array, we get back to where we started.

### 1.2 Understanding 'k steps' (5 minutes)

In our rotation function, 'k' represents the number of steps we want to rotate the array to the right. Here are some key points about 'k':

1. If k is positive, we rotate to the right.
2. If k is greater than the length of the array, we can use the modulo operator (%) to find the effective rotation.
3. If k is negative, it's equivalent to rotating left by |k| steps.

### Example:
Let's say we have an array of length 5, and k = 7. 
Effective rotation = 7 % 5 = 2
So rotating by 7 is the same as rotating by 2.

### Discussion:
Why do you think we use the modulo operator here? Can you think of a real-world analogy for this?

(Wait for responses)

Excellent! It's like a clock face. If you move the hour hand 14 hours forward, it's the same as moving it 2 hours forward.

### 1.3 Implementing the Rotation Function (15 minutes)

Now, let's implement our rotation function:

```javascript
function rotateArray(arr, k) {
    // Ensure k is within the array bounds
    k = k % arr.length;
    
    // If k is negative, convert it to the equivalent positive rotation
    if (k < 0) {
        k = arr.length + k;
    }
    
    // Perform the rotation
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}
```

This line is using the spread operator (...) and the slice() method to create a new array that represents the rotated version of the original array. Here's a detailed explanation:


Let's break this down step-by-step:

1. First, we use `k % arr.length` to ensure k is within the array bounds.
2. If k is negative, we convert it to the equivalent positive rotation.
3. We use the slice method to split the array into two parts:
   - `arr.slice(-k)` gives us the last k elements
   - `arr.slice(0, -k)` gives us all but the last k elements
4. `arr.slice(-k)`: This creates a new array containing the last k elements of the original array. The negative index -k means "start k elements from the end".

5. `arr.slice(0, -k)`: This creates a new array containing all elements from the start of the array up to, but not including, the last k elements.

6. `[...arr.slice(-k), ...arr.slice(0, -k)]`: This combines the two sliced arrays into a single new array. The spread operator (...) is used to unpack the elements of each sliced array into the new array.

In the context of the rotateArray function, -k is used to refer to the last k elements of the array.

When used with the slice() method, a negative index counts from the end of the array. So arr.slice(-k) means "take a slice of the array starting from the kth element from the end, all the way to the end of the array".

For example, if k = 2 and the array is [1, 2, 3, 4, 5], then arr.slice(-k) would return [4, 5].

This usage of -k is crucial for the rotation logic, as it allows the function to easily select the portion of the array that needs to be moved to the front during the rotation operation.

When used with just k instead of -k, the behavior would be quite different:

arr.slice(k) would return a new array starting from index k to the end of the array.
arr.slice(0, k) would return a new array from the beginning of the array up to, but not including, index k.
For example, if arr = [1, 2, 3, 4, 5] and k = 2:

arr.slice(k) would return [3, 4, 5]
arr.slice(0, k) would return [1, 2]
Using -k allows the function to work from the end of the array, which is essential for the rotation logic. It enables the selection of the last k elements regardless of the array's length, making the rotation algorithm more flexible and efficient.

### Example Usage:
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2));  // Output: [4, 5, 1, 2, 3]
console.log(rotateArray(arr, -1)); // Output: [2, 3, 4, 5, 1]
```

### Discussion:
Can someone explain why we need to handle negative k values differently? What would happen if we didn't?

(Wait for responses)

Great insights! Handling negative k values allows our function to work for both right and left rotations. If we didn't handle it, negative values would cause unexpected results.

## Part 2: Longest Increasing Subsequence (30 minutes)

### 2.1 Understanding Subsequences (10 minutes)

Before we dive into finding the longest increasing subsequence, let's understand what a subsequence is.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### Example:
For the array [3, 1, 8, 2, 5], some subsequences are:
- [3, 8, 5]
- [1, 2, 5]
- [3, 1, 8, 2, 5] (the entire array is also a subsequence)
- [3] (a single element is also a subsequence)

Note that [3, 2, 1] is NOT a subsequence because it changes the order of the elements.

### Discussion:
Can anyone give me an example of a subsequence of [4, 1, 3, 2, 5] that has length 3?

(Wait for responses)

Excellent examples! Remember, the elements in a subsequence don't have to be adjacent in the original array.

### 2.2 Understanding Increasing Subsequences (5 minutes)

An increasing subsequence is a subsequence where each element is greater than the previous one.

### Example:
For the array [3, 1, 8, 2, 5], some increasing subsequences are:
- [1, 8]
- [1, 2, 5]
- [3, 8]

### Discussion:
Why isn't [3, 1, 8] an increasing subsequence? Can you find the longest increasing subsequence in [3, 1, 8, 2, 5]?

(Wait for responses)

Great observations! [3, 1, 8] isn't increasing because 1 is less than 3. The longest increasing subsequence in this array is [1, 2, 5].

### 2.3 Implementing the Longest Increasing Subsequence Function (15 minutes)

Now, let's implement a function to find the length of the longest increasing subsequence:

```javascript
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    let dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}
```

Let's break this down:

1. We start by handling the edge case of an empty array.
2. We create an array `dp` where `dp[i]` will store the length of the longest increasing subsequence ending at index i.
3. We initialize all elements of `dp` to 1, as each individual element is an increasing subsequence of length 1.
4. We use two nested loops:
   - The outer loop (i) iterates through each element of the array.
   - The inner loop (j) looks at all elements before i.
5. If we find a smaller element before i, we have two choices:
   - Include nums[i] in the subsequence (dp[j] + 1)
   - Don't include nums[i] (keep dp[i] as is)
   We take the maximum of these two choices.
6. Finally, we return the maximum value in dp, which represents the length of the longest increasing subsequence.

### Example Usage:
```javascript
let arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr));  // Output: 4 (The longest increasing subsequence is [2, 5, 7, 101])
```

### Discussion:
Can someone walk us through how this function would process the array [3, 1, 8, 2, 5]? What would the `dp` array look like at each step?

(Wait for responses)

Excellent walkthrough! This is a great example of dynamic programming, where we build up our solution by solving and storing smaller subproblems.

## Conclusion and Q&A (5 minutes)

Today, we've covered two important array operations:
1. Rotating an array to the right by k steps
2. Finding the length of the longest increasing subsequence

These operations demonstrate important programming concepts like modular arithmetic, array manipulation, and dynamic programming. Remember, practice is key to mastering these concepts. Try implementing these functions on your own and experiment with different input arrays.

Are there any questions about what we've covered today?

(Address any questions from the students)

Thank you for your attention and participation. Keep practicing, and don't hesitate to ask for help if you need it!
