function changeElementText(selector, newText) {
  // Your code here
  return document.querySelector(selector).textContent = newText;
}

function changeElementHTML(selector, newHTML) {
  // Your code here
  return document.querySelector(selector).innerHTML = newHTML;
}

function changeElementAttribute(selector, attribute, value) {
  // Your code here
  return document.querySelector(selector).setAttribute(attribute, value);
}

function changeElementStyle(selector, property, value) {
    // Your code here
    return document.querySelector(selector).style[property] = value;
}

console.log(changeElementText(".paragraph", "New text"));
console.log(changeElementHTML(".paragraph", "<h1>New Content</h1>"));
console.log(changeElementStyle(".paragraph", "color", "blue")); 
console.log(changeElementAttribute(".link", "href", "https://example.com"));
