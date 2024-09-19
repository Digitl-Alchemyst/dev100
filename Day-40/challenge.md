# Day 5 Challenge: Object Composition

## Problem Statement
Create a system for building customizable characters in a game using object composition. Implement different abilities (e.g., flying, swimming, fighting) as separate objects, then compose these abilities into character objects.

## Function Signatures
1. `createAbility(name, action)`
2. `createCharacter(name, ...abilities)`

## Input
- `name`: A string for both functions
- `action`: A function for `createAbility`
- `...abilities`: A variable number of ability objects for `createCharacter`

## Output
- `createAbility`: An object representing an ability
- `createCharacter`: An object representing a character with composed abilities

## Example
const fly = createAbility("fly", () => console.log("Character is flying"));
const swim = createAbility("swim", () => console.log("Character is swimming"));
const hero = createCharacter("SuperHero", fly, swim);
hero.fly(); // Should log "Character is flying"
hero.swim(); // Should log "Character is swimming"

## Test the Functions
Create various abilities and characters, testing different combinations of abilities.