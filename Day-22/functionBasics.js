const a = 10;
const b = 50;

function sumDeclaration(a, b) {
  sum = a + b;
  return sum;
}

const productExpression = function (a, b) {
  product = a * b;
  return product;
};

const quotientArrow = (a, b) => {
    quotient = b / a;
  return quotient;
};

const functionalMath = {
  sum: sumDeclaration(a, b),
  product: productExpression(a, b),
  quotient: quotientArrow(a, b),
};

console.log(functionalMath);
