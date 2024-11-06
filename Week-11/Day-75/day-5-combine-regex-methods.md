# Code Challenge: Validate and Extract Data from a Contact Form

## Problem Statement

This challenge focuses on combining multiple regular expression methods to validate and extract data from a contact form. The goal is to create a `processContactForm()` function that can:

1. Validate the email address using the `test()` method,
2. Extract the phone number using the `match()` method, and
3. Replace any "bad words" in the message using the `replace()` method.

The input `formData` object contains a name, email, phone, and message. Your task is to use regular expressions and a combination of the `test()`, `match()`, and `replace()` methods to process the form data.

## Function Signature

```javascript
function processContactForm(data) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /\+?(\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/;
  const badWordsRegex = /\b(bad|hate|angry)\b/gi;

  const isEmailValid = emailRegex.test(data.email);
  const phoneMatch = data.phone.match(phoneRegex);
  const cleanedMessage = data.message.replace(badWordsRegex, "**censored**");

  return {
    isEmailValid,
    phoneNumber: phoneMatch ? phoneMatch[0] : null,
    message: cleanedMessage
  };
}
```

## Input

- `data`: An object containing the form data, with properties `name`, `email`, `phone`, and `message`.

## Output

The `processContactForm()` function returns an object with the following properties:
- `isEmailValid`: A boolean indicating whether the email address is valid.
- `phoneNumber`: The phone number extracted from the `phone` field, or `null` if the format is invalid.
- `message`: The message with any "bad words" replaced with `"**censored**"`.

## Example

### Input:

```javascript
const formData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  message: "Hello, I'd like to inquire about your services."
};
```

### Output:

```javascript
{
  isEmailValid: true,
  phoneNumber: "+1 (555) 123-4567",
  message: "Hello, I'd like to inquire about your services."
}
```

## Constraints

- The email address must be in a valid format.
- The phone number must be in a valid international format (e.g., "+1 (555) 123-4567").
- The "bad words" to be replaced are: "bad", "hate", and "angry" (case-insensitive).

## Testing the Script

You can test the `processContactForm()` function by calling it with the provided `formData` object and checking the output:

```javascript
console.log(processContactForm(formData));
// Output: { isEmailValid: true, phoneNumber: '+1 (555) 123-4567', message: 'Hello, I'd like to inquire about your services.' }
```

You can also test the function with invalid form data to ensure it handles errors correctly:

```javascript
console.log(processContactForm({
  name: "John Doe",
  email: "invalid@email",
  phone: "555-1234-5678",
  message: "I hate this service!"
}));
// Output: { isEmailValid: false, phoneNumber: null, message: 'I **censored** this service!' }
```

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

The main goal of this challenge is to use a combination of regular expression methods to validate and extract data from a contact form.

We'll need to use the following regular expressions:

1. `emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/`: This regex matches a valid email address.
2. `phoneRegex = /\+?(\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/`: This regex matches a phone number in various international formats.
3. `badWordsRegex = /\b(bad|hate|angry)\b/gi`: This regex matches the "bad words" (case-insensitive) that need to be replaced in the message.

We'll use the `test()` method to validate the email address, the `match()` method to extract the phone number, and the `replace()` method to censor the "bad words" in the message.

### Step 2: Implementing the Functions

The `processContactForm()` function p