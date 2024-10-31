# Code Challenge: Weather Data Processing with Object.entries()

## Problem Statement

Weather data processing is a common programming task that involves transforming, filtering, and formatting temperature data. This challenge focuses on using `Object.entries()` to manipulate weather data in various ways, including temperature conversion and data formatting.

This challenge introduces practical applications of `Object.entries()` in JavaScript, demonstrating how to work with key-value pairs simultaneously. It's particularly relevant for data processing tasks where you need to access both the keys (days) and values (temperatures) of an object while transforming the data.

## Function Signature

```javascript
const processWeatherData = (data) => {
    // TODO: Return an object containing:
    // - celsiusData: object with temperatures in Celsius
    // - warmDays: object with days above 72°F
    // - formatted: array of "Day: Temperature" strings
    return {
        celsiusData: {},
        warmDays: {},
        formatted: []
    };
};
```

## Input

- `data`: An object where:
  - Keys are days of the week (strings)
  - Values are temperatures in Fahrenheit (numbers)

## Output

An object containing:
- `celsiusData`: Object with temperatures converted to Celsius
- `warmDays`: Object with days where temperature > 72°F
- `formatted`: Array of strings in "Day: Temperature°F" format

## Example

### Input:
```javascript
const weatherData = {
    monday: 72,
    tuesday: 68,
    wednesday: 75,
    thursday: 70,
    friday: 73,
    saturday: 78,
    sunday: 76
};
```

### Output:
```javascript
{
    celsiusData: {
        monday: 22.2,
        tuesday: 20.0,
        wednesday: 23.9,
        thursday: 21.1,
        friday: 22.8,
        saturday: 25.6,
        sunday: 24.4
    },
    warmDays: {
        wednesday: 75,
        friday: 73,
        saturday: 78,
        sunday: 76
    },
    formatted: [
        "Monday: 72°F",
        "Tuesday: 68°F",
        "Wednesday: 75°F",
        "Thursday: 70°F",
        "Friday: 73°F",
        "Saturday: 78°F",
        "Sunday: 76°F"
    ]
}
```

## Constraints

- All temperatures must be numbers
- Celsius temperatures should be rounded to 1 decimal place
- Day names should be properly capitalized in the formatted output
- The weather data object must contain at least one day
- Temperature values must be valid numbers

## Testing the Script

```javascript
const weatherData = {
    monday: 72,
    tuesday: 68,
    wednesday: 75,
    thursday: 70,
    friday: 73,
    saturday: 78,
    sunday: 76
};

console.log(processWeatherData(weatherData));
```

## Bonus Challenge

1. Add average temperature calculation in both Fahrenheit and Celsius
2. Find the temperature range (min/max) for the week
3. Group days by temperature ranges (cold: <70°F, mild: 70-75°F, hot: >75°F)

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs. Key concepts to understand:

1. Temperature Conversion: °C = (°F - 32) × 5/9
2. Array Destructuring: Working with [key, value] pairs
3. Object Transformation: Converting between objects and arrays
4. String Formatting: Capitalizing first letters and adding symbols

### Step 2: Implementing the Functions

Method 1: Using Array Methods with Object.entries()
```javascript
const processWeatherData = (data) => {
    const entries = Object.entries(data);
    
    const toCelsius = (fahrenheit) => 
        Number(((fahrenheit - 32) * 5/9).toFixed(1));
    
    const capitalize = (str) => 
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    
    return {
        celsiusData: Object.fromEntries(
            entries.map(([day, temp]) => [day, toCelsius(temp)])
        ),
        warmDays: Object.fromEntries(
            entries.filter(([_, temp]) => temp > 72)
        ),
        formatted: entries.map(([day, temp]) => 
            `${capitalize(day)}: ${temp}°F`
        )
    };
};
```

Method 2: Using Traditional Loops
```javascript
const processWeatherData = (data) => {
    const result = {
        celsiusData: {},
        warmDays: {},
        formatted: []
    };
    
    for (const [day, temp] of Object.entries(data)) {
        // Convert to Celsius
        result.celsiusData[day] = Number(((temp - 32) * 5/9).toFixed(1));
        
        // Filter warm days
        if (temp > 72) {
            result.warmDays[day] = temp;
        }
        
        // Format string
        const capitalizedDay = day.charAt(0).toUpperCase() + 
            day.slice(1).toLowerCase();
        result.formatted.push(`${capitalizedDay}: ${temp}°F`);
    }
    
    return result;
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Regular weather data test:
   - Input: The weather data object shown above
   - Expected Output: Full processed data with all three sections

2. Single day test:
   - Input: `{ monday: 70 }`
   - Expected Output: Processed data with one entry in each section

3. All warm days test:
   - Input: `{ monday: 75, tuesday: 80 }`
   - Expected Output: Equal entries in data and warmDays objects

## Time and Space Complexity

- Time Complexity: O(n) where n is the number of days in the weather data
- Space Complexity: O(n) to store the processed data structures

The complexity is linear because we need to process each day's data exactly once.

## References

- [MDN Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
- [MDN Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Related Problems

- Temperature Data Analysis: Finding temperature trends and patterns
- Data Format Conversion: Converting between different data formats
- Weather Statistics: Calculating weather averages and extremes

## Key Takeaways

- Object.entries() provides a powerful way to access both keys and values
- Data transformation often involves multiple steps and different output formats
- Understanding temperature conversion and number formatting
- Practical applications of object and array methods in data processing

## Notes

- Consider using Object.fromEntries() to convert arrays back to objects
- Pay attention to number precision when converting temperatures
- String formatting is important for readable output
- This pattern is commonly used in data processing and API responses
