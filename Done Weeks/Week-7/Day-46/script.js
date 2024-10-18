document.addEventListener('DOMContentLoaded', () => {
  // Function to create an element with text content
  function createElementWithText(tagName, text) {
    const element = document.createElement(tagName);
    element.textContent = text;
    return element;
  }

  // Function to append multiple children to a parent element
  function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
    return parent;
  }

  // Function to create an unordered list from an array of items
  function createList(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    return ul;
  }

  // Function to create a table from an array of objects
  function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    if (data.length > 0) {
      const headerRow = document.createElement('tr');
      Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
    }

    // Create table body
    data.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
  }

  // Function to create a searchable list
  function createSearchableList(items, targetElement) {
    const container = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search...';
    const list = createList(items);

    input.addEventListener('input', () => {
      const searchTerm = input.value.toLowerCase();
      Array.from(list.children).forEach(li => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });

    container.appendChild(input);
    container.appendChild(list);
    targetElement.appendChild(container);
  }

  const content = document.getElementById("content");

  // Example usage of functions
  const paragraph = createElementWithText("p", "This is a new paragraph.");
  content.appendChild(paragraph);

  const parent = document.createElement("div");
  const children = [
    createElementWithText("span", "Child 1"),
    createElementWithText("span", "Child 2"),
  ];
  appendChildren(parent, children);
  content.appendChild(parent);

  const fruitList = createList(["Apple", "Banana", "Cherry"]);
  content.appendChild(fruitList);

  const tableData = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "San Francisco" },
    { name: "Bob", age: 35, city: "Chicago" },
  ];
  const table = createTable(tableData);
  content.appendChild(table);

  createSearchableList(["Red", "Green", "Blue", "Yellow"], content);
})