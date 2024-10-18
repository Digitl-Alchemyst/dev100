function createDraggableList(items, targetElement) {
  // Your code here
  const list = document.createElement("ul");
  list.classList.add("draggable-list");
//   list.setAttribute("draggable", "true");
//   list.addEventListener("dragstart", handleDragStart);
//   list.addEventListener("dragover", handleDragOver);
//   list.addEventListener("drop", handleDrop);
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("draggable-item");
    listItem.textContent = item;
    listItem.draggable = true;
    listItem.addEventListener("dragstart", handleDragStart);
    listItem.addEventListener("dragover", handleDragOver);
    listItem.addEventListener("drop", handleDrop);
        listItem.addEventListener("dragenter", handleDragEnter);
        listItem.addEventListener("dragleave", handleDragLeave);
    list.appendChild(listItem);
  });
  targetElement.appendChild(list);
}
let draggedItem = null;

function handleDragStart(e) {
  // Your code here
  draggedItem = e.target;
  e.dataTransfer.setData("text/plain", e.target.textContent);
  e.target.classList.add("draggable-item.dragging");
}

function handleDragOver(e) {
  // Your code here
  e.preventDefault();
}

function handleDragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
function handleDragLeave(e) {
  e.target.classList.remove("drag-over");
}

function handleDrop(e) {
  e.preventDefault();
  const dropTarget = e.target.closest(".draggable-item");

  if (dropTarget && draggedItem !== dropTarget) {
    const list = dropTarget.parentNode;
    const items = Array.from(list.querySelectorAll(".draggable-item"));
    const fromIndex = items.indexOf(draggedItem);
    const toIndex = items.indexOf(dropTarget);

    if (fromIndex < toIndex) {
      list.insertBefore(draggedItem, dropTarget.nextSibling);
    } else {
      list.insertBefore(draggedItem, dropTarget);
    }
  }

  if (draggedItem) {
    draggedItem.classList.remove("dragging");
      e.target.classList.remove("drag-over");
  }
  draggedItem = null;
  updateListOrder();
}


function updateListOrder() {
  // Your code here
  const listItems = Array.from(listContainer.querySelectorAll("li"));
  const newOrder = listItems.map((li) => li.textContent);
  console.log("New order:", newOrder);

}

const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const listContainer = document.getElementById("list-container");

// Create the draggable list
createDraggableList(items, listContainer);

// Log the initial order
console.log(
  "Initial order:",
  Array.from(listContainer.querySelectorAll("li")).map((li) => li.textContent)
);

// You'll need to manually test the drag and drop functionality in the browser

// After dragging and dropping, you can log the new order
function logNewOrder() {
  console.log(
    "New order:",
    Array.from(listContainer.querySelectorAll("li")).map((li) => li.textContent)
  );
}

// Add a button to trigger logging the new order
const logButton = document.createElement("button");
logButton.textContent = "Log Current Order";
logButton.onclick = logNewOrder;
document.body.appendChild(logButton);
