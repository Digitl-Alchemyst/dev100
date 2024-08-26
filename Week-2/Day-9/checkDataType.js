

function getDataType(data) {
    let isArray = Array.isArray(data);
    if (isArray) {
        return "array";
    } else {
        let type = typeof data;
        return type;
    }
}

console.log(getDataType(5)); // Should print "number"
console.log(getDataType("Hello")); // Should print "string"
console.log(getDataType(true)); // Should print "boolean"
console.log(getDataType(null)); // Should print "object"
console.log(getDataType(undefined)); // Should print "undefined"
console.log(getDataType([1, 2, 3])); // Should print "object"
console.log(getDataType({ name: "John", age: 30 })); // Should print "object"
console.log(getDataType(Symbol("foo"))); // Should print "symbol"
console.log(getDataType(BigInt(12345678901234567890))); // Should print "bigint"        
