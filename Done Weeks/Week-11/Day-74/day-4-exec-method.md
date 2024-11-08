# Code Challenge: Find All Matches using exec()

## Problem Statement

This challenge focuses on using the `exec()` method to find all occurrences of a pattern in a given text. The goal is to create a `findAllFoxes()` function that can find all instances of the word "fox" in a paragraph of text.

The input paragraph contains two occurrences of the word "fox". Your task is to use a regular expression and the `exec()` method to find and return all matches in an array.

## Function Signature

```javascript
function findAllFoxes(text) {
  const foxRegex = /fox/g;
  const matches = [];

  let match;
  while ((match = foxRegex.exec(text)) !== null) {
    matches.push(match[0]);
  }

  return matches;
}
```

## Input

- `text`: A string containing the paragraph of text.

## Output

The `findAllFoxes()` function returns an array of all the matches found in the input text.

## Example

### Input:

```javascript
const paragraph = "The quick brown fox jumps over the lazy dog. Another fox is hiding in the bushes.";
```

### Output:

```javascript
["fox", "fox"]
```

## Constraints

- The regular expression should be case-insensitive.
- The function should return all occurrences of the word "fox" in the input text.

## Testing the Script

You can test the `findAllFoxes()` function by calling it with the provided paragraph and checking the output:

```javascript
console.log(findAllFoxes(paragraph));
// Output: ["fox", "fox"]
```

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The main goal of this challenge is to use the `exec()` method to find all occurrences of a specific pattern (in this case, the word "fox") in a given text.

To achieve this, we'll need to use a regular expression with the global flag (`/fox/g`) to match all instances of the word "fox" in the input text.

### Step 2: Implementing the Functions

The `findAllFoxes()` function uses a `while` loop to repeatedly call the `exec()` method on the regular expression until all matches have been found.

1. `const foxRegex = /fox/g;`: This defines the regular expression pattern to match the word "fox" globally (with the `g` flag).
2. `const matches = [];`: This creates an empty array to store the matches.
3. `let match;`: This declares a variable to hold the result of the `exec()` method.
4. `while ((match = foxRegex.exec(text)) !== null) { ... }`: This loop continues as long as the `exec()` method returns a match.
   - `match = foxRegex.exec(text)`: This line calls the `exec()` method and stores the result in the `match` variable.
   - `matches.push(match[0]);`: This line adds the matched text (the first element of the `match` array) to the `matches` array.
5. `return matches;`: This returns the array of all matches found in the input text.

### Step 3: Testing the Functions

You can test the `findAllFoxes()` function by calling it with the provided paragraph and checking the output:

```javascript
const paragraph = "The quick brown fox jumps over the lazy dog. Another fox is hiding in the bushes.";
console.log(findAllFoxes(paragraph));
// Output: ["fox", "fox"]
```

You can also test the function with different input texts to ensure it handles various scenarios correctly, such as:

```javascript
console.log(findAllFoxes("There are no foxes here."));
// Output: []

console.log(findAllFoxes("FOX and the Hound"));
// Output: ["FOX", "fox"]
```

## Time and Space Complexity

- Time Complexity: O(n)
  - The time complexity of the `findAllFoxes()` function is linear, as the `exec()` method is called repeatedly until all matches are found.

- Space Complexity: O(m)
  - The function creates an array to store the matches, where `m` is the number of matches found in the input text.

## References

- [RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [Regular Expressions (RegEx) in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Related Problems

- [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

## Key Takeaways

- The `exec()` method is used to apply a regular expression to a string and return the first match found.
- By using a `while` loop and repeatedly calling `exec()`, you can find all matches in a string.
- Combining regular expressions and the `exec()` method allows you to perform complex text search and extraction tasks.
- Understanding how to use regular expressions and string manipulation methods like `exec()` is a valuable skill for any JavaScript developer.

## Notes

This challenge focuses on using the `exec()` method to find all occurrences of a pattern in a given text. By mastering this technique, you can apply it to a wide range of text processing tasks, such as finding all instances of a specific word or phrase, extracting data from structured text, or performing complex text searches.

