# Code Challenge: Object Composition in JavaScript

## Problem Statement

Create a system for building customizable characters in a game using object composition. Implement different abilities (e.g., flying, swimming, fighting) as separate objects, then compose these abilities into character objects. This challenge aims to reinforce understanding of object composition, a fundamental concept in object-oriented programming that allows for flexible and modular code design.

## Function Signatures

```javascript
function createAbility(name, action) {
   // Your code here 
}

function createCharacter(name, ...abilities) {
   // Your code here
}
```

## Input

For `createAbility`:
- `name` (string): The name of the ability
- `action` (function): The function to be executed when the ability is used

For `createCharacter`:
- `name` (string): The name of the character
- `...abilities` (rest parameter): A variable number of ability objects created by `createAbility`

## Output

- `createAbility`: Returns an object representing an ability
- `createCharacter`: Returns an object representing a character with composed abilities

## Example

```javascript
const fly = createAbility("fly", () => console.log("Character is flying"));
const swim = createAbility("swim", () => console.log("Character is swimming"));
const hero = createCharacter("SuperHero", fly, swim);
hero.fly(); // Should log "Character is flying"
hero.swim(); // Should log "Character is swimming"
```

## Constraints

- Ability names should be unique for each character
- The action function for each ability should not require any parameters

## Testing the Script

To test your implementation, create various abilities and characters, testing different combinations of abilities. Here's an example:

```javascript
// Create abilities
const fly = createAbility("fly", () => console.log("Soaring through the sky!"));
const swim = createAbility("swim", () => console.log("Swimming in the deep blue sea!"));
const fight = createAbility("fight", () => console.log("Engaging in epic combat!"));

// Create characters
const superman = createCharacter("Superman", fly, fight);
const aquaman = createCharacter("Aquaman", swim, fight);
const wonderWoman = createCharacter("Wonder Woman", fly, swim, fight);

// Test abilities
superman.fly();
superman.fight();
aquaman.swim();
wonderWoman.fly();
wonderWoman.swim();
wonderWoman.fight();

// Test non-existent ability
try {
    superman.swim();
} catch (error) {
    console.log(error.message);
}
```

## Bonus Challenge

1. Implement a `removeAbility(name)` method for characters to dynamically remove abilities.
2. Add a `useAllAbilities()` method that triggers all of a character's abilities in sequence.
3. Implement ability parameters, allowing actions to accept arguments (e.g., fly to a specific height).

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Object Composition

Object composition is a way to combine simple objects or data types into more complex ones. Unlike inheritance, which creates a parent-child relationship between objects, composition allows for more flexible structures by combining independent objects.

In this challenge, we're using composition to create characters with various abilities. Each ability is its own object, and characters are composed of these ability objects.

### Step 2: Implementing the createAbility Function

The `createAbility` function should create and return an object that represents an ability:

```javascript
function createAbility(name, action) {
    if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('Ability name must be a non-empty string');
    }
    if (typeof action !== 'function') {
        throw new Error('Ability action must be a function');
    }
    return {
        name,
        use: action
    };
}
```

### Step 3: Implementing the createCharacter Function

The `createCharacter` function should create a character object that incorporates the provided abilities:

```javascript
function createCharacter(name, ...abilities) {
    if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('Character name must be a non-empty string');
    }
    
    const abilityMap = {};
    
    abilities.forEach(ability => {
        if (typeof ability !== 'object' || !ability.name || !ability.use) {
            throw new Error('Invalid ability object');
        }
        abilityMap[ability.name] = ability.use;
    });

    return {
        name,
        ...abilityMap,
        getAbilities: () => Object.keys(abilityMap)
    };
}
```

### Step 4: Understanding How Object Composition Works Here

In this implementation:

- Each ability is a simple object with a name and a use method.
- Characters are created by composing these ability objects.
- The character object uses the spread operator (`...abilityMap`) to add each ability as a method of the character.
- This approach allows for flexible creation of characters with any combination of abilities.

### Step 5: Testing the Implementation

Use the testing script provided earlier to verify that your implementation works correctly. Make sure to test various combinations of abilities and edge cases.

## Time and Space Complexity

- Time Complexity: 
  - `createAbility`: O(1)
  - `createCharacter`: O(n), where n is the number of abilities
- Space Complexity: O(n), where n is the number of abilities

The `createAbility` function has constant time complexity as it performs a fixed number of operations. The `createCharacter` function's time and space complexity are linear with the number of abilities, as it needs to process and store each ability.

## References

- [MDN Web Docs: Object composition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#object_composition)
- [JavaScript.info: Object methods, "this"](https://javascript.info/object-methods)

## Related Problems

- Implement a mixin system for adding shared behavior to objects
- Create a plugin architecture for a text editor using object composition

## Key Takeaways

- Object composition allows for flexible and modular code design
- It's often preferable to inheritance for creating complex objects with varied behaviors
- The spread operator in JavaScript is a powerful tool for object composition
- Proper error handling and input validation are crucial for robust object creation

## Notes

While this implementation provides a basic framework for object composition, in a real-world game system, you might need additional features like ability cooldowns, resource costs, or interactions between abilities. The principle of composition can be extended to these more complex scenarios.
