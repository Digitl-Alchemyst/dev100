# Code Challenge: Advanced Data Extraction with Destructuring

## Problem Statement

Modern JavaScript applications often work with complex nested data structures. Destructuring is a powerful feature that allows developers to extract values from objects and arrays in a clean and readable way. This challenge focuses on using both object and array destructuring to efficiently extract data from a nested company structure.

This challenge introduces fundamental concepts of destructuring in JavaScript, teaching you how to handle nested objects and arrays efficiently. This skill is particularly valuable when working with API responses, configuration objects, and complex data structures in real-world applications.

## Function Signature

```javascript
const extractCompanyInfo = (companyData) => {
    // TODO: Return an object containing:
    // - basics: company name and city
    // - departments: object with first and remaining departments
    // - ceo: name of the CEO
    return {
        basics: {},
        departments: {},
        ceo: ''
    };
};
```

## Input

- `companyData`: An object containing:
  - Basic company information
  - Nested location object
  - Array of departments
  - Array of founder objects

## Output

An object containing:
- `basics`: Object with company name and city
- `departments`: Object with firstDept and remainingDepts
- `ceo`: String (CEO's name)

## Example

### Input:
```javascript
const company = {
    name: "Tech Corp",
    location: {
        city: "San Francisco",
        country: "USA"
    },
    departments: ["Engineering", "Marketing", "Sales"],
    founders: [
        { name: "Jane Smith", role: "CEO" },
        { name: "Mike Johnson", role: "CTO" }
    ]
};
```

### Output:
```javascript
{
    basics: {
        name: "Tech Corp",
        city: "San Francisco"
    },
    departments: {
        firstDept: "Engineering",
        remainingDepts: ["Marketing", "Sales"]
    },
    ceo: "Jane Smith"
}
```

## Constraints

- The company object must have all required properties
- The departments array must contain at least one department
- The founders array must contain at least two founders
- The CEO must be the first founder in the array

## Testing the Script

```javascript
const company = {
    name: "Tech Corp",
    location: {
        city: "San Francisco",
        country: "USA"
    },
    departments: ["Engineering", "Marketing", "Sales"],
    founders: [
        { name: "Jane Smith", role: "CEO" },
        { name: "Mike Johnson", role: "CTO" }
    ]
};

console.log(extractCompanyInfo(company));
```

## Bonus Challenge

1. Add error handling for missing properties
2. Extract additional nested information (e.g., all founder roles)
3. Implement default values for optional properties

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Destructuring allows us to unpack values from arrays or properties from objects into distinct variables. Key concepts to understand:

1. Object Destructuring: Extract properties using `{ }` syntax
2. Array Destructuring: Extract elements using `[ ]` syntax
3. Nested Destructuring: Combining both for deeper structures
4. Rest Parameters: Collecting remaining elements using `...`

### Step 2: Implementing the Functions

Method 1: Using Single-Line Destructuring
```javascript
const extractCompanyInfo = (companyData) => {
    const {
        name,
        location: { city },
        departments: [firstDept, ...remainingDepts],
        founders: [{ name: ceoName }]
    } = companyData;

    return {
        basics: { name, city },
        departments: { firstDept, remainingDepts },
        ceo: ceoName
    };
};
```

Method 2: Using Step-by-Step Destructuring
```javascript
const extractCompanyInfo = (companyData) => {
    // Basic company info
    const { name, location, departments, founders } = companyData;
    const { city } = location;

    // Departments
    const [firstDept, ...remainingDepts] = departments;

    // CEO info
    const [{ name: ceoName }] = founders;

    return {
        basics: { name, city },
        departments: { firstDept, remainingDepts },
        ceo: ceoName
    };
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Complete company data test:
   - Input: The company object shown above
   - Expected Output: Complete extracted information

2. Minimal data test:
   - Input: Company with one department and two founders
   - Expected Output: Correctly extracted data with empty remainingDepts array

3. Error handling test (for bonus):
   - Input: Company with missing properties
   - Expected Output: Appropriate error message or default values

## Time and Space Complexity

- Time Complexity: O(1) for destructuring operations
- Space Complexity: O(n) where n is the size of the extracted data

The complexity is constant for the destructuring operation itself, but space complexity depends on the size of the arrays being copied.

## References

- [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Related Problems

- API Response Handling: Extracting specific data from API responses
- Configuration Object Processing: Working with complex config objects
- Data Transformation: Converting between different data formats

## Key Takeaways

- Destructuring provides a clean way to extract data from complex structures
- Combining object and array destructuring enables powerful data extraction
- Understanding nested destructuring patterns
- Using rest parameters to collect remaining elements
- Real-world applications in data processing and API handling

## Notes

- Consider using default values when destructuring optional properties
- Remember that destructuring can make code more readable but don't overuse it
- Be careful with deep destructuring as it can make code harder to maintain
- This pattern is commonly used in modern JavaScript frameworks and libraries
