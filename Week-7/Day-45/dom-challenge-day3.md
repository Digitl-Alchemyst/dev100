# Code Challenge: Event Handling

## Problem Statement

In this challenge, you'll practice adding and removing event listeners to DOM elements. Your task is to implement functions that handle various events and demonstrate event delegation.

This challenge builds upon the element selection and manipulation skills from Days 1 and 2, introducing the crucial concept of event handling. Understanding how to work with events is essential for creating interactive web applications.

## Function Signature

```javascript
function addClickListener(selector, callback) {
    // Your code here
}

function removeClickListener(selector, callback) {
    // Your code here
}

function addHoverListener(selector, enterCallback, leaveCallback) {
    // Your code here
}

function handleFormSubmit(formSelector, callback) {
    // Your code here
}

function setupEventDelegation(parentSelector, childSelector, eventType, callback) {
    // Your code here
}
```

## Input

- `selector`: A string representing a CSS selector for the element(s) to attach the event listener to.
- `callback`: A function to be executed when the event occurs.
- `enterCallback`: A function to be executed when the mouse enters the element.
- `leaveCallback`: A function to be executed when the mouse leaves the element.
- `formSelector`: A string representing a CSS selector for the form element.
- `parentSelector`: A string representing a CSS selector for the parent element in event delegation.
- `childSelector`: A string representing a CSS selector for the child elements in event delegation.
- `eventType`: A string representing the type of event to listen for in event delegation.

## Output

Each function should return undefined. The effects of these functions will be observed through the behavior of the web page when events occur.

## Example

### HTML Structure:

```html
<div id="container">
    <button id="myButton">Click me</button>
    <p id="hoverText">Hover over me</p>
    <form id="myForm">
        <input type="text" name="username">
        <button type="submit">Submit</button>
    </form>
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
```

### JavaScript:

```javascript
addClickListener('#myButton', () => console.log('Button clicked!'));

addHoverListener('#hoverText', 
    () => console.log('Mouse entered!'), 
    () => console.log('Mouse left!')
);

handleFormSubmit('#myForm', (event) => {
    event.preventDefault();
    console.log('Form submitted!');
});

setupEventDelegation('#myList', 'li', 'click', (event) => {
    console.log('Clicked on:', event.target.textContent);
});
```

## Constraints

- Use `addEventListener` and `removeEventListener` for managing event listeners.
- Ensure your functions work for both single elements and multiple elements (when applicable).
- For the form submission, make sure to prevent the default form submission behavior.
- In the event delegation function, ensure that the event only triggers for the specified child elements.

## Testing the Script

To test your implementation, you can use the following code:

```javascript
addClickListener('#myButton', () => console.log('Button clicked!'));

const hoverEnter = () => console.log('Mouse entered!');
const hoverLeave = () => console.log('Mouse left!');
addHoverListener('#hoverText', hoverEnter, hoverLeave);

handleFormSubmit('#myForm', (event) => {
    event.preventDefault();
    console.log('Form submitted!');
});

setupEventDelegation('#myList', 'li', 'click', (event) => {
    console.log('Clicked on:', event.target.textContent);
});

// Test removing event listener
setTimeout(() => {
    console.log('Removing click listener from button');
    removeClickListener('#myButton', () => console.log('Button clicked!'));
}, 5000);
```

Make sure to have an HTML file with the structure mentioned in the example, and link your JavaScript file to it.

## Bonus Challenge

Implement a function `createCustomEvent(eventName, detail)` that creates and dispatches a custom event. Then, implement a function `listenForCustomEvent(selector, eventName, callback)` that listens for this custom event on the specified element(s).

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on four main aspects of event handling:

1. Adding and removing click event listeners
2. Handling hover events (mouseenter and mouseleave)
3. Managing form submissions
4. Implementing event delegation

Event handling is crucial for creating interactive web applications. It allows you to respond to user actions and create dynamic behavior on your web pages.

### Step 2: Implementing the Functions

Let's break down each function:

1. `addClickListener(selector, callback)`:
   ```javascript
   function addClickListener(selector, callback) {
       const elements = document.querySelectorAll(selector);
       elements.forEach(el => el.addEventListener('click', callback));
   }
   ```
   This function adds a click event listener to the selected element(s).

2. `removeClickListener(selector, callback)`:
   ```javascript
   function removeClickListener(selector, callback) {
       const elements = document.querySelectorAll(selector);
       elements.forEach(el => el.removeEventListener('click', callback));
   }
   ```
   This function removes a previously added click event listener from the selected element(s).

3. `addHoverListener(selector, enterCallback, leaveCallback)`:
   ```javascript
   function addHoverListener(selector, enterCallback, leaveCallback) {
       const elements = document.querySelectorAll(selector);
       elements.forEach(el => {
           el.addEventListener('mouseenter', enterCallback);
           el.addEventListener('mouseleave', leaveCallback);
       });
   }
   ```
   This function adds mouseenter and mouseleave event listeners to handle hover effects.

4. `handleFormSubmit(formSelector, callback)`:
   ```javascript
   function handleFormSubmit(formSelector, callback) {
       const form = document.querySelector(formSelector);
       form.addEventListener('submit', callback);
   }
   ```
   This function adds a submit event listener to the specified form.

5. `setupEventDelegation(parentSelector, childSelector, eventType, callback)`:
   ```javascript
   function setupEventDelegation(parentSelector, childSelector, eventType, callback) {
       const parent = document.querySelector(parentSelector);
       parent.addEventListener(eventType, (event) => {
           if (event.target.matches(childSelector)) {
               callback(event);
           }
       });
   }
   ```
   This function sets up event delegation, allowing you to handle events on dynamically added elements.

### Step 3: Testing the Functions

To test these functions, you'll need an HTML file with elements that match the selectors you're using. Here's a complete example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling Test</title>
</head>
<body>
    <div id="container">
        <button id="myButton">Click me</button>
        <p id="hoverText">Hover over me</p>
        <form id="myForm">
            <input type="text" name="username">
            <button type="submit">Submit</button>
        </form>
        <ul id="myList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>

    <script>
        // Your JavaScript functions here

        // Test cases
        addClickListener('#myButton', () => console.log('Button clicked!'));

        const hoverEnter = () => console.log('Mouse entered!');
        const hoverLeave = () => console.log('Mouse left!');
        addHoverListener('#hoverText', hoverEnter, hoverLeave);

        handleFormSubmit('#myForm', (event) => {
            event.preventDefault();
            console.log('Form submitted!');
        });

        setupEventDelegation('#myList', 'li', 'click', (event) => {
            console.log('Clicked on:', event.target.textContent);
        });

        // Test removing event listener
        setTimeout(() => {
            console.log('Removing click listener from button');
            removeClickListener('#myButton', () => console.log('Button clicked!'));
        }, 5000);
    </script>
</body>
</html>
```

**Test Cases**

1. Test Case 1: Click the button and observe the console output.
2. Test Case 2: Hover over the text and observe the console output for mouseenter and mouseleave events.
3. Test Case 3: Submit the form and observe the console output. The page should not reload.
4. Test Case 4: Click on list items and observe the console output.
5. Test Case 5: After 5 seconds, click the button again and observe that no console output occurs.

## Time and Space Complexity

- Time Complexity: O(n) for functions that query multiple elements, O(1) for functions that query a single element.
- Space Complexity: O(1) for all functions, as they don't store any significant amount of data.

The time complexity is O(n) for functions like `addClickListener` because they need to iterate over all matched elements. For functions like `handleFormSubmit` that only work with a single element, the complexity is O(1).

## References

- [MDN Web Docs: addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- [MDN Web Docs: Event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

## Related Problems

- Implementing a custom event system
- Creating a simple todo list application using event handling
- Building a form validation system using event listeners

## Key Takeaways

- Event listeners allow you to create interactive and responsive web applications.
- The `addEventListener` method is used to attach event handlers to elements.
- Event delegation is a powerful technique for handling events on dynamically created elements.
- Always remember to prevent default form submission when handling form submit events programmatically.
- Removing event listeners when they're no longer needed can help improve performance and prevent memory leaks.

## Notes

- When adding event listeners, be mindful of performance. For large numbers of elements, consider using event delegation instead of attaching individual listeners.
- The `this` keyword inside event listener callbacks refers to the element that triggered the event, which can be useful in some scenarios.
- Event objects contain useful information about the event, such as the target element, event type, and any associated data.
