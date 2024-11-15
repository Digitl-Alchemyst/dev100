# Code Challenge: Data Validation with Type Coercion

## Problem Statement

Create a function that processes and validates user form data, demonstrating practical applications of JavaScript type coercion. Your function will handle common data processing scenarios where type coercion occurs naturally in web applications.

This challenge simulates real-world scenarios where developers need to handle mixed data types from form inputs, API responses, and data processing, while understanding how JavaScript's type coercion affects the results.

## Function Signature

```javascript
const validateFormData = (formData) => {
    // Process and validate form data with type coercion handling
    // Return validation results and processed data
}
```

## Input

An object containing form data with potentially mixed types:
```javascript
{
    userId: "123",          // String that should be a number
    quantity: "5",          // String that should be a number
    price: 19.99,          // Number
    isSubscribed: "true",   // String that should be boolean
    promoCode: "",         // Empty string
    discountPercent: "10"  // String that should be a number
}
```

## Output

An object containing validation results and processed data:
```javascript
{
    isValid: boolean,
    processedData: {
        userId: number,
        quantity: number,
        price: number,
        isSubscribed: boolean,
        promoCode: string,
        discountPercent: number
    },
    validationErrors: string[],
    calculatedTotals: {
        subtotal: number,
        discount: number,
        total: number
    }
}
```

## Example

### Input:
```javascript
validateFormData({
    userId: "123",
    quantity: "5",
    price: 19.99,
    isSubscribed: "true",
    promoCode: "",
    discountPercent: "10"
});
```

### Output:
```javascript
{
    isValid: true,
    processedData: {
        userId: 123,
        quantity: 5,
        price: 19.99,
        isSubscribed: true,
        promoCode: "",
        discountPercent: 10
    },
    validationErrors: [],
    calculatedTotals: {
        subtotal: 99.95,
        discount: 9.995,
        total: 89.955
    }
}
```

## Testing the Script

```javascript
// Test Case 1: Valid input
const validData = {
    userId: "123",
    quantity: "5",
    price: 19.99,
    isSubscribed: "true",
    promoCode: "",
    discountPercent: "10"
};

// Test Case 2: Invalid input
const invalidData = {
    userId: "abc",
    quantity: "five",
    price: "19.99x",
    isSubscribed: "yes",
    promoCode: null,
    discountPercent: "ten"
};

console.log(validateFormData(validData));
console.log(validateFormData(invalidData));
```

## Implementation

```javascript
const validateFormData = (formData) => {
    const validationErrors = [];
    const processedData = {};
    
    // Process userId
    processedData.userId = +formData.userId;
    if (isNaN(processedData.userId)) {
        validationErrors.push("Invalid user ID");
    }
    
    // Process quantity
    processedData.quantity = +formData.quantity;
    if (isNaN(processedData.quantity) || processedData.quantity <= 0) {
        validationErrors.push("Invalid quantity");
    }
    
    // Process price
    processedData.price = +formData.price;
    if (isNaN(processedData.price) || processedData.price <= 0) {
        validationErrors.push("Invalid price");
    }
    
    // Process subscription status
    processedData.isSubscribed = formData.isSubscribed == true;
    
    // Process promo code
    processedData.promoCode = formData.promoCode ?? "";
    
    // Process discount
    processedData.discountPercent = +formData.discountPercent;
    if (isNaN(processedData.discountPercent)) {
        validationErrors.push("Invalid discount");
    }
    
    // Calculate totals
    const calculatedTotals = {
        subtotal: processedData.quantity * processedData.price,
        discount: 0,
        total: 0
    };
    
    calculatedTotals.discount = calculatedTotals.subtotal * (processedData.discountPercent / 100);
    calculatedTotals.total = calculatedTotals.subtotal - calculatedTotals.discount;
    
    return {
        isValid: validationErrors.length === 0,
        processedData,
        validationErrors,
        calculatedTotals
    };
};
```

## Key Concepts Demonstrated

1. Numeric Coercion:
   - Using unary plus (+) to convert strings to numbers
   - Handling NaN cases
   - Dealing with decimal precision

2. Boolean Coercion:
   - Converting string "true"/"false" to boolean
   - Using loose equality (==) for boolean comparison
   - Handling truthy/falsy values

3. String Coercion:
   - Handling empty strings
   - Nullish coalescing for default values
   - String concatenation vs numeric addition

4. Validation Logic:
   - Type checking
   - Error collection
   - Data processing

## Bonus Challenges

1. Add currency formatting:
```javascript
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};
```

2. Add tax calculation:
```javascript
const calculateTax = (amount, rate = 0.1) => {
    return +(amount * rate).toFixed(2);
};
```

3. Add date validation:
```javascript
const validateDate = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
};
```

## Key Takeaways

1. Always validate numeric inputs before calculations
2. Use explicit type conversion when possible
3. Handle edge cases for empty/null values
4. Consider decimal precision in financial calculations
5. Collect all validation errors rather than failing fast
6. Use appropriate comparison operators based on requirements

This challenge demonstrates type coercion in a practical context while reinforcing good practices for data validation and processing in real-world applications.