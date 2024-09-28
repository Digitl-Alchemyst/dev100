# Code Challenge: Prototypes and Inheritance in JavaScript

## Problem Statement

Create a prototype-based inheritance structure for different types of vehicles in JavaScript. This challenge aims to reinforce understanding of prototypal inheritance, a fundamental concept in JavaScript's object-oriented programming model. You'll start with a base Vehicle prototype, then create Car and Motorcycle prototypes that inherit from Vehicle. Each should have unique properties and methods, demonstrating how inheritance and prototype chains work in JavaScript.

## Function Signatures

```javascript
function createVehicle(type, model, year) {
   // Your code here 
}

function createCar(model, year, doors) {
   // Your code here
}

function createMotorcycle(model, year, hasSidecar) {
   // Your code here
}
```

## Input

- For `createVehicle`: 
  - `type` (string): The type of vehicle
  - `model` (string): The model of the vehicle
  - `year` (number): The year the vehicle was manufactured

- For `createCar`:
  - `model` (string): The model of the car
  - `year` (number): The year the car was manufactured
  - `doors` (number): The number of doors the car has

- For `createMotorcycle`:
  - `model` (string): The model of the motorcycle
  - `year` (number): The year the motorcycle was manufactured
  - `hasSidecar` (boolean): Whether the motorcycle has a sidecar or not

## Output

Each function should return an object representing the created vehicle, with inherited and unique properties/methods.

## Example

### Input:

```javascript
const myCar = createCar("Toyota", 2022, 4);
console.log(myCar.getInfo());
myCar.honk();

const myMotorcycle = createMotorcycle("Harley", 2021, false);
console.log(myMotorcycle.getInfo());
myMotorcycle.rev();
```

### Output:

```
This is a Car: Toyota model from 2022 with 4 doors.
Honk! Honk!
This is a Motorcycle: Harley model from 2021 without a sidecar.
Vroom! Vroom!
```

## Constraints

- All input values should be of the correct type (strings for model, numbers for year and doors, boolean for hasSidecar).
- The year should be a valid four-digit year (e.g., between 1900 and 2100).
- The number of doors for a car should be a positive integer.

## Testing the Script

To test your implementation, create various vehicles using the provided functions and test both inherited and unique methods/properties. Here's an example of how you might test your code:

```javascript
// Create a car
const myCar = createCar("Toyota", 2022, 4);
console.log(myCar.getInfo());
myCar.honk();

// Create a motorcycle
const myMotorcycle = createMotorcycle("Harley", 2021, false);
console.log(myMotorcycle.getInfo());
myMotorcycle.rev();

// Test inherited method
console.log(myCar.getAge());
console.log(myMotorcycle.getAge());

// Test unique properties
console.log(myCar.doors);
console.log(myMotorcycle.hasSidecar);
```

## Bonus Challenge

Implement a `Truck` prototype that also inherits from `Vehicle`. Add unique properties like `cargoCapacity` and a method `loadCargo(weight)` that checks if the cargo can be loaded based on the truck's capacity.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on JavaScript's prototypal inheritance. In JavaScript, objects can inherit properties and methods from other objects. This is different from classical inheritance found in languages like Java or C++. 

Key concepts to understand:

1. **Prototype Chain**: Every JavaScript object has a prototype from which it inherits properties and methods.
2. **Constructor Functions**: These are used to create objects and set up their initial properties.
3. **Object.create()**: This method creates a new object with the specified prototype object.

The goal is to create a hierarchy where `Car` and `Motorcycle` inherit from `Vehicle`, but also have their own unique properties and methods.

### Step 2: Implementing the Functions

We'll implement this challenge using two different methods: constructor functions with prototypes, and ES6 classes.

#### Method 1: Constructor Functions with Prototypes

1. Create the base `Vehicle` constructor and prototype:

```javascript
function Vehicle(type, model, year) {
    this.type = type;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getInfo = function() {
    return `This is a ${this.type}: ${this.model} model from ${this.year}.`;
};

Vehicle.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
};
```

2. Create the `Car` constructor and set up inheritance:

```javascript
function Car(model, year, doors) {
    Vehicle.call(this, "Car", model, year);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
    console.log("Honk! Honk!");
};
```

3. Create the `Motorcycle` constructor and set up inheritance:

```javascript
function Motorcycle(model, year, hasSidecar) {
    Vehicle.call(this, "Motorcycle", model, year);
    this.hasSidecar = hasSidecar;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.rev = function() {
    console.log("Vroom! Vroom!");
};
```

4. Implement the creation functions:

```javascript
function createVehicle(type, model, year) {
    return new Vehicle(type, model, year);
}

function createCar(model, year, doors) {
    return new Car(model, year, doors);
}

function createMotorcycle(model, year, hasSidecar) {
    return new Motorcycle(model, year, hasSidecar);
}
```

#### Method 2: ES6 Classes

1. Create the base `Vehicle` class:

```javascript
class Vehicle {
    constructor(type, model, year) {
        this.type = type;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `This is a ${this.type}: ${this.model} model from ${this.year}.`;
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }
}
```

2. Create the `Car` class:

```javascript
class Car extends Vehicle {
    constructor(model, year, doors) {
        super("Car", model, year);
        this.doors = doors;
    }

    honk() {
        console.log("Honk! Honk!");
    }
}
```

3. Create the `Motorcycle` class:

```javascript
class Motorcycle extends Vehicle {
    constructor(model, year, hasSidecar) {
        super("Motorcycle", model, year);
        this.hasSidecar = hasSidecar;
    }

    rev() {
        console.log("Vroom! Vroom!");
    }
}
```

4. Implement the creation functions:

```javascript
function createVehicle(type, model, year) {
    return new Vehicle(type, model, year);
}

function createCar(model, year, doors) {
    return new Car(model, year, doors);
}

function createMotorcycle(model, year, hasSidecar) {
    return new Motorcycle(model, year, hasSidecar);
}
```

### Step 3: Testing the Functions

You can test the functions using the code provided in the "Testing the Script" section above. Make sure to test inherited methods, unique methods, and properties for each type of vehicle.

**Test Cases**

1. Test Case 1:
   - Input: `const car = createCar("Toyota", 2022, 4);`
   - Expected Output: `car.getInfo()` should return "This is a Car: Toyota model from 2022."

2. Test Case 2:
   - Input: `const motorcycle = createMotorcycle("Harley", 2021, false);`
   - Expected Output: `motorcycle.getAge()` should return the correct age based on the current year.

3. Test Case 3:
   - Input: `const vehicle = createVehicle("Boat", "Speedster", 2020);`
   - Expected Output: `vehicle.getInfo()` should return "This is a Boat: Speedster model from 2020."

## Time and Space Complexity

- Time Complexity: O(1) for object creation and method calls
- Space Complexity: O(1) for each object created

The time and space complexity for this challenge is constant because creating objects and calling methods takes the same amount of time regardless of the input size. Each object uses a fixed amount of memory.

## References

- [MDN Web Docs: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Prototypal inheritance](https://javascript.info/prototype-inheritance)

## Related Problems

- Implement a basic class hierarchy for a zoo management system
- Create a prototype chain for different types of geometric shapes

## Key Takeaways

- Understanding prototypal inheritance is crucial for effective JavaScript programming
- Constructor functions and ES6 classes are two ways to implement inheritance in JavaScript
- Prototypes allow for efficient memory usage by sharing methods across all instances of an object
- ES6 classes provide a more familiar syntax for developers coming from class-based languages, but they're essentially syntactic sugar over prototypal inheritance

## Notes

While both methods (constructor functions and ES6 classes) achieve the same result, ES6 classes are generally considered more readable and closer to how other object-oriented languages work. However, understanding prototypal inheritance is still important as it forms the basis of how JavaScript objects work under the hood.
