function Calculator() {
  this.result = {};
  this.finalResult = 0;
  let num1 = 0;

  this.add = function (num2) {
    this.finalResult = num1 + num2;
    this.result.add = this.finalResult;
    num1 = this.finalResult;
    return this.finalResult;
  };

  this.subtract = function (num2) {
    this.finalResult = num1 - num2;
    this.result.subtract = this.finalResult;
    num1 = this.finalResult;
    return this.finalResult;
  };

  this.multiply = function (num2) {
    this.finalResult = num1 * num2;
    this.result.multiply = this.finalResult;
    num1 = this.finalResult;
    return this.finalResult;
  };

  this.divide = function (num2) {
    this.finalResult = num1 / num2;
    this.result.divide = this.finalResult;
    num1 = this.finalResult;
    return this.finalResult;
  };

  this.getResult = function () {
    return {
      calculations: this.result,
      finalResult: this.finalResult,
    };
  };
}

const calc = new Calculator();
calc.add(5);
calc.multiply(3);
// calc.subtract(2);
// calc.divide(2);
calc.add(.5);
calc.multiply(3);
console.log(calc.getResult()); // Should output { calculations: { add: 5, multiply: 15, subtract: 13, divide: 6.5 }, finalResult: 6.5 }