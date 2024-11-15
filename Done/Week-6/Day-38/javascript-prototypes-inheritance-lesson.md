# Lesson Plan: JavaScript Prototypes and Inheritance

## Lesson Duration: 30-45 minutes

### Objective
By the end of this lesson, students will understand the concept of prototypes in JavaScript, how prototypal inheritance works, and be able to create and use prototype chains.

### Introduction (5 minutes)

Good morning/afternoon, class! Today, we're going to dive into one of JavaScript's most powerful and unique features: prototypes and inheritance. This concept is fundamental to understanding how JavaScript works under the hood and how we can create efficient and reusable code.

In many programming languages, we use classes to create objects and implement inheritance. JavaScript, however, uses a different approach called prototypal inheritance. Don't worry if this sounds complex – we'll break it down step by step!

### What is a Prototype? (5 minutes)

In JavaScript, almost everything is an object. Each object has a hidden property called `[[Prototype]]` (also known as `__proto__` in some browsers). This prototype is essentially another object that the current object inherits from.

Let's start with a simple example:

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);  // true
console.log(rabbit.jumps); // true
```

In this example, we've set the prototype of `rabbit` to be `animal`. This means `rabbit` can now access properties of `animal` as if they were its own.

### The Prototype Chain (5 minutes)

When we try to access a property of an object, JavaScript first looks for that property on the object itself. If it doesn't find it, it looks at the object's prototype. If it's not there, it looks at the prototype's prototype, and so on. This series of links between objects is called the prototype chain.

```javascript
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

longEar.walk();  // "Animal walk"
console.log(longEar.jumps);  // true
```

In this example, `longEar` inherits from `rabbit`, which inherits from `animal`. This forms a prototype chain: `longEar` -> `rabbit` -> `animal`.

### Constructor Functions (10 minutes)

While the previous examples show how prototypes work, in practice, we often use constructor functions to create objects and set up inheritance. A constructor function is just a regular function that we use with the `new` keyword to create objects.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eats = true;
Animal.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

let cat = new Animal("Whiskers");
cat.walk();  // "Whiskers is walking."
```

In this example, `Animal` is a constructor function. We add properties to its prototype, which will be shared by all objects created with `new Animal()`.

Now, let's create a more specific type of animal:

```javascript
function Rabbit(name) {
  Animal.call(this, name);  // Call the parent constructor
  this.jumps = true;
}

// Set up the prototype chain
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.hop = function() {
  console.log(`${this.name} is hopping.`);
};

let bunny = new Rabbit("Flopsy");
bunny.hop();  // "Flopsy is hopping."
bunny.walk(); // "Flopsy is walking."
```

Here, we've created a `Rabbit` constructor that inherits from `Animal`. We use `Object.create(Animal.prototype)` to set up the prototype chain, and then add `Rabbit`-specific methods to `Rabbit.prototype`.

### The `class` Syntax (10 minutes)

ES6 introduced the `class` syntax, which provides a more intuitive way to work with prototypes and inheritance. It's important to understand that this is just syntactic sugar over the prototype-based inheritance we've been discussing.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.jumps = true;
  }

  hop() {
    console.log(`${this.name} is hopping.`);
  }
}

let bunny = new Rabbit("Flopsy");
bunny.hop();  // "Flopsy is hopping."
bunny.walk(); // "Flopsy is walking."
```

This achieves the same result as our previous example but with a cleaner, more familiar syntax. The `extends` keyword sets up the prototype chain, and `super()` calls the parent constructor.

### Practical Example: Building a Shape Hierarchy (10 minutes)

Let's put all of this together with a practical example. We'll create a hierarchy of shapes:

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    return `This is a ${this.color} shape.`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  describe() {
    return `${super.describe()} It's a circle with radius ${this.radius}.`;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  describe() {
    return `${super.describe()} It's a rectangle with width ${this.width} and height ${this.height}.`;
  }
}

let redCircle = new Circle("red", 5);
console.log(redCircle.describe());  // "This is a red shape. It's a circle with radius 5."
console.log(redCircle.area());      // 78.53981633974483

let blueRectangle = new Rectangle("blue", 4, 6);
console.log(blueRectangle.describe());  // "This is a blue shape. It's a rectangle with width 4 and height 6."
console.log(blueRectangle.area());      // 24
```

In this example, we have a base `Shape` class and two derived classes, `Circle` and `Rectangle`. Each derived class inherits from `Shape` but also has its own unique properties and methods. We've also demonstrated method overriding with the `describe()` method.

### Conclusion and Q&A (5 minutes)

We've covered a lot of ground today! We've learned about prototypes, the prototype chain, constructor functions, and how the `class` syntax provides a more intuitive way to work with prototypal inheritance in JavaScript.

Remember, understanding prototypes and inheritance is crucial for writing efficient, reusable JavaScript code. It's the foundation of many advanced JavaScript concepts and is used extensively in popular libraries and frameworks.

Are there any questions about what we've covered today?

### Additional Resources

For further reading and practice, I recommend:

1. MDN Web Docs on Object Prototypes
2. "You Don't Know JS" book series by Kyle Simpson
3. JavaScript.info tutorials on Prototypes and Inheritance

Thank you for your attention, and happy coding!
