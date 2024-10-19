function selectFruits(fruits, start, end) {
  // Your code here
  return fruits.slice(start,end)
}

function modifyFruits(fruits, startIndex, itemsToRemove, ...itemsToAdd) {
  // Your code here
  return fruits.splice(startIndex, itemsToRemove, ...itemsToAdd);
}


const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

console.log(selectFruits(fruits, 1, 4)); // Output: ["banana", "cherry", "date"]

const removed = modifyFruits(fruits, 2, 1, "grape", "kiwi"); 
console.log("Removed:", removed); // Output: ["cherry"]
console.log("Modified fruits:", fruits); // Output: ["apple", "banana", "grape", "kiwi", "date", "elderberry", "fig"]