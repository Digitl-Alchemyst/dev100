function findMaxElement(arr) {
  // Your code here
}

function removeDuplicates(arr) {
  // Your code here
}


console.log(findMaxElement([3, 7, 1, 7, 8, 3, 9, 2])); // Expected output: 9
console.log(removeDuplicates([3, 7, 1, 7, 8, 3, 9, 2])); // Expected output: [3, 7, 1, 8, 9, 2]

// Additional test cases
console.log(findMaxElement([-1, -5, -2, -8, -3])); // Expected output: -1
console.log(findMaxElement([0.5, 1.5, 1.2, 3.7, 2.1])); // Expected output: 3.7
console.log(findMaxElement([])); // Expected output: undefined or null (depending on implementation)

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // Expected output: [1, 2, 3]
console.log(removeDuplicates([1.5, 1.5, 2.5, 2.5, 3.5])); // Expected output: [1.5, 2.5, 3.5]
console.log(removeDuplicates([])); // Expected output: []