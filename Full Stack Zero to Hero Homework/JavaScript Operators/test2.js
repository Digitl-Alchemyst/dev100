// Advanced JavaScript Operators Homework Assignment

// Arithmetic Operators
function complexArithmetic(a, b, c) {
    return (a + b) * c - a;
}
// What is (a + b) * c - a?
console.log('complexArithmetic:')
console.log('Answer:_');
console.log('Result =>');
console.log(complexArithmetic(5, 3, 2));

function exponentiation(a, b) {
    return a ** b;
}
// What is a ** b?
console.log('exponentiation:')
console.log('Answer:_');
console.log('Result =>');
console.log(exponentiation(2, 8));

function precedence(a, b, c, d) {
    return a + b * c / d;
}
// What is a + b * c / d?
console.log('precedence:')
console.log('Answer:_');
console.log('Result =>');
console.log(precedence(10, 5, 4, 2));

// Bitwise Operators
function bitwiseAND(a, b) {
    return a & b;
}
// What is a & b?
console.log('bitwiseAND:')
console.log('Answer:_');
console.log('Result =>');
console.log(bitwiseAND(12, 5));

function bitwiseXOR(a, b) {
    return a ^ b;
}
// What is a ^ b?
console.log('bitwiseXOR:')
console.log('Answer:_');
console.log('Result =>');
console.log(bitwiseXOR(9, 14));

// Comparison and Logical Operators
function complexComparison(a, b, c) {
    return a > b && b > c || a === c;
}
// Is (a > b && b > c) || (a === c)? (true/false)
console.log('complexComparison:')
console.log('Answer:_');
console.log('Result =>');
console.log(complexComparison(10, 5, 3));

function nullishCoalescing(a, b) {
    return a ?? b;
}
// What is a ?? b?
console.log('nullishCoalescing:')
console.log('Answer:_');
console.log('Result =>');
console.log(nullishCoalescing(null, 'default'));

// Type Coercion
function coercionEquality(a, b) {
    return a == b;
}
// Is a == b? (true/false)
console.log('coercionEquality:')
console.log('Answer:_');
console.log('Result =>');
console.log(coercionEquality('5', 5));

function strictInequality(a, b) {
    return a !== b;
}
// Is a !== b? (true/false)
console.log('strictInequality:')
console.log('Answer:_');
console.log('Result =>');
console.log(strictInequality(0, false));

// Assignment Operators
function compoundAssignment(a) {
    let x = a;
    x *= 2;
    x += 5;
    x /= 3;
    return x;
}
// If x starts at a, what is x after x *= 2, x += 5, then x /= 3?
console.log('compoundAssignment:')
console.log('Answer:_');
console.log('Result =>');
console.log(compoundAssignment(10));

// Ternary Operator (Nested)
function nestedTernary(a, b, c) {
    return a > b ? (b > c ? 'medium' : 'small') : (a < c ? 'large' : 'medium');
}
// What size? (small/medium/large)
console.log('nestedTernary:')
console.log('Answer:_');
console.log('Result =>');
console.log(nestedTernary(5, 10, 7));

// Unary Operators
function postVsPre(a) {
    let x = a;
    let y = x++;
    let z = ++x;
    return `y: ${y}, z: ${z}, x: ${x}`;
}
// What are the values of y, z, and x after y = x++ and z = ++x?
console.log('postVsPre:')
console.log('Answer:_');
console.log('Result =>');
console.log(postVsPre(5));

// Typeof with Symbol and BigInt
function advancedTypeof(a, b) {
    return `${typeof a}, ${typeof b}`;
}
// What are the types of a and b?
console.log('advancedTypeof:')
console.log('Answer:_');
console.log('Result =>');
console.log(advancedTypeof(Symbol('foo'), BigInt(9007199254740991)));

// Spread Operator
function spreadOperator(a, b, c) {
    let arr1 = [a, b];
    let arr2 = [c, ...arr1];
    return arr2;
}
// What is [c, ...arr1] where arr1 = [a, b]?
console.log('spreadOperator:')
console.log('Answer:_');
console.log('Result =>');
console.log(spreadOperator(1, 2, 3));

// Optional Chaining
function optionalChaining(obj) {
    return obj?.prop?.subProp;
}
// What is obj?.prop?.subProp?
console.log('optionalChaining:')
console.log('Answer:_');
console.log('Result =>');
console.log(optionalChaining({prop: {subProp: 'value'}}));
// What is obj?.prop?.subProp?
console.log('optionalChaining:')
console.log('Answer:_');
console.log('Result =>');
console.log(optionalChaining({prop: {}}));
