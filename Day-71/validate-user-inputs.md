# Code Challenge: Validate User Inputs using Regex and test()

## Problem Statement

This challenge focuses on validating user inputs using regular expressions (regex) and the `test()` method in JavaScript. The goal is to create a `validateForm()` function that checks the validity of an email address and a password based on predefined regex patterns.

The email address should follow the format `example@email.com`, while the password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.

## Function Signature

```javascript
function validateForm(email, password) {
  // TODO: Use the test() method to validate the email and password
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  return { isEmailValid, isPasswordValid };
}
```

## Input

- `email`: A string representing the user's email address.
- `password`: A string representing the user's password.

## Output

The `validateForm()` function returns an object with two properties:
- `isEmailValid`: A boolean indicating whether the email is valid.
- `isPasswordValid`: A boolean indicating whether the password is valid.

## Example

### Input:

```
"example@email.com", "ValidPassword123!"
```

### Output:

```
{ isEmailValid: true, isPasswordValid: true }
```

## Constraints

- The email address must follow the format `example@email.com`.
- The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.

## Testing the Script

You can test the `validateForm()` function by calling it with different input values and checking the output:

```javascript
console.log(validateForm("example@email.com", "ValidPassword123!")); // { isEmailValid: true, isPasswordValid: true }
console.log(validateForm("invalid@email", "weakpass")); // { isEmailValid: false, isPasswordValid: false }
```

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The main goal of this challenge is to validate user inputs, specifically an email address and a password, using regular expressions and the `test()` method in JavaScript.

The email address should follow the standard format `example@email.com`, which can be represented by the regular expression `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/`. This regex checks for the following:
- The local part (before the `@`) can contain letters, digits, underscores, hyphens, and periods.
- The domain part (after the `@`) can contain one or more subdomains, each of which can contain letters, digits, hyphens, and have 2 to 4 characters in the top-level domain.

The password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character. This can be represented by the regular expression `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/`. This regex checks for the following:
- The password must contain at least one lowercase letter (`(?=.*[a-z])`).
- The password must contain at least one uppercase letter (`(?=.*[A-Z])`).
- The password must contain at least one digit (`(?=.*\d)`).
- The password must contain at least one special character (`(?=.*[@$!%*?&])`).
- The password must be at least 8 characters long (`[A-Za-z\d@$!%*?&]{8,}`).

### Step 2: Implementing the Functions

The `validateForm()` function takes an email and a password as input, and returns an object with two properties: `isEmailValid` and `isPasswordValid`, each a boolean indicating the validity of the corresponding input.

The function uses the `test()` method to check if the email and password match the predefined regular expressions:

1. `const isEmailValid = emailRegex.test(email);`: This line checks if the provided email address matches the email regex pattern and stores the result (true or false) in the `isEmailValid` variable.
2. `const isPasswordValid = passwordRegex.test(password);`: This line checks if the provided password matches the password regex pattern and stores the result (true or false) in the `isPasswordValid` variable.
3. The function then returns an object with these two properties.

### Step 3: Testing the Functions

You can test the `validateForm()` function by calling it with different input values and checking the output. The example provided in the template demonstrates two test cases:

1. Test Case 1:
   - Input: `"example@email.com", "ValidPassword123!"`
   - Expected Output: `{ isEmailValid: true, isPasswordValid: true }`

2. Test Case 2:
   - Input: `"invalid@email", "weakpass"`
   - Expected Output: `{ isEmailValid: false, isPasswordValid: false }`

You can add more test cases as needed to ensure the function works correctly for various input scenarios.

## Time and Space Complexity

- Time Complexity: O(1)
  - The time complexity of the `validateForm()` function is constant, as the regex matching and `test()` method operations have a fixed time complexity regardless of the input size.

- Space Complexity: O(1)
  - The function only creates a few constant-sized variables (the two boolean flags), so the space complexity is also constant.

## References

- [Regular Expressions (RegEx) in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [test() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

## Related Problems

- [Validate Email Address](https://www.hackerrank.com/challenges/validate-email-address/problem)
- [Strong Password](https://www.hackerrank.com/challenges/strong-password/problem)

## Key Takeaways

- Regular expressions are a powerful tool for pattern matching in strings, including validating user inputs.
- The `test()` method is used to check if a string matches a given regular expression pattern.
- Combining regex patterns and the `test()` method can help you quickly validate complex input requirements, such as email addresses and passwords.
- Understanding how to use regex and the `test()` method is a valuable skill for any JavaScript developer.

## Notes

This challenge focuses on the basics of input validation, which is an essential skill for any web application developer. By mastering the use of regular expressions and the `test()` method, you can build robust and secure form validation logic in your projects.

