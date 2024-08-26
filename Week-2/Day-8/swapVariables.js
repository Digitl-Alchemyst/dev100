function swapVariables(a, b) {
  let swapped = [b, a];
  return swapped;
}


//Test the script
let a = 5;
let b = 10;

let swappedNumbers = swapVariables(a, b);
console.log(swappedNumbers); // Should print [10, 5]

[a, b] = swappedNumbers;
console.log('A = ', a); // Should print 10
console.log('B = ', b); // Should print 5

let x = 'apple';
let y = 'orange';

swappedString = swapVariables(x, y);
console.log(swappedString); // Should print ['orange', 'apple']

[x, y] = swappedString;
console.log('X = ', x); // Should print 'orange'
console.log('B = ', y); // Should print 'apple'

let c = true;
let d = false;
swappedBoolean = swapVariables(c, d);   
console.log(swappedBoolean); // Should print [false, true]
[c, d] = swappedBoolean;
console.log('C = ', c); // Should print false
console.log('D = ', d); // Should print true

let e = null;
let f = undefined;
swappedNull = swapVariables(e, f);
console.log(swappedNull); // Should print [undefined, null]
[e, f] = swappedNull;
console.log('E = ', e); // Should print undefined
console.log('F = ', f); // Should print null

let g = NaN;
let h = Infinity;
swappedNaN = swapVariables(g, h);
console.log(swappedNaN); // Should print [Infinity, NaN]
[g, h] = swappedNaN;
console.log('G = ', g);
console.log('H = ', h);

let i = { name: 'John', age: 30 };
let j = { city: 'New York', country: 'USA' };
swappedObjects = swapVariables(i, j);
console.log(swappedObjects); // Should print [{ city: 'New York', country: 'USA' }, { name: 'John', age: 30 }]
[i, j] = swappedObjects;
console.log('I = ', i);
console.log('J = ', j);

let k = [1, 2, 3];  
let l = [4, 5, 6];
swappedArrays = swapVariables(k, l);
console.log(swappedArrays); // Should print [[4, 5, 6], [1, 2, 3]]
[k, l] = swappedArrays;
console.log('K = ', k);
console.log('L = ', l);
