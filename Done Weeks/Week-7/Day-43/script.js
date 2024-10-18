// Select elements by their IDs, classes, and tags
function selectElementById(id) {
  return document.getElementById(id);
}

function selectElementsByClassName(className) {
  return document.getElementsByClassName(className);
}

function selectElementsByTagName(tagName) {
  return document.getElementsByTagName(tagName);
}

function selectElementByQuerySelector(selector) {
  return document.querySelector(selector);
}

function selectElementsByQuerySelectorAll(selector) {
  return document.querySelectorAll(selector);
}

console.log(selectElementById("main")); // Should return the div element
console.log(selectElementsByClassName("text")); // Should return HTMLCollection with two p elements
console.log(selectElementsByTagName("p")); // Should return HTMLCollection with two p elements
console.log(selectElementByQuerySelector(".highlight")); // Should return the span element
console.log(selectElementsByQuerySelectorAll(".highlight")); // Should return an array of span elements
