# Day 7 Challenge: Object-Oriented Design Patterns

## Problem Statement
Implement the Observer design pattern. Create a Subject class that maintains a list of observers and notifies them of state changes, and an Observer interface that objects can implement to receive updates.

## Function Signatures
1. `createSubject()`
2. `createObserver(name, updateFunction)`

## Input
- No input for `createSubject`
- `name`: A string, `updateFunction`: A function for `createObserver`

## Output
- `createSubject`: An object with methods to add/remove observers and notify them
- `createObserver`: An object representing an observer

## Example
const subject = createSubject();
const observer1 = createObserver("Observer 1", (data) => console.log("Observer 1 received:", data));
const observer2 = createObserver("Observer 2", (data) => console.log("Observer 2 received:", data));

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers("Hello observers!");
// Should log:
// Observer 1 received: Hello observers!
// Observer 2 received: Hello observers!

## Test the Functions
Create multiple subjects and observers, test adding/removing observers, and sending notifications with various data types.