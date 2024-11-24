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
        this.id = Math.random().toString(36).substring(2, 9)
        this.name = name
        this.level = 1;
        this.stats = this.getInitialStats();
    }

    protected abstract getInitialStats(): CharacterStats;

    public getStats(): CharacterStats {
        return { ...this.stats };
    }

    public abstract attack(target: ICharacter): number;

    public levelUp(): void {
        this.level++
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
            defense: 8,
        };
    }

    public attack(target: ICharacter): number {
        const damage = this.stats.strength * 1.5;
        return Math.floor(damage);
    }

    protected updateStats(): void {
        this.stats.health += 20;
        this.stats.mana += 5;
        this.stats.strength += 3;
        this.stats.defense += 2;
    }
}

class Mage extends Character {
    protected getInitialStats(): CharacterStats {
        return {
            health: 60,
            mana: 75,
            strength: 6,
            defense: 7,
        };
    }

    public attack(target: ICharacter): number {
        const damage = this.stats.strength * 1.5;
        return Math.floor(damage);
    }

    protected updateStats(): void {
        this.stats.health += 10;
        this.stats.mana += 15;
        this.stats.strength += 3;
        this.stats.defense += 1;
    }
}

class Rogue extends Character {
    protected getInitialStats(): CharacterStats {
        return {
            health: 80,
            mana: 50,
            strength: 8,
            defense: 8,
        };
    }

    public attack(target: ICharacter): number {
        const damage = this.stats.strength * 1.5;
        return Math.floor(damage);
    }

    protected updateStats(): void {
        this.stats.health += 15;
        this.stats.mana += 3;
        this.stats.strength += 2;
        this.stats.defense += 2;
    }
}


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