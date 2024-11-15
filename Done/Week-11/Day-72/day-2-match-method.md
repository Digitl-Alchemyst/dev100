# Code Challenge: Extract Information from Text using match()

## Problem Statement

This challenge focuses on using the `match()` method to extract specific information from a given text string. The goal is to create a `parseLogEntry()` function that can extract the date, time, log level, and username from a log entry.

The log entry follows a specific format: `"2023-04-15 12:34:56 [INFO] User John Doe logged in"`. Your task is to use a regular expression and the `match()` method to parse this information and return it as an object.

## Function Signature

```javascript
function parseLogEntry(entry) {
  // TODO: Use the match() method to extract the date, time, log level, and username
  const regex = ; // TODO: Add the regular expression here
  const matches = entry.match(regex);

  if (matches) {
    // Your code here to extract the data
    return {
      date: matches[1],
      time: matches[2],
      logLevel: matches[3],
      username: matches[4]
    };
  } else {
    return null;
  }
}
```

## Input

- `entry`: A string representing the log entry in the format `"2023-04-15 12:34:56 [INFO] User John Doe logged in"`.

## Output

The `parseLogEntry()` function returns an object with the following properties:
- `date`: A string representing the date in the format `"YYYY-MM-DD"`.
- `time`: A string representing the time in the format `"HH:MM:SS"`.
- `logLevel`: A string representing the log level (e.g., `"INFO"`).
- `username`: A string representing the username (e.g., `"John Doe"`).

If the input does not match the expected format, the function returns `null`.

## Example

### Input:

```javascript
const logEntry = "2023-04-15 12:34:56 [INFO] User John Doe logged in";
```

### Output:

```javascript
{
  date: "2023-04-15",
  time: "12:34:56",
  logLevel: "INFO",
  username: "John Doe"
}
```

## Constraints

- The log entry must follow the format `"YYYY-MM-DD HH:MM:SS [LOG_LEVEL] User USERNAME logged in"`.
- The username may contain spaces.

## Testing the Script

You can test the `parseLogEntry()` function by calling it with the provided log entry and checking the output:

```javascript
console.log(parseLogEntry(logEntry));
// Output: { date: '2023-04-15', time: '12:34:56', logLevel: 'INFO', username: 'John Doe' }
```

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The main goal of this challenge is to use the `match()` method to extract specific information from a log entry string that follows a predetermined format.

The log entry format is as follows:
- Date: `YYYY-MM-DD`
- Time: `HH:MM:SS`
- Log level: `[LOG_LEVEL]`
- Username: `User USERNAME logged in`

To extract this information, we'll need to use a regular expression that matches the expected format. The regular expression used in the provided code is:

`/(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) \[(.*?)\] User (.*?) logged in/`

Let's break down the regex:

1. `(\d{4}-\d{2}-\d{2})`: Matches the date in the format `YYYY-MM-DD` and captures it in the first group.
2. `(\d{2}:\d{2}:\d{2})`: Matches the time in the format `HH:MM:SS` and captures it in the second group.
3. `\[(.*?)\]`: Matches the log level enclosed in square brackets and captures it in the third group.
4. `User (.*?) logged in`: Matches the username (which may contain spaces) and captures it in the fourth group.

### Step 2: Implementing the Functions

The `parseLogEntry()` function uses the `match()` method to apply the regular expression to the input `entry` string. If the entry matches the expected format, the function returns an object with the extracted information. If the entry does not match, the function returns `null`.

1. `const matches = entry.match(regex);`: This line applies the regular expression to the input string and stores the resulting array of matches in the `matches` variable.
2. `if (matches) { ... }`: This block checks if the `matches` array is not `null`, indicating that the input string matched the regular expression.
3. Inside the `if` block, the function extracts the relevant information from the `matches` array and returns it as an object with the following properties:
   - `date`: The date extracted from the first capture group.
   - `time`: The time extracted from the second capture group.
   - `logLevel`: The log level extracted from the third capture group.
   - `username`: The username extracted from the fourth capture group.
4. If the input string does not match the expected format, the function returns `null`.

### Step 3: Testing the Functions

You can test the `parseLogEntry()` function by calling it with the provided log entry and checking the output:

```javascript
const logEntry = "2023-04-15 12:34:56 [INFO] User John Doe logged in";
console.log(parseLogEntry(logEntry));
// Output: { date: '2023-04-15', time: '12:34:56', logLevel: 'INFO', username: 'John Doe' }
```

You can also test the function with different input formats to ensure it handles various scenarios correctly, such as:

```javascript
console.log(parseLogEntry("2023-04-15 12:34:56 [ERROR] User Jane Smith logged in"));
// Output: { date: '2023-04-15', time: '12:34:56', logLevel: 'ERROR', username: 'Jane Smith' }

console.log(parseLogEntry("Invalid log entry format"));
// Output: null
```

## Time and Space Complexity

- Time Complexity: O(1)
  - The time complexity of the `parseLogEntry()` function is constant, as the regular expression matching and string operations have a fixed time complexity regardless of the input size.

- Space Complexity: O(1)
  - The function only creates a few constant-sized variables (the `matches` array and the return object), so the space complexity is also constant.

## References

- [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [Regular Expressions (RegEx) in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Related Problems

- [Parse Log File](https://www.hackerrank.com/challenges/parse-log-file/problem)
- [Regex Substitution](https://www.hackerrank.com/challenges/hackerrank-language-of-hackers/problem)

## Key Takeaways

- The `match()` method is used to apply a regular expression to a string and return an array of matches.
- Capturing groups in the regular expression allow you to extract specific parts of the matched text.
- Combining regular expressions and the `match()` method can be a powerful way to extract structured information from unstructured text.
- Understanding how to use regular expressions and string manipulation methods like `match()` is a valuable skill for any JavaScript developer.

## Notes

This challenge focuses on using the `match()` method to extract information from a given text format. By mastering this technique, you can apply it to a wide range of text processing tasks, such as parsing log files, extracting data from web pages, or processing user input.

