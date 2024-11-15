function rotateArray(arr, k) {
  // Your code here

  if (k > arr.length) {
    k = k % arr.length;
  }

  if (k < 0) {
    k = arr.length + k;
  }

  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

function rotateInPlace(arr, k) {
  const n = arr.length;
  k = k % n; // Ensure k is within bounds

  // if (k === 0) return arr; // No rotation needed if k is 0

    if (k < 0) {
      k = arr.length + k;
    }

  let count = 0;

  for (let start = 0; count < n; start++) {
    let current = start;
    let prev = arr[start];

    do {
      let next = (current + k) % n;
      let temp = arr[next];
      arr[next] = prev
      prev = temp
      current = next
      count++
    } while (start !== current)
  }
  return arr
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// console.log("Rotated array:", rotateInPlace(arr1, 2));
// console.log("Rotated array (k > length):", rotateInPlace(arr1, 7));
// console.log("Rotated array2 (k = 3):", rotateInPlace(arr2, 3));
// console.log("Rotated array2 (k = -3):", rotateInPlace(arr2, -3));
// console.log("Rotated array2 (k > length):", rotateInPlace(arr2, 16));


function longestIncreasingSubsequence(arr) {
  // Your code here
  let ls = new Array(arr.length).fill(1);
  let maxLength = 1;

  for ( let i = 1; i < arr.length; i++) {
    for ( let j  = 0; j < i; j++) {
      if (arr[i] > arr[j] ) {
        ls[i] = Math.max(ls[i], ls[j] + 1);
      }
    }
    maxLength = Math.max(maxLength, ls[i]);
  }
  return maxLength
}

console.log(
  "LIS of sorted array:",
  longestIncreasingSubsequence([1, 2, 3, 4, 5])
);
console.log(
  "LIS of reverse sorted array:",
  longestIncreasingSubsequence([5, 4, 3, 2, 1])
);

let arr3 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(
  "Longest increasing subsequence length:",
  longestIncreasingSubsequence(arr3)
);