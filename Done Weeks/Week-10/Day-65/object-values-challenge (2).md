# Code Challenge: Analyzing Inventory with Object.values()

## Problem Statement

Working with inventory systems and product catalogs is a common task in real-world programming. This challenge focuses on using `Object.values()` to analyze a product inventory system and extract meaningful insights about the products and their prices.

This challenge introduces you to the practical application of `Object.values()` in JavaScript, teaching you how to process numerical values stored in objects. This is particularly useful in business applications, data analysis, and e-commerce systems where analyzing values (like prices, quantities, or ratings) is a frequent requirement.

## Function Signature

```javascript
const analyzeInventory = (inventory) => {
    // TODO: Return an object containing:
    // - total: sum of all prices
    // - mostExpensive: highest priced item and its price
    // - affordableItems: array of items under $50
    return {
        total: 0,
        mostExpensive: { item: '', price: 0 },
        affordableItems: []
    };
};
```

## Input

- `inventory`: An object where:
  - Keys are product names (strings)
  - Values are prices (numbers)

## Output

An object containing:
- `total`: Number (sum of all prices)
- `mostExpensive`: Object with `item` (string) and `price` (number)
- `affordableItems`: Array of strings (items under $50)

## Example

### Input:
```javascript
const productInventory = {
    laptop: 1200,
    smartphone: 800,
    headphones: 100,
    charger: 30,
    case: 25
};
```

### Output:
```javascript
{
    total: 2155,
    mostExpensive: { item: "laptop", price: 1200 },
    affordableItems: ["charger", "case"]
}
```

## Constraints

- All prices must be positive numbers
- The inventory object must contain at least one item
- Product names must be strings
- Prices should be treated as whole numbers representing dollars

## Testing the Script

```javascript
const productInventory = {
    laptop: 1200,
    smartphone: 800,
    headphones: 100,
    charger: 30,
    case: 25
};

console.log(analyzeInventory(productInventory));
```

## Bonus Challenge

1. Add a feature to calculate the average price of items
2. Find items within a specific price range
3. Group items by price categories (budget: <$50, mid-range: $50-$500, premium: >$500)

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Object.values() returns an array containing all values of an object's own enumerable properties. Key concepts to understand:

1. Value Extraction: Getting all values from an object without their keys
2. Array Methods: Using reduce(), filter(), and Math.max() with the extracted values
3. Object Iteration: How to match values back to their corresponding keys

### Step 2: Implementing the Functions

Method 1: Using Array Methods
```javascript
const analyzeInventory = (inventory) => {
    const entries = Object.entries(inventory);
    return {
        total: Object.values(inventory).reduce((sum, price) => sum + price, 0),
        mostExpensive: entries.reduce(
            (max, [item, price]) => 
                price > max.price ? { item, price } : max,
            { item: '', price: 0 }
        ),
        affordableItems: entries
            .filter(([_, price]) => price < 50)
            .map(([item]) => item)
    };
};
```

Method 2: Using Traditional Loops
```javascript
const analyzeInventory = (inventory) => {
    let total = 0;
    let mostExpensive = { item: '', price: 0 };
    let affordableItems = [];

    for (const [item, price] of Object.entries(inventory)) {
        total += price;
        
        if (price > mostExpensive.price) {
            mostExpensive = { item, price };
        }
        
        if (price < 50) {
            affordableItems.push(item);
        }
    }

    return { total, mostExpensive, affordableItems };
};
```

### Step 3: Testing the Functions

**Test Cases**

1. Regular inventory test:
   - Input: The product inventory object shown above
   - Expected Output: `{ total: 2155, mostExpensive: { item: "laptop", price: 1200 }, affordableItems: ["charger", "case"] }`

2. Single item test:
   - Input: `{ product: 100 }`
   - Expected Output: `{ total: 100, mostExpensive: { item: "product", price: 100 }, affordableItems: [] }`

3. All affordable items test:
   - Input: `{ item1: 20, item2: 30, item3: 40 }`
   - Expected Output: `{ total: 90, mostExpensive: { item: "item3", price: 40 }, affordableItems: ["item1", "item2", "item3"] }`

## Time and Space Complexity

- Time Complexity: O(n) where n is the number of products in the inventory
- Space Complexity: O(n) to store the arrays of values and affordable items

The complexity is linear because we need to iterate through all items once to calculate all required values.

## References

- [MDN Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [MDN Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

## Related Problems

- Price Analysis: Finding discounted prices or calculating sales tax
- Inventory Management: Tracking stock levels and reorder points
- Statistical Analysis: Calculating median prices, price ranges, or price distribution

## Key Takeaways

- Object.values() is useful for extracting and analyzing object values
- Combining Object.values() with array methods creates powerful data analysis tools
- Understanding how to match values back to their keys using Object.entries()
- Real-world applications of object manipulation in inventory systems

## Notes

- Consider using Object.entries() when you need both keys and values
- Remember that Object.values() returns values in the same order as Object.keys()
- When working with prices, consider using appropriate data types for currency calculations
- This pattern is commonly used in e-commerce and inventory management systems
