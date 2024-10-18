function createFilterableList(items, targetElement) {
  let filterList = document.createElement("ul");
  filterList.classList.add("searchable-list");
  targetElement.appendChild(filterList);

  const searchInput = createSearchInput();
  targetElement.insertBefore(searchInput, filterList);

//   searchInput.addEventListener("input", (event) => {
//     const searchTerm = event.target.value;
//     const filteredItems = filterItems(items, searchTerm);
//     updateList(filteredItems, filterList);
//   });

  const debouncedFilter = debounce((searchTerm) => {
    const filteredItems = filterItems(items, searchTerm);
    updateList(filteredItems, filterList);
  }, 300);

  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    debouncedFilter(searchTerm);
  });

  updateList(items, filterList);

  return filterList;
}

function createSearchInput() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search...");
  input.classList.add("search-input");
  return input;
}

function filterItems(items, searchTerm) {
  return items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function updateList(filteredItems, filterList) {
  const listItems = filteredItems.map((item) => `<li>${item}</li>`).join("");
  filterList.innerHTML = listItems;
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];
const listContainer = document.getElementById("list-container");

// Create the filterable list
createFilterableList(items, listContainer);

// Log the initial list
console.log("Initial list:", items);

// You'll need to manually test the filtering by typing in the search input

// To test the filterItems function separately:
console.log('Filtered list (searching for "be"):', filterItems("be"));

// To test the debounce function:
const debouncedLog = debounce((text) => console.log("Debounced:", text), 1000);
debouncedLog("Test"); // This should log after a 1-second delay
