let unsortedArray = [5, 2, 8, 1, 9];
let sortedArray = sortArray(unsortedArray);


function sortArray(arr) {
    // Your code here
    let n = arr.length;
    let swapped;
      for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for ( let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //implment the bubble swap
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;            
            }
        }
        //Break if no two elements were swapped by the inner loop
        if (swapped == false ) {
            break;
        }
      }
return arr;
}

function binarySearch(arr, target) {
  // Your code here
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log("Sorted array:", sortedArray);
console.log("Binary search for 5:", binarySearch(sortedArray, 5));
console.log("Binary search for 3:", binarySearch(sortedArray, 3));

// Additional test cases
// console.log(sortArray([])); // Expected: []
// console.log(sortArray([1])); // Expected: [1]
// console.log(sortArray([3, 3, 1, 2, 2])); // Expected: [1, 2, 2, 3, 3]
// console.log(sortArray([342, 15, 478, 201, 99, 33, 187, 456, 72, 299, 123, 411, 55, 267, 389, 144, 502, 8, 231, 176])); // Expected: [8, 15, 33, 55, 72, 99, 123, 144, 176, 187, 201, 231, 267, 299, 342, 389, 411, 456, 478, 502]
// console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Expected: 0
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // Expected: 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Expected: -1