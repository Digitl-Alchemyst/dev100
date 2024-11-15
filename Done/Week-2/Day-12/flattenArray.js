const arr = [
  'hello',
  [true, false, ['yes', 'no']],
  ['world', [undefined, null]],
];

function* flattenArray(arr, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield* flattenArray(item, depth - 1);
    } else {
      yield item;
    }
  }
}
// Create a generator
const flattenedArrayGenerator = flattenArray(arr, Infinity);

// Consume the generator to collect the results
let flattenedArray = [];
for (let item of flattenedArrayGenerator) {
  flattenedArray.push(item);
}

// Log the flattened array
console.log(flattenedArray);
