# Code Challenge: Server Configuration with Advanced Destructuring

## Problem Statement

Server configuration management often requires handling default values and merging user-provided settings with system defaults. This challenge explores advanced destructuring techniques including default values, variable renaming, and config merging - essential skills for robust application configuration.

This challenge introduces advanced destructuring concepts in JavaScript, particularly useful in configuration management, API defaults, and system settings. These patterns are commonly used in real-world applications where flexible, maintainable configuration handling is crucial.

## Function Signature

```javascript
const setupServer = (userConfig = {}) => {
    // TODO: Return a configuration object with:
    // - All required server settings
    // - Default values for missing properties
    // - Renamed properties where specified
    return {
        serverHost: '',
        serverPort: 0,
        timeout: 0,
        maxRetries: 0,
        secure: false
    };
};
```

## Input

- `userConfig`: An object that may contain:
  - host (string)
  - port (number)
  - timeout (number)
  - retries (number)
  - ssl (boolean)

## Output

An object containing:
- `serverHost`: String (renamed from host)
- `serverPort`: Number (renamed from port)
- `timeout`: Number
- `maxRetries`: Number (renamed from retries)
- `secure`: Boolean (renamed from ssl)

## Example

### Input:
```javascript
const userConfig = {
    host: "example.com",
    port: 8080,
    timeout: 3000,
    retries: 5,
    ssl: true
};
```

### Output:
```javascript
{
    serverHost: "example.com",
    serverPort: 8080,
    timeout: 3000,
    maxRetries: 5,
    secure: true
}
```

## Constraints

- All numeric values must be positive
- Host must be a non-empty string
- Port must be between 0 and 65535
- Timeout must be at least 1000ms
- Retries must be at least 1

## Testing the Script

```javascript
// Test with default values
console.log(setupServer());

// Test with partial configuration
console.log(setupServer({ 
    host: "example.com", 
    port: 8080 
}));

// Test with complete configuration
console.log(setupServer({
    host: "example.com",
    port: 8080,
    timeout: 3000,
    retries: 5,
    ssl: true
}));
```

## Bonus Challenge

1. Add validation for input values
2. Implement deep merging for nested configuration objects
3. Add environment-specific default values

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Advanced destructuring in JavaScript includes several powerful features:

1. Default Values: Providing fallbacks when properties don't exist
2. Variable Renaming: Assigning properties to differently named variables
3. Nested Defaults: Handling complex nested objects
4. Config Merging: Combining user and default settings

### Step 2: Implementing the Functions

Method 1: Using Single-Line Destructuring with Defaults
```javascript
const setupServer = (userConfig = {}) => {
    const {
        host: serverHost = "localhost",
        port: serverPort = 3000,
        timeout = 5000,
        retries: maxRetries = 3,
        ssl: secure = false
    } = userConfig;

    return {
        serverHost,
        serverPort,
        timeout,
        maxRetries,
        secure
    };
};
```

Method 2: Using Object Spread with Explicit Defaults
```javascript
const setupServer = (userConfig = {}) => {
    const defaultConfig = {
        serverHost: "localhost",
        serverPort: 3000,
        timeout: 5000,
        maxRetries: 3,
        secure: false
    };

    const {
        host,
        port,
        timeout,
        retries,
        ssl
    } = userConfig;

    return {
        serverHost: host ?? defaultConfig.serverHost,
        serverPort: port ?? defaultConfig.serverPort,
        timeout: timeout ?? defaultConfig.timeout,
        maxRetries: retries ?? defaultConfig.maxRetries,
        secure: ssl ?? defaultConfig.secure
    };
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Default configuration test:
   - Input: `setupServer()`
   - Expected Output: All default values

2. Partial configuration test:
   - Input: `setupServer({ host: "example.com", port: 8080 })`
   - Expected Output: Mixed user and default values

3. Full configuration test:
   - Input: Complete user configuration
   - Expected Output: All user-provided values

## Time and Space Complexity

- Time Complexity: O(1) for basic destructuring
- Space Complexity: O(1) as we create a fixed-size object

The complexity is constant because we're working with a fixed number of properties.

## References

- [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN Nullish Coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

## Related Problems

- Environment Configuration: Managing different environment settings
- API Client Configuration: Setting up API clients with defaults
- Database Connection Config: Managing database connection parameters

## Key Takeaways

- Advanced destructuring can make configuration handling more elegant
- Default values provide fallbacks for missing properties
- Variable renaming helps maintain clean interfaces
- Understanding the difference between undefined and null in defaults
- Real-world applications in configuration management

## Notes

- Consider using TypeScript for better type safety in configuration
- Be careful with falsy values when using default values
- The nullish coalescing operator (??) can be better than || for defaults
- This pattern is commonly used in Node.js applications and frontend frameworks
