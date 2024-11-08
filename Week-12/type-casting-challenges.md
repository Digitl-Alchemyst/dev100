// Week 12: Type Casting - Conversion, Coercion, Implicit, Explicit


Day 1: Number Conversions

Explores different methods of converting values to numbers
Covers Number(), parseInt(), parseFloat(), and operators
Handles edge cases and special values

// Day 1: Number Conversions
// Challenge: Explore different ways to convert values to numbers
function numberConversions(value) {
    // TODO: Convert the input value to a number using different methods
    // 1. Using Number()
    // 2. Using parseInt()
    // 3. Using parseFloat()
    // 4. Using the unary plus operator (+)
    // 5. Using multiplication by 1

    return {
        usingNumber: null,
        usingParseInt: null,
        usingParseFloat: null,
        usingUnaryPlus: null,
        usingMultiplication: null
    };
}

// Test cases
console.log(numberConversions("123")); // All should be 123
console.log(numberConversions("12.34")); // Some should be 12, others 12.34
console.log(numberConversions("12px")); // Some should be 12, others NaN
console.log(numberConversions(true)); // All should be 1
console.log(numberConversions([])); // Some should be 0, others NaN



Day 2: String Conversions

Implements various string conversion methods
Covers String(), toString(), template literals
Handles null, undefined, and complex objects

// Day 2: String Conversions
// Challenge: Implement string conversion utilities
function stringConversions(value) {
    // TODO: Convert the input value to a string using different methods
    // 1. Using String()
    // 2. Using toString()
    // 3. Using template literals
    // 4. Using concatenation with empty string
    // Handle edge cases like null, undefined, and objects

    return {
        usingString: null,
        usingToString: null,
        usingTemplate: null,
        usingConcatenation: null
    };
}

// Test cases
console.log(stringConversions(123));
console.log(stringConversions(null));
console.log(stringConversions(undefined));
console.log(stringConversions({ name: "John" }));
console.log(stringConversions([1, 2, 3]));



Day 3: Boolean Conversions

Explores truthy/falsy values
Implements different boolean conversion methods
Covers edge cases and custom boolean logic


Day 4: Type Coercion

Demonstrates implicit type conversion
Covers arithmetic operations
Explores comparison operators


Day 5: Array and Object Conversions

Converts between complex data types
Handles array-like objects
Implements JSON conversions


Day 6: Date and Number Formatting

Works with date conversions
Implements number formatting
Handles locale-specific conversions


Day 7: Real-world Application

Builds a comprehensive data validator
Implements type checking and conversion
Handles complex nested structures






// Day 3: Boolean Conversions and Truthy/Falsy Values
// Challenge: Explore boolean conversions and truthy/falsy concepts
function booleanConversions(value) {
    // TODO: 
    // 1. Convert value to boolean using Boolean()
    // 2. Convert value using !!
    // 3. Check if value is truthy
    // 4. Implement a custom isTrue() function that checks for specific true values
    
    return {
        usingBoolean: null,
        usingDoubleNot: null,
        isTruthy: null,
        isTrue: null
    };
}

// Test cases
const testValues = [
    "", 0, null, undefined, NaN, false, // falsy values
    "hello", 1, [], {}, true, new Date() // truthy values
];

testValues.forEach(value => {
    console.log(`Testing ${String(value)}: `, booleanConversions(value));
});

// Day 4: Type Coercion in Operations
// Challenge: Understanding implicit type coercion
function exploreCoercion() {
    // TODO: Demonstrate different types of coercion
    // 1. Addition vs concatenation
    // 2. Subtraction and other mathematical operations
    // 3. Comparison operators (== vs ===)
    // 4. Logical operators (&& and ||)
    
    return {
        additionResults: null,
        subtractionResults: null,
        comparisonResults: null,
        logicalResults: null
    };
}

// Test cases
console.log(exploreCoercion());

// Day 5: Array and Object Type Conversions
// Challenge: Convert between arrays, objects, and primitive types
function arrayObjectConversions() {
    // TODO:
    // 1. Convert array to string and back
    // 2. Convert object to array
    // 3. Convert array-like object to array
    // 4. Convert string to array of characters
    // 5. Handle JSON conversions

    const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
    const testObj = { name: "John", age: 30 };
    
    return {
        arrayToString: null,
        stringToArray: null,
        objectToArray: null,
        arrayLikeToArray: null,
        jsonConversions: null
    };
}

// Test cases
console.log(arrayObjectConversions());

// Day 6: Date and Number Format Conversions
// Challenge: Work with date and number format conversions
function dateNumberFormatting() {
    // TODO:
    // 1. Convert string to date
    // 2. Format date to string
    // 3. Convert numbers to currency
    // 4. Handle different number formats (decimal, percentage)
    // 5. Work with different locale formats

    const testDate = new Date();
    const testNumber = 1234567.89;

    return {
        dateFromString: null,
        dateToString: null,
        numberToCurrency: null,
        numberToPercentage: null,
        localeFormats: null
    };
}

// Test cases
console.log(dateNumberFormatting());

// Day 7: Real-world Application
// Challenge: Build a Data Validator and Transformer
class DataValidator {
    constructor(schema) {
        this.schema = schema;
    }

    // TODO:
    // 1. Implement type checking and conversion
    // 2. Handle nested object validation
    // 3. Implement array validation
    // 4. Add custom validation rules
    // 5. Provide detailed error messages

    validate(data) {
        // Your implementation here
        return {
            isValid: false,
            convertedData: null,
            errors: []
        };
    }

    transform(data) {
        // Your implementation here
        return {
            transformed: false,
            result: null
        };
    }
}

// Test the DataValidator
const schema = {
    name: { type: 'string', required: true },
    age: { type: 'number', min: 0, max: 120 },
    email: { type: 'string', pattern: 'email' },
    preferences: { type: 'array', itemType: 'string' },
    metadata: { type: 'object', properties: {
        lastLogin: { type: 'date' },
        visits: { type: 'number' }
    }}
};

const testData = {
    name: 123,
    age: "25",
    email: "test@example.com",
    preferences: ["1", 2, true],
    metadata: {
        lastLogin: "2023-04-01",
        visits: "15"
    }
};

const validator = new DataValidator(schema);
console.log(validator.validate(testData));
console.log(validator.transform(testData));
