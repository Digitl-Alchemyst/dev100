# Day 3 Challenge: Prototypes and Inheritance

## Problem Statement
Create a prototype-based inheritance structure for different types of vehicles. Start with a base Vehicle prototype, then create Car and Motorcycle prototypes that inherit from Vehicle. Each should have unique properties and methods.

## Function Signatures
1. `createVehicle(type, model, year)`
2. `createCar(model, year, doors)`
3. `createMotorcycle(model, year, hasSidecar)`

## Input
Strings and numbers appropriate for each vehicle type

## Output
Objects representing different types of vehicles with inherited and unique properties/methods

## Example
const myCar = createCar("Toyota", 2022, 4);
console.log(myCar.getInfo()); // Should output info about the car
myCar.honk(); // Should log a honking sound

const myMotorcycle = createMotorcycle("Harley", 2021, false);
console.log(myMotorcycle.getInfo()); // Should output info about the motorcycle
myMotorcycle.rev(); // Should log a revving sound

## Test the Functions
Create various vehicles and test both inherited and unique methods/properties.