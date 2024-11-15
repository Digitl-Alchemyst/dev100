# Code Challenge: International Transaction Formatter

## Problem Statement

Create a function that formats transaction data for an international e-commerce platform. The function should handle date and number formatting across different locales, demonstrating how to properly format dates, currencies, and numbers for a global audience.

This challenge simulates real-world scenarios where developers need to present financial and temporal data in a user-friendly format across different regions and currencies.

## Function Signature

```javascript
const formatTransactionData = (transaction, locale = 'en-US') => {
    // Format dates and numbers for given transaction data
    // Return formatted data based on locale
}
```

## Input

An object containing transaction data:
```javascript
{
    transactionDate: "2024-03-15T14:30:00Z",  // ISO date string
    amount: 1234567.89,                       // Number
    quantity: 5,                              // Number
    unitPrice: 49.99,                         // Number
    taxRate: 0.21,                            // Number (21%)
    exchangeRate: 1.18                        // Number (EUR to USD)
}
```

## Output

An object containing formatted data:
```javascript
{
    dates: {
        short: string,      // e.g., "3/15/24"
        medium: string,     // e.g., "Mar 15, 2024"
        long: string,       // e.g., "March 15, 2024"
        time: string        // e.g., "2:30 PM"
    },
    numbers: {
        currency: string,   // e.g., "$1,234,567.89"
        quantity: string,   // e.g., "5"
        price: string,      // e.g., "$49.99"
        tax: string,        // e.g., "21%"
        exchange: string    // e.g., "1.18"
    }
}
```

## Example

### Input:
```javascript
formatTransactionData({
    transactionDate: "2024-03-15T14:30:00Z",
    amount: 1234567.89,
    quantity: 5,
    unitPrice: 49.99,
    taxRate: 0.21,
    exchangeRate: 1.18
}, 'en-US');
```

### Output:
```javascript
{
    dates: {
        short: "3/15/24",
        medium: "Mar 15, 2024",
        long: "March 15, 2024",
        time: "2:30 PM"
    },
    numbers: {
        currency: "$1,234,567.89",
        quantity: "5",
        price: "$49.99",
        tax: "21%",
        exchange: "1.18"
    }
}
```

## Implementation

```javascript
const formatTransactionData = (transaction, locale = 'en-US') => {
    // Parse the date
    const date = new Date(transaction.transactionDate);
    
    // Create formatters
    const dateFormatters = {
        short: new Intl.DateTimeFormat(locale, { 
            month: 'numeric', 
            day: 'numeric', 
            year: '2-digit' 
        }),
        medium: new Intl.DateTimeFormat(locale, { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        }),
        long: new Intl.DateTimeFormat(locale, { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        }),
        time: new Intl.DateTimeFormat(locale, { 
            hour: 'numeric', 
            minute: 'numeric' 
        })
    };

    const numberFormatters = {
        currency: new Intl.NumberFormat(locale, { 
            style: 'currency', 
            currency: 'USD' 
        }),
        decimal: new Intl.NumberFormat(locale, { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        }),
        percent: new Intl.NumberFormat(locale, { 
            style: 'percent', 
            minimumFractionDigits: 0 
        }),
        unit: new Intl.NumberFormat(locale, { 
            minimumFractionDigits: 0 
        })
    };

    return {
        dates: {
            short: dateFormatters.short.format(date),
            medium: dateFormatters.medium.format(date),
            long: dateFormatters.long.format(date),
            time: dateFormatters.time.format(date)
        },
        numbers: {
            currency: numberFormatters.currency.format(transaction.amount),
            quantity: numberFormatters.unit.format(transaction.quantity),
            price: numberFormatters.currency.format(transaction.unitPrice),
            tax: numberFormatters.percent.format(transaction.taxRate),
            exchange: numberFormatters.decimal.format(transaction.exchangeRate)
        }
    };
};
```

## Testing the Script

```javascript
// Test different locales
const testData = {
    transactionDate: "2024-03-15T14:30:00Z",
    amount: 1234567.89,
    quantity: 5,
    unitPrice: 49.99,
    taxRate: 0.21,
    exchangeRate: 1.18
};

console.log("US Format:", formatTransactionData(testData, 'en-US'));
console.log("UK Format:", formatTransactionData(testData, 'en-GB'));
console.log("German Format:", formatTransactionData(testData, 'de-DE'));
console.log("Japanese Format:", formatTransactionData(testData, 'ja-JP'));
```

## Bonus Challenges

1. Add time zone support:
```javascript
const formatWithTimeZone = (date, timeZone, locale) => {
    return new Intl.DateTimeFormat(locale, {
        timeZone,
        dateStyle: 'full',
        timeStyle: 'long'
    }).format(date);
};
```

2. Add currency conversion:
```javascript
const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
    return amount * rates[`${fromCurrency}_${toCurrency}`];
};
```

3. Add relative time formatting:
```javascript
const formatRelativeTime = (date, locale) => {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    const diff = (date - new Date()) / (1000 * 60 * 60 * 24);
    return rtf.format(Math.round(diff), 'day');
};
```

## Key Takeaways

1. Always use Intl formatters for locale-specific formatting
2. Store dates in ISO format internally
3. Consider time zones in date formatting
4. Use appropriate decimal places for different number types
5. Test with various locales to ensure proper formatting
6. Remember currency symbol placement varies by locale

## Common Gotchas

1. Date parsing variations across browsers
2. Time zone handling
3. Decimal separator differences
4. Currency symbol placement
5. Negative number formatting
6. Different calendar systems

This challenge demonstrates real-world date and number formatting while enforcing best practices for internationalization in web applications.