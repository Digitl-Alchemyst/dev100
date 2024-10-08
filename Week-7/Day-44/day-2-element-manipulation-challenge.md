# Code Challenge: Element Manipulation

## Problem Statement

In this challenge, you'll practice manipulating DOM elements. Your task is to implement four functions that modify the content, attributes, and styles of selected elements. This challenge builds upon the element selection skills from Day 1 and introduces fundamental DOM manipulation techniques, which are essential for creating dynamic and interactive web pages using JavaScript.

## Function Signatures

```javascript
function changeElementText(selector, newText) {
  // Your code here
}

function changeElementHTML(selector, newHTML) {
  // Your code here
}

function changeElementAttribute(selector, attribute, value) {
  // Your code here
}

function changeElementStyle(selector, property, value) {
  // Your code here
}
```

## Input

* `selector`: A string representing a CSS selector for the element(s) to manipulate.
* `newText`: A string of plain text to set as the element's content.
* `newHTML`: A string of HTML to set as the element's content.
* `attribute`: A string representing the name of the attribute to change.
* `value`: A string representing the new value for the attribute or style property.
* `property`: A string representing the CSS property to change.

## Output

Each function should return the modified element(s).

## Example

### HTML Structure:

```html
<div id="content">
  <p class="paragraph">Original text</p>
  <a href="#" class="link">Click me</a>
</div>
```

### JavaScript:

```javascript
changeElementText('.paragraph', 'New text');
changeElementHTML('#content', '<h1>New Content</h1>');
changeElementAttribute('.link', 'href', 'https://example.com');
changeElementStyle('.paragraph', 'color', 'blue');
```

## Constraints

* Use `querySelector` or `querySelectorAll` for element selection.
* Do not use jQuery or any other external libraries.
* Ensure your functions work for both single elements and multiple elements (when applicable).

## Testing the Script

To test your script, create an HTML file with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Manipulation Challenge</title>
</head>
<body>
    <div id="content">
      <p class="paragraph">Original text</p>
      <a href="#" class="link">Click me</a>
    </div>

    <script>
        // Your JavaScript code here
        function changeElementText(selector, newText) {
          // Implement the function here
        }

        function changeElementHTML(selector, newHTML) {
          // Implement the function here
        }

        function changeElementAttribute(selector, attribute, value) {
          // Implement the function here
        }

        function changeElementStyle(selector, property, value) {
          // Implement the function here
        }

        // Test your functions here
        console.log(changeElementText('.paragraph', 'New text'));
        console.log(changeElementHTML('#content', '<h1>New Content</h1>'));
        console.log(changeElementAttribute('.link', 'href', 'https://example.com'));
        console.log(changeElementStyle('.paragraph', 'color', 'blue'));
    </script>
</body>
</html>
```

Open this HTML file in a web browser and check the console for the returned elements. Also, visually inspect the page to see the changes.

## Bonus Challenge

Implement a function that allows chaining of these operations. For example:

```javascript
manipulate('.paragraph')
  .setText('New text')
  .setStyle('color', 'blue')
  .setAttribute('data-modified', 'true');
```

## Detailed Explanation & Expanded Instructions

### Step 1: Understanding the Problem

This challenge focuses on four key aspects of DOM manipulation:
1. Changing text content
2. Changing HTML content
3. Modifying attributes
4. Changing styles

These operations are fundamental to creating dynamic web pages and interactive user interfaces.

### Step 2: Implementing the Functions

Here's a step-by-step approach to solve this challenge:

1. `changeElementText(selector, newText)`:
   - Select the element(s) using `querySelector` or `querySelectorAll`
   - Set the `textContent` property of the element(s) to `newText`
   - Return the modified element(s)

2. `changeElementHTML(selector, newHTML)`:
   - Select the element(s) using `querySelector` or `querySelectorAll`
   - Set the `innerHTML` property of the element(s) to `newHTML`
   - Return the modified element(s)

3. `changeElementAttribute(selector, attribute, value)`:
   - Select the element(s) using `querySelector` or `querySelectorAll`
   - Use the `setAttribute` method to change the specified attribute
   - Return the modified element(s)

4. `changeElementStyle(selector, property, value)`:
   - Select the element(s) using `querySelector` or `querySelectorAll`
   - Set the style property using the element's `style` object
   - Return the modified element(s)

### Step 3: Testing the Functions

To test your implementation:

1. Create an HTML file with the provided structure.
2. Implement all four functions as described.
3. Open the HTML file in a web browser.
4. Check the console for the returned elements.
5. Visually inspect the page to see the changes.

**Test Cases**

1. Changing text:
   - Input: `changeElementText('.paragraph', 'New text')`
   - Expected: Text of paragraph changes to "New text"

2. Changing HTML:
   - Input: `changeElementHTML('#content', '<h1>New Content</h1>')`
   - Expected: Content of the div changes to an h1 with "New Content"

3. Changing attribute:
   - Input: `changeElementAttribute('.link', 'href', 'https://example.com')`
   - Expected: Link's href attribute changes to "https://example.com"

4. Changing style:
   - Input: `changeElementStyle('.paragraph', 'color', 'blue')`
   - Expected: Paragraph text color changes to blue

## Time and Space Complexity

- Time Complexity: O(n) where n is the number of elements matched by the selector
- Space Complexity: O(1) as we're modifying existing elements

## Key Takeaways

- DOM manipulation allows dynamic changes to web page content and appearance
- `textContent` is used for changing text, while `innerHTML` is used for HTML content
- `setAttribute` is used for changing element attributes
- The `style` object allows direct manipulation of an element's CSS properties
- Selector-based functions provide a flexible way to manipulate multiple elements at once

## Notes

In real-world applications, consider performance implications when manipulating many elements at once. For large-scale changes, techniques like document fragments or virtual DOM might be more efficient.
