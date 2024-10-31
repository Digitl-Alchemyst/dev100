# Code Challenge: Configurable Application Settings with Object Methods

## Problem Statement

Many applications require user-configurable settings to provide a personalized experience. This challenge focuses on building a `ConfigManager` class that leverages various object methods to efficiently manage, retrieve, and validate configuration data.

This challenge introduces the use of object-oriented programming (OOP) and the application of Object.assign(), Object.keys(), Object.entries(), and destructuring to create a flexible and maintainable configuration management system. These skills are particularly valuable in building robust, scalable, and user-centric applications.

## Class Signature

```javascript
class ConfigManager {
    constructor(defaultConfig = {}) {
        this.config = {
            theme: "light",
            language: "en",
            notifications: true,
            autoSave: false,
            ...defaultConfig
        };
    }

    updateConfig(newSettings) {
        // TODO: Implement this method
    }

    getSettings(...keys) {
        // TODO: Implement this method
    }

    validateConfig() {
        // TODO: Implement this method
    }
}
```

## Methods

1. `updateConfig(newSettings)`:
   - Merges the provided `newSettings` object with the current configuration
   - Uses object destructuring to update multiple settings at once

2. `getSettings(...keys)`:
   - Returns an object containing the values for the specified configuration keys
   - Uses the rest parameter syntax and Object.fromEntries() to create the output object

3. `validateConfig()`:
   - Checks the current configuration for any invalid or missing values
   - Uses Object.entries() to iterate over the configuration and perform validation
   - Returns an object with validation results

## Example Usage

```javascript
// Create a new ConfigManager instance with default settings
const manager = new ConfigManager();

// Update multiple settings at once
manager.updateConfig({ theme: "dark", autoSave: true });

// Get specific settings
console.log(manager.getSettings("theme", "autoSave"));
// Output: { theme: "dark", autoSave: true }

// Validate the configuration
console.log(manager.validateConfig());
// Output: { valid: true }
```

## Constraints

- All configuration settings must have a default value
- Theme and language must be valid strings
- Notifications and autoSave must be boolean values
- Configuration updates must not affect unrelated settings

## Bonus Challenges

1. Add a method to reset the configuration to default values
2. Implement a method to listen for configuration changes
3. Add support for nested configuration objects

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

This challenge focuses on the following key concepts:

1. Object-Oriented Programming (OOP): Encapsulating configuration management within a class
2. Object Merging: Using Object.assign() or the spread operator to update configuration
3. Selective Property Retrieval: Leveraging Object.keys() and Object.fromEntries()
4. Validation: Iterating over configuration using Object.entries()

### Step 2: Implementing the Methods

Method 1: Using Object.assign() and Destructuring
```javascript
class ConfigManager {
    constructor(defaultConfig = {}) {
        this.config = {
            theme: "light",
            language: "en",
            notifications: true,
            autoSave: false,
            ...defaultConfig
        };
    }

    updateConfig(newSettings) {
        this.config = { ...this.config, ...newSettings };
    }

    getSettings(...keys) {
        return Object.fromEntries(keys.map(key => [key, this.config[key]]));
    }

    validateConfig() {
        const validations = {
            theme: typeof this.config.theme === "string",
            language: typeof this.config.language === "string",
            notifications: typeof this.config.notifications === "boolean",
            autoSave: typeof this.config.autoSave === "boolean"
        };

        return {
            valid: Object.values(validations).every(Boolean),
            ...validations
        };
    }
}
```

Method 2: Using Explicit Assignments
```javascript
class ConfigManager {
    constructor(defaultConfig = {}) {
        this.config = {
            theme: "light",
            language: "en",
            notifications: true,
            autoSave: false,
            ...defaultConfig
        };
    }

    updateConfig(newSettings) {
        const { theme, language, notifications, autoSave } = { ...this.config, ...newSettings };
        this.config = { theme, language, notifications, autoSave };
    }

    getSettings(...keys) {
        const settings = {};
        for (const key of keys) {
            settings[key] = this.config[key];
        }
        return settings;
    }

    validateConfig() {
        const validations = {
            theme: typeof this.config.theme === "string",
            language: typeof this.config.language === "string",
            notifications: typeof this.config.notifications === "boolean",
            autoSave: typeof this.config.autoSave === "boolean"
        };

        return {
            valid: Object.values(validations).every(Boolean),
            ...validations
        };
    }
}
```

### Step 3: Testing the Methods

**Test Cases**

1. Basic configuration test:
   - Create a new `ConfigManager` instance
   - Update the configuration
   - Get and validate the settings

2. Default configuration test:
   - Create a `ConfigManager` instance with default config
   - Validate the initial configuration

3. Invalid configuration test:
   - Create a `ConfigManager` instance with invalid settings
   - Validate the configuration and check the results

## Time and Space Complexity

- Time Complexity:
  - `updateConfig()`: O(1) for object merge
  - `getSettings()`: O(k) where k is the number of requested settings
  - `validateConfig()`: O(1) for fixed-size configuration
- Space Complexity:
  - `updateConfig()`: O(1) as we're not creating new data structures
  - `getSettings()`: O(k) to store the returned settings
  - `validateConfig()`: O(1) as we're only storing the validation results

## References

- [MDN Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Related Problems

- Application Settings Management: Handling user preferences and configurations
- Dynamic Configuration: Updating settings based on user input or external data
- Configuration Validation: Ensuring configuration integrity and consistency

## Key Takeaways

- Encapsulating configuration management in a class promotes modularity
- Using object spread and Object.assign() simplifies configuration updates
- Selective property retrieval with Object.keys() and Object.fromEntries() improves flexibility
- Object.entries() enables efficient configuration validation
- Real-world applications in user-centric software development

## Notes

- Consider adding events or callbacks for configuration change notifications
- Explore ways to handle nested configuration objects or arrays
- Validate input data types to ensure consistency and prevent errors
- This pattern is commonly used in web applications, desktop apps, and mobile apps
