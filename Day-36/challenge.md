# Day 1 Challenge: Object Creation and Basic Operations

## Problem Statement
Create a function that generates an object representing a person with properties for name, age, and occupation. Then, implement functions to add a new property to the object and to display all properties of the object.

## Function Signatures
1. `createPerson(name, age, occupation)`
2. `addProperty(person, key, value)`
3. `displayProperties(person)`

## Input
- `name`, `age`, `occupation`: Strings/number for `createPerson`
- `person`: An object, `key`: A string, `value`: Any value for `addProperty`
- `person`: An object for `displayProperties`

## Output
- `createPerson`: An object with the given properties
- `addProperty`: The updated object
- `displayProperties`: No return value, but should console.log all properties

## Example
Input: name = "John", age = 30, occupation = "Developer"
Output:
- createPerson("John", 30, "Developer") should return { name: "John", age: 30, occupation: "Developer" }
- addProperty(person, "city", "New York") should return the object with a new "city" property
- displayProperties(person) should log all properties to the console

## Test the Functions
Test each function with various inputs, including adding multiple properties and displaying objects with different numbers of properties.