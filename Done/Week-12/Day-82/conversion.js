const arrayObjectConversions = () => {
  // TODO: Implement various type conversion methods
      const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
      const testObj = { name: "John", age: 30 };
      const testArray = ["a", "b", "c"];
      const testString = "hello";
return {
  arrayToString: {
    joining: testArray.join(""),
    spreading: [...testArray].join(""),
    toString: testArray.toString(),
  },
  stringToArray: {
    splitting: testString.split(""),
    spreading: [...testString],
    from: Array.from(testString),
  },
  objectToArray: {
    keys: Object.keys(testObj),
    values: Object.values(testObj),
    entries: Object.entries(testObj),
  },
  arrayLikeToArray: {
    from: Array.from(arrayLike),
    spread: [...Array.from(arrayLike)],
    slice: Array.prototype.slice.call(arrayLike),
  },
  jsonConversions: {
    stringified: JSON.stringify(testObj),
    parsed: JSON.parse(JSON.stringify(testObj)),
  },
};

};


const result = arrayObjectConversions();
console.log("Array to String:", result.arrayToString);
console.log("String to Array:", result.stringToArray);
console.log("Object to Array:", result.objectToArray);
console.log("Array-like to Array:", result.arrayLikeToArray);
console.log("JSON Conversions:", result.jsonConversions);
