# Code Challenge: Recursive Regex Matching

## Problem Statement

This challenge aims to explore the power of regular expressions and recursion in JavaScript. The task is to write a function that can find all nested HTML tags within a given HTML content. By leveraging recursive regex matching, we will extract the tag names and their corresponding contents, allowing us to uncover the full nested structure of the HTML.

## Function Signature

```javascript
function findNestedTags(html) {
  // TODO:
  // 1. Write a recursive regex function to find all nested HTML tags
  // 2. Extract the tag name and contents for each nested tag
}
```

## Input

The input is a string of HTML content that may contain nested tags.

## Output

The function should return an array of objects, where each object represents a nested tag and contains the following properties:
- `tagName`: the name of the HTML tag
- `content`: the contents inside the HTML tag, including any further nested tags

## Example

### Input:

```html
<div>
  <p>This is a paragraph.</p>
  <div>
    <h2>Nested Heading</h2>
    <p>This is another paragraph.</p>
  </div>
  <span>Some text</span>
</div>
```

### Output:

```javascript
[
  { tagName: 'div', content: '\n  <p>This is a paragraph.</p>\n  <div>\n    <h2>Nested Heading</h2>\n    <p>This is another paragraph.</p>\n  </div>\n  <span>Some text</span>\n' },
  { tagName: 'p', content: 'This is a paragraph.' },
  { tagName: 'div', content: '\n    <h2>Nested Heading</h2>\n    <p>This is another paragraph.</p>\n  ' },
  { tagName: 'h2', content: 'Nested Heading' },
  { tagName: 'p', content: 'This is another paragraph.' },
  { tagName: 'span', content: 'Some text' }
]
```

## Constraints

- The input HTML content can contain any valid HTML tags, including nested tags.
- The function should be able to handle self-closing tags (e.g., `<br/>`, `<img src="..."/>`).
- The function should be able to handle HTML comments (e.g., `<!-- this is a comment -->`).

## Testing the Script

To test the script, you can use the following code:

```javascript
console.log(findNestedTags(htmlContent));
```

This will log the array of nested tags to the console.

## Bonus Challenge

As a bonus challenge, you can modify the function to also extract the attributes of the HTML tags (e.g., `<div class="container" id="main">`) and include them in the output.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The key to solving this problem is to understand how regular expressions can be used to match nested structures. In this case, we need to find all the HTML tags and their corresponding contents, including any nested tags within the contents.

The general approach is to use a recursive regular expression that matches an opening tag, the content inside the tag (which may include more nested tags), and the closing tag. By recursively applying this pattern, we can uncover the full nested structure of the HTML content.

### Step 2: Implementing the Functions

1. Define the initial regular expression pattern to match an HTML tag:
   - The pattern should match an opening tag, the content inside the tag, and the closing tag.
   - Use capturing groups to extract the tag name and the content.
   - Make the content part of the pattern non-greedy to ensure it doesn't capture more than necessary.
2. Write a recursive function that applies the regular expression to the input HTML content:
   - Initialize an empty array to store the found tags.
   - Use a while loop to find all matches in the HTML content.
   - For each match, extract the tag name and content.
   - Recursively call the function with the extracted content to find any nested tags.
   - Add the found tags (both the current tag and any nested tags) to the result array.
3. Return the array of found tags.

### Step 3: Testing the Functions

To test the script, you can use the provided `htmlContent` example and log the result of the `findNestedTags` function to the console.

**Test Cases**

1. Test Case 1:
   - Input: `htmlContent`
   - Expected Output: An array of nested tag objects, as shown in the example output.

2. Test Case 2:
   - Input: An HTML content with self-closing tags and HTML comments.
   - Expected Output: An array of nested tag objects, including the self-closing tags and excluding the HTML comments.

3. Test Case 3:
   - Input: An HTML content with more complex nesting, such as nested lists, tables, or other HTML elements.
   - Expected Output: An array of nested tag objects, accurately representing the full nested structure.

## Time and Space Complexity

- Time Complexity: O(n), where n is the length of the input HTML content. The function iterates through the content once, with a constant-time operation for each match.
- Space Complexity: O(n), where n is the number of nested tags found. The function stores all the found tags in an array, which can grow linearly with the number of nested tags in the input.

The time and space complexities are both linear with respect to the input size, which is a reasonable trade-off for the functionality provided by the recursive regex matching approach.

## References

- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regular Expressions Cookbook](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/)
- [Eloquent JavaScript - Regular Expressions](https://eloquentjavascript.net/09_regexp.html)

## Related Problems

- [Problem 1]: Parsing HTML with a DOM parser
- [Problem 2]: Extracting data from structured text using regular expressions

## Key Takeaways

- Recursive regular expressions can be a powerful tool for solving problems that involve nested structures.
- Understanding the capabilities and limitations of regular expressions is crucial for effectively using them in your code.
- Careful testing and validation of your regex-based solutions are important to ensure they handle edge cases and unexpected input correctly.

## Notes

This solution uses a recursive approach to handle the nested structure of the HTML content. An alternative approach could be to use a stack-based solution, which might be more intuitive for some developers. Both approaches have their merits, and the choice depends on the specific requirements and personal preferences.

