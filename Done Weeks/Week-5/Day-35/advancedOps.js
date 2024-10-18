
function deepArrayComparison(arr1, arr2) {
  // Your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return arr1 === arr2;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!deepArrayComparison(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }    
  return true
}

function flattenNestedArray(arr) {
    return arr.flat(Infinity);
}

let nestedArr = [1, [2, [3, 4]], 5];

let arr1 = [1, [2, [3, 4]], 6];
let arr2 = [1, [2, [3, 4]], 5];
let arr3 = [1, [2, [3, 4]], 5];

console.log("🎯 1: arr1 =? arr2 (not equal):", deepArrayComparison(arr1, arr2));
console.log("🎯 2: arr2 =? arr3 (equal):", deepArrayComparison(arr2, arr3));

console.log(
  "🎯 3: Deep comparison (equal):",
  deepArrayComparison(
    [1, [2, [3, 4]], 6], 
    [1, [2, [3, 4]], 6]
)
);
console.log(
  "🎯 4: Deep comparison (not equal):",
  deepArrayComparison((
    [1, [2, [3]]], 
    [1, [2, [4]]]
)))

console.log("🚚: Flattened array:", flattenNestedArray(nestedArr));
