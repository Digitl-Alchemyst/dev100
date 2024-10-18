function numToBinary(num) {
  return num.toString(2);
}

function decimalToBinary(num) {
  let binaryArray = [];
  while (num > 0) {
    binaryArray.push(num % 2);
    num = Math.floor(num / 2);
  }
  return binaryArray.length ? binaryArray.reverse().join('') : '0';
}

console.log('Function 1:');
console.log(decimalToBinary(10)); // Should print "1010"
console.log(decimalToBinary(0));  // Should print "0"
console.log(decimalToBinary(255)); // Should print "11111111"
console.log(decimalToBinary(1024)); // Should print "10000000000"
console.log(decimalToBinary(324)); // Should print "101000100"
console.log('Function 2:');
console.log(numToBinary(10)); // Should print "1010"
console.log(numToBinary(0));  // Should print "0"
console.log(numToBinary(255)); // Should print "11111111"
console.log('Big Test:');
console.log(decimalToBinary(347));  // Should print "101011011"
console.log(decimalToBinary(782));  // Should print "1100001110"
console.log(decimalToBinary(123));  // Should print "1111011"
console.log(decimalToBinary(611));  // Should print "1001100011"
console.log(decimalToBinary(256));  // Should print "100000000"
console.log(decimalToBinary(943));  // Should print "1110101111"
console.log(decimalToBinary(429));  // Should print "110101101"
console.log(decimalToBinary(798));  // Should print "1100011110"
console.log(decimalToBinary(132));  // Should print "10000100"
console.log(decimalToBinary(511));  // Should print "111111111"
