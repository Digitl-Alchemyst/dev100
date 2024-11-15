# Code Challenge: Censor Sensitive Information using replace()

## Problem Statement

This challenge focuses on using the `replace()` method to censor sensitive information in a given text. The goal is to create a `censorMessage()` function that can replace a credit card number and a PIN with placeholder text.

The input message contains a credit card number in the format `"1234-5678-9012-3456"` and a PIN in the format `"1234"`. Your task is to use regular expressions and the `replace()` method to replace these sensitive details with the string `"XXXX-XXXX-XXXX-XXXX"` for the credit card number and `"XXXX"` for the PIN.

## Function Signature

```javascript
function censorMessage(text) {
  // TODO: Use the replace() method to censor the credit card number and PIN
  
}
```

## Input

- `text`: A string containing the message with sensitive information.

## Output

The `censorMessage()` function returns a new string with the sensitive information censored.

## Example

### Input:

```javascript
const message = "My credit card number is 1234-5678-9012-3456 and my PIN is 1234.";
```

### Output:

```
My credit card number is XXXX-XXXX-XXXX-XXXX and my PIN is XXXX.
```

## Constraints

- The credit card number must be in the format `"XXXX-XXXX-XXXX-XXXX"`.
- The PIN must be replaced with the string `"XXXX"`.

## Testing the Script

You can test the `censorMessage()` function by calling it with the provided message and checking the output:

```javascript
console.log(censorMessage(message));
// Output: My credit card number is XXXX-XXXX-XXXX-XXXX and my PIN is XXXX.
```

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The main goal of this challenge is to use the `replace()` method to censor sensitive information (credit card number and PIN) in a given text string.

To achieve this, we'll need to use two regular expressions:

1. `ccRegex = /\d{4}-\d{4}-\d{4}-\d{4}/`: This regex matches a credit card number in the format `"XXXX-XXXX-XXXX-XXXX"`.
2. `pinRegex = /\d{4}/`: This regex matches a 4-digit PIN.

### Step 2: Implementing the Functions

The `censorMessage()` function uses the `replace()` method to replace the matches of the credit card number and PIN regular expressions with the corresponding placeholder text.

1. `return text.replace(ccRegex, "XXXX-XXXX-XXXX-XXXX")`: This line replaces the credit card number with the censored value `"XXXX-XXXX-XXXX-XXXX"`.
2. `.replace(pinRegex, "XXXX")`: This line replaces the PIN with the censored value `"XXXX"`.

The function returns the modified text with the sensitive information censored.

### Step 3: Testing the Functions

You can test the `censorMessage()` function by calling it with the provided message and checking the output:

```javascript
const message = "My credit card number is 1234-5678-9012-3456 and my PIN is 1234.";
console.log(censorMessage(message));
// Output: My credit card number is XXXX-XXXX-XXXX-XXXX and my PIN is XXXX.
```

You can also test the function with different input formats to ensure it handles various scenarios correctly, such as:

```javascript
console.log(censorMessage("My PIN is 5678."));
// Output: My PIN is XXXX.

console.log(censorMessage("My credit card number is 1111222233334444."));
// Output: My credit card number is XXXX-XXXX-XXXX-XXXX.
```

## Time and Space Complexity

- Time Complexity: O(n)
  - The time complexity of the `censorMessage()` function is linear, as the `replace()` method is called twice on the input string.

- Space Complexity: O(n)
  - The function creates a new string as the output, which has a size proportional to the input string length.

## References

- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Regular Expressions (RegEx) in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Related Problems

- [Mask PII](https://leetcode.com/problems/mask-personal-information/)
- [Redact Sensitive Information](https://www.hackerrank.com/challenges/redact-sensitive-information/problem)

## Key Takeaways

- The `replace()` method is used to replace a substring that matches a regular expression pattern with a new string.
- Combining regular expressions and the `replace()` method allows you to perform complex text transformations, such as censoring sensitive information.
- Understanding how to use regular expressions and string manipulation methods like `replace()` is a valuable skill for any JavaScript developer.

## Notes

This challenge focuses on using the `replace()` method to censor sensitive information in a given text. By mastering this technique, you can apply it to a wide range of text processing tasks, such as anonymizing personal data, obfuscating passwords or API keys, or redacting confidential information.

