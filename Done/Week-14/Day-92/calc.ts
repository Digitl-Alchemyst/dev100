enum Operation {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

const calculate = (operation: Operation, a: number, b: number): number => {
  // Check if the inputs are a number
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("NaN: Input is not a number!");
  }

  // TODO: Handle division by zero case
  if (operation === Operation.Divide && b === 0) {
    throw new Error(
      "So far, none have been successful. Instead, any number divided by zero is undefined. In fact, even zero divided by zero is undefined!"
    );
  }

  let result: number;
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
      result = a / b;
      break;
    default:
      throw new Error("Invalid operation");
  }

  // TODO: Return result with proper type checking
  if (typeof result !== "number") {
    throw new Error("NaN: Result is not a number!");
  }
  return result;
};

// Test cases
try {
  console.log(calculate(Operation.Add, 5, 3)); // Expected: 8
  console.log(calculate(Operation.Subtract, 10, 4)); // Expected: 6
  console.log(calculate(Operation.Multiply, 3, 5)); // Expected: 15
  console.log(calculate(Operation.Divide, 20, 4)); // Expected: 5
  // This will throw an error:
  console.log(calculate(Operation.Divide, 20, 0));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('An unknown error occurred');
  }
}