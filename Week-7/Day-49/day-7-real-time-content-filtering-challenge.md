# Code Challenge: Real-time Content Filtering

## Problem Statement

In this challenge, you'll create a list of items with a search input. As the user types in the search box, the list should be filtered in real-time to show only matching items. This challenge will test your ability to handle user input, perform array operations, and dynamically update the DOM. Additionally, you'll optimize the performance using debouncing.

## Function Signatures

```javascript
function createFilterableList(items, targetElement) {
  // Your code here
}

function createSearchInput() {
  // Your code here
}

function filterItems(searchTerm) {
  // Your code here
}

function updateList(filteredItems) {
  // Your code here
}

function debounce(func, delay) {
  // Your code here
}
```

## Input

* `items`: An array of strings representing the list items.
* `targetElement`: A DOM element where the filterable list will be inserted.
* `searchTerm`: A string representing the current value of the search input.
* `func`: A function to be debounced.
* `delay`: A number representing the delay in milliseconds for debouncing.

## Output

* `createFilterableList`: Should return the `targetElement` with the filterable list and search input appended.
* `createSearchInput`: Should return a new `<input>` element for searching.
* `filterItems`: Should return an array of items that match the search term.
* `updateList`: Should update the DOM to display the filtered items.
* `debounce`: Should return a debounced version of the input function.

## Example

HTML Structure:

```html
<div id="list-container"></div>
```

JavaScript:

```javascript
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
const listContainer = document.getElementById('list-container');
createFilterableList(items, listContainer);
```

## Constraints

* Use only vanilla JavaScript. Do not use any external libraries or frameworks.
* The filtering should be case-insensitive.
* Implement proper error handling for invalid inputs.
* Optimize for performance, especially for large lists.

## Testing the Script

To test your implementation, you can use the following code:

```javascript
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'];
const listContainer = document.getElementById('list-container');

// Create the filterable list
createFilterableList(items, listContainer);

// Log the initial list
console.log('Initial list:', items);

// You'll need to manually test the filtering by typing in the search input

// To test the filterItems function separately:
console.log('Filtered list (searching for "be"):', filterItems('be'));

// To test the debounce function:
const debouncedLog = debounce((text) => console.log('Debounced:', text), 1000);
debouncedLog('Test'); // This should log after a 1-second delay
```

Make sure to have an HTML file with a `<div id="list-container"></div>` element, and link your JavaScript file to it.

## Bonus Challenge

Implement highlighting of the matched portion of text in the filtered results. For example, if the search term is "app", the word "Apple" in the list should have "App" highlighted.

## Detailed Explanation & Expanded Instructions

### Step 1: Understanding the Problem

This challenge focuses on creating a real-time filtering system with the following key components:
1. A list of items displayed on the page
2. A search input for filtering the list
3. Real-time updating of the list as the user types
4. Performance optimization using debouncing

### Step 2: Implementing the Functions

Here's a step-by-step approach to solve this challenge:

1. `createFilterableList(items, targetElement)`:
   - Create a container for the entire component
   - Call `createSearchInput()` to create the search input
   - Create a `<ul>` element to contain the list items
   - Iterate over the `items` array and create `<li>` elements for each item
   - Append the search input and list to the container
   - Append the container to the `targetElement`
   - Add an event listener to the search input that calls a debounced version of `filterItems`
   - Return the `targetElement`

2. `createSearchInput()`:
   - Create an `<input>` element
   - Set appropriate attributes (type="text", placeholder, etc.)
   - Return the input element

3. `filterItems(searchTerm)`:
   - Convert the search term to lowercase for case-insensitive matching
   - Use `Array.filter()` to create a new array with items that include the search term
   - Return the filtered array

4. `updateList(filteredItems)`:
   - Get a reference to the `<ul>` element
   - Clear the current list items
   - Iterate over the `filteredItems` array
   - Create new `<li>` elements for each item in `filteredItems`
   - Append the new `<li>` elements to the `<ul>`

5. `debounce(func, delay)`:
   - Create a closure that includes a timer variable
   - Return a function that:
     - Clears the existing timer if there is one
     - Sets a new timer that calls the input function after the specified delay

### Step 3: Styling the Filterable List

Create CSS to style your filterable list. Here's a basic example:

```css
.filterable-list-container {
  max-width: 300px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.item-list {
  list-style-type: none;
  padding: 0;
}

.item-list li {
  padding: 5px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
}
```

### Step 4: Testing the Functions

To test your implementation:

1. Create an HTML file with the provided structure and CSS.
2. Implement all functions as described.
3. Use the provided testing code to create the filterable list.
4. Open the HTML file in a web browser and interact with the search input.
5. Type various search terms and verify that the list updates in real-time.
6. Test edge cases, such as empty search terms, search terms that match no items, etc.
7. Verify that the debounce function is working by logging filtered results and checking that the log statements are delayed appropriately.

## Time and Space Complexity

- Time Complexity: O(n) for filtering, where n is the number of items
- Space Complexity: O(n) for storing the list items in the DOM

## Key Takeaways

- Real-time filtering provides an interactive and responsive user experience
- The `input` event is crucial for capturing user input as it happens
- Array methods like `filter` and `map` are powerful tools for data manipulation
- Debouncing is an important technique for optimizing performance in input-heavy operations
- Dynamic DOM updates allow for seamless changes to the user interface

## Notes

In a production environment, consider implementing virtual scrolling for very large lists to improve performance. Also, adding keyboard navigation and proper ARIA attributes would enhance accessibility.

