function deepCopy(obj, seen = new Map()) {
  // Check if the input is null or not an object and return the input as is if it is not a valid object
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Check if the object has already been seen
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Create a new object or array based on the type of the input object
  const newObj = Array.isArray(obj) ? [] : {};
  seen.set(obj, newObj);

  // Iterate over each property of the input object
  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      // Recursively call deepCopy on each property of the input object
      newObj[key] = deepCopy(obj[key], seen);
    }
  }

  // Return the new object or array
  return newObj;
}

// Test 1: Simple object with nested objects and arrays
const original1 = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy1 = deepCopy(original1);
const clone1 = structuredClone(original1);
original1.a = 5;
console.log('Test 1 - Original:', original1); // Should print { a: 5, b: { c: 2 }, d: [3, 4] }
console.log('Test 1 - Copy:', copy1); // Should print { a: 1, b: { c: 2 }, d: [3, 4] }
console.log('Test 1 - Clone:', clone1); // Should print { a: 1, b: { c: 2 }, d: [3, 4] }

// Test 2: Object with nested arrays and objects
const original2 = { x: [1, 2, { y: 'yes' }], z: { w: 'no' } };
const copy2 = deepCopy(original2);
const clone2 = structuredClone(original2);
original2.z.w = 'maybe';
console.log('Test 2 - Original:', original2); // Should print { x: [1, 2, { y: "yes" }], z: { w: "maybe" } }
console.log('Test 2 - Copy:', copy2); // Should print { x: [1, 2, { y: "yes" }], z: { w: "no" } }
console.log('Test 2 - Clone:', clone2); // Should print { x: [1, 2, { y: "yes" }], z: { w: "no" } }

// Test 3: Object with various primitive types
const original3 = {
  num: 1,
  str: 'hello',
  bool: true,
  arr: [1, 2],
  obj: { key: 'value' },
};
const copy3 = deepCopy(original3);
const clone3 = structuredClone(original3);
original3.bool = false;
console.log('Test 3 - Original:', original3); // Should print { num: 1, str: "hello", bool: false, arr: [1, 2], obj: { key: "value" } }
console.log('Test 3 - Copy:', copy3); // Should print { num: 1, str: "hello", bool: true, arr: [1, 2], obj: { key: "value" } }
console.log('Test 3 - Clone:', clone3); // Should print { num: 1, str: "hello", bool: true, arr: [1, 2], obj: { key: "value" } }

// Test 4: Deeply nested object
const original4 = { level1: { level2: { level3: { level4: 'deep' } } } };
const copy4 = deepCopy(original4);
const clone4 = structuredClone(original4);
original4.level1.level2.level3.level4 = { level5: 'deep' };
console.log('Test 4 - Original:', original4); // Should print { level1: { level2: { level3: { level4: { level5: "deep" } } } } }
console.log('Test 4 - Copy:', copy4); // Should print { level1: { level2: { level3: { level4: "deep" } } } }
console.log('Test 4 - Clone:', clone4); // Should print { level1: { level2: { level3: { level4: "deep" } } } }

// Test 5: Circular reference (will not be handled by a simple deep copy)
const circular = { a: 1 };
circular.self = circular;
const copy5 = deepCopy(circular);
const clone5 = structuredClone(circular);
console.log('Test 5 - Original:', circular); // Should print an object with a circular reference
console.log('Test 5 - Copy:', copy5); // Should print an object with a circular reference or throw an error if circular references are not handled
console.log('Test 5 - Clone:', clone5); // Should print an object with a circular reference or throw an error if circular references are not handled
