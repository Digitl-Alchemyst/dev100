document.addEventListener("DOMContentLoaded", () => {
  function addClickListener(selector, callback) {
    // Your code here
    return document.querySelector(selector).addEventListener("click", callback);
  }

  function removeClickListener(selector, callback) {
    // Your code here
    return document
      .querySelector(selector)
      .removeEventListener("click", callback);
  }

  function addHoverListener(selector, enterCallback, leaveCallback) {
    // Your code here
    document
      .querySelector(selector)
      .addEventListener("mouseenter", enterCallback);
    document
      .querySelector(selector)
      .addEventListener("mouseleave", leaveCallback);
  }

  function handleFormSubmit(formSelector, callback) {
    // Your code here
    return document
      .querySelector(formSelector)
      .addEventListener("submit", callback);
  }

  function setupEventDelegation(
    parentSelector,
    childSelector,
    eventType,
    callback
  ) {
    // Your code here
    return document
      .querySelector(parentSelector)
      .addEventListener(eventType, (event) => {
        if (event.target.matches(childSelector)) {
          callback(event);
        }
      });
  }

  addClickListener("#myButton", () => console.log("Button clicked!"));

  addHoverListener(
    "#hoverText",
    () => console.log("Mouse entered!"),
    () => console.log("Mouse left!")
  );

  handleFormSubmit("#myForm", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  });

  setupEventDelegation("#myList", "li", "click", (event) => {
    console.log("Clicked on:", event.target.textContent);
  });
});