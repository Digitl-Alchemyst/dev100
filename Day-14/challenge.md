Day 7 Challenge: "Type Coercion Predictor"
Problem Statement:
Create a function that takes two values and an operator as input, and returns the result of the operation along with an explanation of any type coercion that occurred.
Function Signature:
javascriptCopyfunction coercionPredictor(val1, val2, operator) {
  // Your code here
}
Input:

val1 and val2 (any two values)
operator (a string: '+', '-', '*', '/', '==', or '===')

Output:

An object containing the result and an explanation of type coercion

Example:

Input: val1 = "5", val2 = 2, operator = "*"
Output: { result: 10, explanation: "String '5' was coerced to number 5 for multiplication" }