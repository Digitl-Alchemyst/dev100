# Code Challenge: Object Creation and Basic Operations

## Problem Statement

Implement three functions that demonstrate fundamental object operations in JavaScript:

1. A function that creates an object representing a person with properties for name, age, and occupation.
2. A function that adds a new property to an existing object.
3. A function that displays all properties of an object.

This challenge aims to enhance your understanding of object creation, property manipulation, and object traversal, which are crucial skills for working with data structures in JavaScript.

## Function Signatures

```javascript
function createPerson(name, age, occupation) {
   // Your code here 
}

function addProperty(person, key, value) {
   // Your code here
}

function displayProperties(person) {
   // Your code here
}
```

## Input

- For `createPerson`:
  - `name`: A string representing the person's name
  - `age`: A number representing the person's age
  - `occupation`: A string representing the person's occupation

- For `addProperty`:
  - `person`: An object to which the new property will be added
  - `key`: A string representing the new property's name
  - `value`: Any valid JavaScript value to be assigned to the new property

- For `displayProperties`:
  - `person`: An object whose properties will be displayed

## Output

- `createPerson`: Returns an object with the given properties
- `addProperty`: Returns the updated object with the new property added
- `displayProperties`: No return value, but should console.log all properties of the object

## Example

### Input:
```javascript
let name = "John";
let age = 30;
let occupation = "Developer";
```

### Output:
```javascript
let person = createPerson(name, age, occupation);
console.log(person);
// Should output: { name: "John", age: 30, occupation: "Developer" }

person = addProperty(person, "city", "New York");
console.log(person);
// Should output: { name: "John", age: 30, occupation: "Developer", city: "New York" }

displayProperties(person);
// Should log:
// name: John
// age: 30
// occupation: Developer
// city: New York
```

## Constraints

- The input values can be of any valid JavaScript data type.
- The functions should not modify any global variables.
- The `displayProperties` function should work for objects with any number of properties.

## Testing the Script

To test the functions, you can use the following code:

```javascript
// Test createPerson
let person1 = createPerson("Alice", 25, "Engineer");
console.log("Person 1:", person1);

// Test addProperty
person1 = addProperty(person1, "hobby", "painting");
console.log("Person 1 with hobby:", person1);

// Test displayProperties
console.log("Properties of Person 1:");
displayProperties(person1);

// Additional test cases
let person2 = createPerson("Bob", 40, "Teacher");
person2 = addProperty(person2, "department", "Mathematics");
person2 = addProperty(person2, "yearsOfExperience", 15);
console.log("Properties of Person 2:");
displayProperties(person2);
```

## Bonus Challenge

Implement a `removeProperty` function that removes a specified property from an object and returns the updated object.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

1. Object Creation:
   - In JavaScript, objects are used to store keyed collections of various data and more complex entities.
   - Creating objects with specific properties is a fundamental operation in many programming tasks.

2. Adding Properties:
   - Objects in JavaScript are dynamic, allowing properties to be added after the object's creation.
   - This flexibility is useful for extending objects with new data as needed.

3. Displaying Properties:
   - Iterating over an object's properties is a common task when working with objects, especially for debugging or data presentation purposes.

### Step 2: Implementing the Functions

#### createPerson

```javascript
function createPerson(name, age, occupation) {
    return {
        name: name,
        age: age,
        occupation: occupation
    };
}
```

#### addProperty

```javascript
function addProperty(person, key, value) {
    person[key] = value;
    return person;
}
```

#### displayProperties

```javascript
function displayProperties(person) {
    for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }
}
```

### Step 3: Testing the Functions

Use the provided test cases in the "Testing the Script" section to verify your implementation.

**Additional Test Cases**

1. Test Case for createPerson:
   - Input: `createPerson("Emma", 28, "Designer")`
   - Expected Output: `{ name: "Emma", age: 28, occupation: "Designer" }`

2. Test Case for addProperty:
   - Input: `addProperty(person, "isStudent", false)`
   - Expected Output: The person object with a new property `isStudent: false`

3. Test Case for displayProperties:
   - Input: An object with various data types as properties
   - Expected Output: All properties correctly logged to the console

## Time and Space Complexity

- createPerson:
  - Time Complexity: O(1)
  - Space Complexity: O(1)

- addProperty:
  - Time Complexity: O(1)
  - Space Complexity: O(1)

- displayProperties:
  - Time Complexity: O(n), where n is the number of properties in the object
  - Space Complexity: O(1)

## References

- [MDN Web Docs: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info: Objects](https://javascript.info/object)
- [MDN Web Docs: Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## Related Problems

- Implement a deep clone function for objects
- Create a function to merge two objects
- Implement a function to filter object properties based on their values

## Key Takeaways

- Objects in JavaScript are versatile data structures for storing and organizing data.
- Dynamic property addition allows for flexible object manipulation.
- Iterating over object properties is a crucial skill for working with object data.
- Always consider using `hasOwnProperty` when iterating over object properties to avoid issues with inherited properties.

## Notes

When working with objects, be aware of the difference between primitive values and object references. Modifying an object passed as an argument will affect the original object, while reassigning the parameter will not. This behavior is important to understand when designing functions that manipulate objects.
