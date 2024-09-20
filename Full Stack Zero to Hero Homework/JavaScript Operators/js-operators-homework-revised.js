// Revised JavaScript Operators Homework Assignment

// Arithmetic Operators
function add(a, b) {
    return a + b;
}
console.log(add('What is a + b?', 5, 3));

function multiply(a, b) {
    return a * b;
}
console.log(multiply('What is a * b?', 4, 6));

function modulus(a, b) {
    return a % b;
}
console.log(modulus('What is a % b?', 17, 5));

// Comparison Operators
function equalValue(a, b) {
    return a == b;
}
console.log(equalValue('Is a == b? (true/false)', 5, '5'));

function strictEqual(a, b) {
    return a === b;
}
console.log(strictEqual('Is a === b? (true/false)', 5, '5'));

function greaterThan(a, b) {
    return a > b;
}
console.log(greaterThan('Is a > b? (true/false)', 10, 8));

// Logical Operators
function logicalAnd(a, b) {
    return a && b;
}
console.log(logicalAnd('What is a && b?', true, false));

function logicalOr(a, b) {
    return a || b;
}
console.log(logicalOr('What is a || b?', false, true));

function logicalNot(a) {
    return !a;
}
console.log(logicalNot('What is !a?', true));

// Assignment Operators
function addAssign(a) {
    let x = a;
    x += 5;
    return x;
}
console.log(addAssign('If x starts at a, what is x after x += 5?', 10));

function multiplyAssign(a) {
    let x = a;
    x *= 3;
    return x;
}
console.log(multiplyAssign('If x starts at a, what is x after x *= 3?', 7));

// Ternary Operator
function ternary(a, b) {
    return a > b ? 'greater' : 'not greater';
}
console.log(ternary('Is a > b? (Answer will be "greater" or "not greater")', 15, 12));

// Unary Operators
function increment(a) {
    let x = a;
    return ++x;
}
console.log(increment('What is the value after ++a?', 8));

function decrement(a) {
    let x = a;
    return --x;
}
console.log(decrement('What is the value after --a?', 6));

// Typeof Operator
function typeofOperator(a) {
    return typeof a;
}
console.log(typeofOperator('What is typeof a?', 'Hello'));
