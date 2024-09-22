# Lesson Plan: JavaScript Encapsulation and Closures

## Lesson Duration: 30-45 minutes

### Objective
By the end of this lesson, students will understand the concepts of encapsulation and closures in JavaScript, how they relate to each other, and how to use them to create private variables and methods.

### Introduction (5 minutes)

Welcome, class! Today, we're diving into two fundamental concepts in JavaScript: encapsulation and closures. These concepts are crucial for writing clean, efficient, and secure code.

Encapsulation is a principle of object-oriented programming that bundles data and the methods that operate on that data within a single unit. In JavaScript, we use closures to achieve encapsulation.

Closures, on the other hand, are functions that have access to variables in their outer (enclosing) lexical scope, even after the outer function has returned. This might sound complex, but don't worry – we'll break it down step by step!

### Understanding Scope in JavaScript (5 minutes)

Before we dive into closures, let's quickly review scope in JavaScript:

```javascript
let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm from outer";
    
    function innerFunction() {
        let innerVar = "I'm inner";
        console.log(innerVar);    // Accessible
        console.log(outerVar);    // Accessible
        console.log(globalVar);   // Accessible
    }
    
    innerFunction();
    console.log(innerVar);  // Error: innerVar is not defined
}

outerFunction();
console.log(outerVar);  // Error: outerVar is not defined
```

In this example, we see that inner scopes have access to variables from outer scopes, but not vice versa. This is the foundation of how closures work.

### Closures (10 minutes)

A closure is created when a function is defined within another function, allowing the inner function to access variables in the outer function's scope.

Let's look at a simple example:

```javascript
function outerFunction(x) {
    let y = 10;
    
    function innerFunction() {
        console.log(x + y);
    }
    
    return innerFunction;
}

let closure = outerFunction(5);
closure();  // Outputs: 15
```

In this example, `innerFunction` is a closure. It "closes over" the variables `x` and `y` from its outer scope. Even after `outerFunction` has finished executing, `closure` still has access to these variables.

Closures are powerful because they allow us to create private variables and functions:

```javascript
function counter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

let myCounter = counter();
myCounter.increment();  // Outputs: 1
myCounter.increment();  // Outputs: 2
myCounter.decrement();  // Outputs: 1
```

In this example, `count` is a private variable. It can't be accessed directly, only through the `increment` and `decrement` methods.

### Encapsulation in JavaScript (10 minutes)

Encapsulation is about bundling data and the methods that operate on that data within a single unit, and restricting direct access to some of an object's components. JavaScript doesn't have a built-in way to declare private variables, but we can use closures to achieve this.

Let's create a simple bank account example to demonstrate encapsulation:

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited ${amount}. New balance is ${balance}`);
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew ${amount}. New balance is ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

let myAccount = createBankAccount(100);
console.log(myAccount.getBalance());  // Outputs: 100
myAccount.deposit(50);                // Outputs: Deposited 50. New balance is 150
myAccount.withdraw(70);               // Outputs: Withdrew 70. New balance is 80
console.log(myAccount.balance);       // Outputs: undefined
```

In this example, `balance` is a private variable. It can't be accessed or modified directly, only through the methods we've provided. This is encapsulation in action!

### The Module Pattern (10 minutes)

The module pattern is a common JavaScript design pattern that uses closures to create private and public encapsulation. Here's an example:

```javascript
let calculator = (function() {
    let result = 0;
    
    function add(x) {
        result += x;
    }
    
    function subtract(x) {
        result -= x;
    }
    
    function getResult() {
        return result;
    }
    
    return {
        add: add,
        subtract: subtract,
        getResult: getResult
    };
})();

calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult());  // Outputs: 3
console.log(calculator.result);       // Outputs: undefined
```

This pattern creates a closure that contains private variables and functions. Only the functions we explicitly return are accessible from outside, giving us control over what parts of our module are public.

### Practical Example: A To-Do List (10 minutes)

Let's put all of this together with a practical example. We'll create a simple to-do list module:

```javascript
let todoList = (function() {
    let tasks = [];
    
    function addTask(task) {
        tasks.push(task);
        console.log(`Task "${task}" added. Total tasks: ${tasks.length}`);
    }
    
    function completeTask(index) {
        if (index >= 0 && index < tasks.length) {
            let completedTask = tasks.splice(index, 1);
            console.log(`Task "${completedTask}" completed. Remaining tasks: ${tasks.length}`);
        } else {
            console.log("Invalid task index");
        }
    }
    
    function getTasks() {
        return tasks.slice();  // Return a copy of the array
    }
    
    return {
        add: addTask,
        complete: completeTask,
        getAllTasks: getTasks
    };
})();

todoList.add("Learn JavaScript");
todoList.add("Master closures");
console.log(todoList.getAllTasks());  // Outputs: ["Learn JavaScript", "Master closures"]
todoList.complete(0);
console.log(todoList.getAllTasks());  // Outputs: ["Master closures"]
console.log(todoList.tasks);          // Outputs: undefined
```

In this example, `tasks` is a private variable that can't be accessed or modified directly from outside the module. We've used closures to create methods that can interact with this private data, demonstrating both encapsulation and the power of closures.

### Conclusion and Q&A (5 minutes)

Today, we've explored encapsulation and closures in JavaScript. We've seen how closures allow functions to "remember" their lexical scope, even when executed outside that scope. We've also learned how to use closures to achieve encapsulation, creating private variables and methods.

These concepts are powerful tools in JavaScript. They allow us to write more organized, efficient, and secure code by controlling access to our data and functionality.

Are there any questions about what we've covered today?

### Additional Resources

For further study, I recommend:

1. MDN Web Docs on Closures
2. "JavaScript: The Good Parts" by Douglas Crockford
3. "You Don't Know JS: Scope & Closures" by Kyle Simpson

Thank you for your attention, and happy coding!
