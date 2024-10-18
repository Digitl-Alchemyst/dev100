//Variables

//Rectangle Perimeter & Area
let x = 5;
let y = 10;

//Triangle Area
let h = 5;
let b = 6;

//Triangle Max Edge
let a = 7;
let c = 10;
function  rectanglePerimeter(x, y) {
    const p = 2 * (x + y);
    return p;
}
console.log('Rectangle Perimeter =', rectanglePerimeter(x, y));

function  rectangleArea(x, y) {
 const a = x * y;
 return a;
}
console.log('Rectangle Area =', rectangleArea(x, y));

function  triangleArea(a, b) {
    const ta = (h * b) / 2;
    return ta;
}
console.log('Triangle Area =', triangleArea(h, b));
function  triangleMaxEdge(a, c) {
 const e = (a + c) - 1;
 return e;
}
console.log('Triangle Max Edge =', triangleMaxEdge(a, c));

function triangleMinEdge(a, c) {
    const m = (c - a) + 1;
    return m;
}
console.log('Triangle Min Edge =', triangleMinEdge(a, c));

console.log('Triangle Edge Range =', triangleMinEdge(a, c), '-', triangleMaxEdge(a, c));