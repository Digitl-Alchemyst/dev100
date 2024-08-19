

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function backwardsString(str) {
    if (str === "") {
      return "";
    } else {
      return backwardsString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("JavaScript")); // Should print "tpircSavaJ"
console.log(reverseString("Hello")); // Should print "olleH"
console.log(reverseString("12345")); // Should print "54321"

console.log(backwardsString("JavaScript")); // Should print "tpircSavaJ"
console.log(backwardsString("Hello")); // Should print "olleH"
console.log(backwardsString("12345")); // Should print "54321"