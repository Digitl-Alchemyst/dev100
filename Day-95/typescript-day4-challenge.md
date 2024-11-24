# Code Challenge: RPG Character System

## Problem Statement

Convert a JavaScript role-playing game character system to TypeScript, implementing proper class hierarchy, access modifiers, and abstract classes. Create a system that manages different types of game characters (warriors, mages, rogues) with specific abilities and attributes.

This challenge demonstrates how TypeScript's class features enhance object-oriented programming by adding static type checking, access modifiers, and abstract classes to traditional JavaScript class patterns.

## Function Signature

```typescript
// Base interfaces
interface ICharacter {
  readonly id: string;
  name: string;
  level: number;
  getStats(): CharacterStats;
  levelUp(): void;
  attack(target: ICharacter): number;
}

interface CharacterStats {
  health: number;
  mana: number;
  strength: number;
  defense: number;
}

// Abstract base class
abstract class Character implements ICharacter {
  public readonly id: string;
  public name: string;
  public level: number;
  protected stats: CharacterStats;

  constructor(name: string) {
    // TODO: Initialize character properties
  }

  abstract attack(target: ICharacter): number;
  
  // TODO: Implement common character methods
  abstract getStats(): CharacterStats;
  abstract levelUp(): void;
}

// TODO: Implement specific character classes (Warrior, Mage, Rogue)
```

## Input

The system should handle:
- Character creation with specific types
- Character leveling and stat management
- Combat interactions between characters
- Stat calculations and modifications

## Output

- Character creation returns initialized character instances
- Methods return appropriate values based on their signatures
- Combat calculations return damage numbers
- Stat queries return CharacterStats objects

## Example

### Input:
```typescript
const warrior = new Warrior("Conan");
const mage = new Mage("Gandalf");

warrior.levelUp();
const damage = warrior.attack(mage);
```

### Output:
```typescript
console.log(warrior.getStats());
// {
//   health: 150,
//   mana: 50,
//   strength: 15,
//   defense: 10
// }

console.log(damage); // 25 (example damage value)
```

## Constraints

- All properties must have appropriate access modifiers
- Abstract methods must be implemented in derived classes
- ICharacter interface must be properly implemented
- ID property must be readonly and unique
- Level must be a positive integer
- Stats must have appropriate ranges for game balance

## Testing the Script

```typescript
// Create characters
const warrior = new Warrior("Conan");
const mage = new Mage("Gandalf");
const rogue = new Rogue("Bilbo");

// Test levelUp
warrior.levelUp();
console.log(warrior.getStats());

// Test combat
const damage = warrior.attack(mage);
console.log(`Damage dealt: ${damage}`);

// Test stat modifications
console.log(mage.getStats());
```

## Bonus Challenge

Extend the system to include:
- Generic character abilities with TypeScript generics
- Character equipment system with interfaces
- Status effects using decorators
- Character class composition using mixins

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The character system demonstrates TypeScript's OOP features:
1. Abstract classes for shared behavior
2. Access modifiers for encapsulation
3. Interface implementation for type safety
4. Method overriding for specialized behavior
5. Protected members for inheritance

### Step 2: Implementing the Functions

**Method 1: Basic Implementation**

```typescript
abstract class Character implements ICharacter {
  public readonly id: string;
  public name: string;
  public level: number;
  protected stats: CharacterStats;

  constructor(name: string) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.level = 1;
    this.stats = this.getInitialStats();
  }

  protected abstract getInitialStats(): CharacterStats;
  
  public getStats(): CharacterStats {
    return { ...this.stats };
  }

  public abstract attack(target: ICharacter): number;

  public levelUp(): void {
    this.level++;
    this.updateStats();
  }

  protected abstract updateStats(): void;
}

class Warrior extends Character {
  protected getInitialStats(): CharacterStats {
    return {
      health: 100,
      mana: 20,
      strength: 10,
      defense: 8
    };
  }

  public attack(target: ICharacter): number {
    const damage = this.stats.strength * 1.5;
    return Math.floor(damage);
  }

  protected updateStats(): void {
    this.stats.health += 20;
    this.stats.strength += 3;
    this.stats.defense += 2;
    this.stats.mana += 5;
  }
}
```

**Method 2: Advanced Implementation with Status Effects**

```typescript
interface StatusEffect {
  duration: number;
  apply(stats: CharacterStats): CharacterStats;
}

abstract class Character implements ICharacter {
  private statusEffects: Map<string, StatusEffect> = new Map();

  // ... previous implementation ...

  public getStats(): CharacterStats {
    let finalStats = { ...this.stats };
    this.statusEffects.forEach(effect => {
      finalStats = effect.apply(finalStats);
    });
    return finalStats;
  }

  public addStatusEffect(id: string, effect: StatusEffect): void {
    this.statusEffects.set(id, effect);
  }

  public removeStatusEffect(id: string): void {
    this.statusEffects.delete(id);
  }
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1: Character Creation
   - Input: `new Warrior("Conan")`
   - Expected Output: Warrior instance with initial stats

2. Test Case 2: Level Up
   - Input: `warrior.levelUp()`
   - Expected Output: Increased stats

3. Test Case 3: Combat
   - Input: `warrior.attack(mage)`
   - Expected Output: Calculated damage number

## Time and Space Complexity

- Time Complexity: O(1) for most operations, O(n) for status effect calculations
- Space Complexity: O(n) where n is the number of status effects

## References

- [TypeScript Classes Documentation](https://www.typescriptlang.org/docs/handbook/classes.html)
- [TypeScript Access Modifiers](https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers)

## Related Problems

- Inventory System Implementation
- Combat System Design
- Character Progression System

## Key Takeaways

- Abstract classes provide shared behavior templates
- Access modifiers enforce encapsulation
- Interface implementation ensures type safety
- Protected members enable safe inheritance
- Method overriding allows specialized behavior

## Notes

This challenge demonstrates how TypeScript's class features enhance object-oriented programming in JavaScript. The concepts covered are fundamental to building complex systems with proper encapsulation and type safety.

Key points to remember:
- When to use abstract classes vs interfaces
- Proper use of access modifiers
- Implementation of inherited methods
- Handling shared vs specialized behavior
- Type safety in inheritance hierarchies