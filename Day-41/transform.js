const input = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    coordinates: {
      lat: 40.7128,
      long: -74.006,
    },
  },
  hobbies: ["reading", "cycling"],
  metadata: {
    lastUpdated: "2023-04-01",
    version: 2,
  },
};

const options = {
  filterPredicate: (key, value) => key !== "metadata",
  transformRules: {
    string: (s) => s.toUpperCase(),
    number: (n) => n * 2,
  },
  maxDepth: 2,
  keyMap: {
    name: "fullName",
    address: "location",
  },
};

function transformObject(obj, options = {}) {
  // Your code here

  const {
    filterPredicate = () => true,
    transformRules = {},
    maxDepth = Infinity,
    keyMap = {},
  } = options;

  const applyTransformRule = (value) => {
    const type = typeof value;
    return transformRules[type] ? transformRules[type](value) : value;
  };

  function transform(item, currentDepth = 0) {
    // Base case: if item is not an object or array, or we've reached max depth, return the item
    if (typeof item !== "object" || item === null || currentDepth >= maxDepth) {
      return applyTransformRule(item);
    }

    // If item is an array, map over its elements
    if (Array.isArray(item)) {
      return item.map((element) => transform(element, currentDepth + 1));
    }

    // For objects, we'll transform key-value pairs
    const transformedObj = {};

    for (let key in item) {
       const value = item[key]; // Get the value from the object
      // Apply filter
      if (!filterPredicate(key, value)) continue;
      // Apply key mapping
      const newKey = keyMap[key] || key;
     // Recursively transform the value and apply transformation rules
      const transformedValue = transform(value, currentDepth + 1);


      // Add the transformed key-value pair to the new object
      transformedObj[newKey] = transform(value, currentDepth + 1);
    }
        return transformedObj;

  }
  return transform(obj);
}

const result = transformObject(input, options);
console.log(result);
