var Operation;
(function (Operation) {
    Operation["Add"] = "add";
    Operation["Subtract"] = "subtract";
    Operation["Multiply"] = "multiply";
    Operation["Divide"] = "divide";
})(Operation || (Operation = {}));
var calculate = function (operation, a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("NaN: Input is not a number!");
    }
    var result;
    // TODO: Implement type-safe arithmetic operations
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            // TODO: Handle division by zero case
            if (b === 0) {
                throw new Error("So far, none have been successful. Instead, any number divided by zero is undefined. In fact, even zero divided by zero is undefined!");
            }
            result = a / b;
            break;
        default:
            throw new Error("Invalid operation");
    }
    // TODO: Return result with proper type checking
    if (typeof result !== "number") {
        throw new Error("Invalid result is not a number: NaN");
    }
    return result;
};
// Test cases
console.log(calculate(Operation.Add, 5, 3)); // Expected: 8
console.log(calculate(Operation.Subtract, 10, 4)); // Expected: 6
console.log(calculate(Operation.Multiply, 3, 5)); // Expected: 15
console.log(calculate(Operation.Divide, 20, 4)); // Expected: 5
// This will throw an error:
// console.log(calculate(Operation.Divide, 20, 0));
