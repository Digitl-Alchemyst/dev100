//Declare the input value
const input = 35345;

//Define the math function using a while loop
function addBefore(num) {

    // Initialize variables at 0 
    // x = the result of each count
    // n = the number to add to our previous result
    let n = 0
    let x = 0
    
// WHILE the number to add is less than the input number run the loop
while (n < num) {
    //Increase the number to add by 1
  n++;
  // Add the number to add to the previous result
  x += n;
}
// Return the final result of x once n is = num
 return x
}

//Call the function with the input number and store the result in a variable
const result = addBefore(input)

//Print the result to the console
console.log(`The sum of all numbers before ${input} is equal to:`, result)