// Week 10: Object Methods and Destructuring Challenges

// Day 1: Object.keys()
// Challenge: Working with Object Keys
const student = {
    id: "ST101",
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Physics", "English"]
};

// TODO: 
// 1. Get all property names from the student object
// 2. Count the number of properties
// 3. Create a function that checks if a given property exists
function analyzeObjectKeys(obj, searchKey) {
    // Your code here
}

// Test cases
console.log(Object.keys(student));
console.log(analyzeObjectKeys(student, "grade")); // Should return true
console.log(analyzeObjectKeys(student, "address")); // Should return false

// Day 2: Object.values()
// Challenge: Analyzing Object Values
const productInventory = {
    laptop: 1200,
    smartphone: 800,
    headphones: 100,
    charger: 30,
    case: 25
};

// TODO:
// 1. Calculate the total value of inventory
// 2. Find the most expensive item
// 3. List all items under $50
function analyzeInventory(inventory) {
    const values = Object.values(inventory);
    // Your code here
}

// Test the function
console.log(analyzeInventory(productInventory));

// Day 3: Object.entries()
// Challenge: Transform and Filter Object Data
const weatherData = {
    monday: 72,
    tuesday: 68,
    wednesday: 75,
    thursday: 70,
    friday: 73,
    saturday: 78,
    sunday: 76
};

// TODO:
// 1. Convert temperatures from Fahrenheit to Celsius
// 2. Create an object with only days above 72°F
// 3. Format the data into an array of strings: "Day: Temperature"
function processWeatherData(data) {
    // Your code here using Object.entries()
}

// Test the function
console.log(processWeatherData(weatherData));

// Day 4: Basic Destructuring
// Challenge: Object and Array Destructuring
const company = {
    name: "Tech Corp",
    location: {
        city: "San Francisco",
        country: "USA"
    },
    departments: ["Engineering", "Marketing", "Sales"],
    founders: [
        { name: "Jane Smith", role: "CEO" },
        { name: "Mike Johnson", role: "CTO" }
    ]
};

// TODO:
// 1. Extract company name and city using destructuring
// 2. Get the first department and remaining departments separately
// 3. Extract CEO's name using nested destructuring
function extractCompanyInfo(companyData) {
    // Your code here using destructuring
}

// Test the function
console.log(extractCompanyInfo(company));

// Day 5: Advanced Destructuring
// Challenge: Destructuring with Default Values and Renaming
const serverConfig = {
    host: "localhost",
    port: 3000,
    timeout: 5000,
    retries: 3
};

// TODO:
// 1. Destructure with default values
// 2. Rename variables while destructuring
// 3. Create a function that merges configs with defaults
function setupServer(userConfig = {}) {
    // Your code here using destructuring with defaults
}

// Test cases
console.log(setupServer());
console.log(setupServer({ host: "example.com", port: 8080 }));

// Day 6: Combining Methods
// Challenge: Use Multiple Object Methods Together
const employees = {
    emp101: { name: "Alice", department: "Engineering", salary: 85000 },
    emp102: { name: "Bob", department: "Marketing", salary: 75000 },
    emp103: { name: "Charlie", department: "Engineering", salary: 90000 },
    emp104: { name: "Diana", department: "Sales", salary: 80000 }
};

// TODO:
// 1. Group employees by department
// 2. Calculate average salary per department
// 3. Find highest paid employee in each department
function analyzeEmployeeData(employeesData) {
    // Your code here using Object.entries(), Object.values(), and destructuring
}

// Test the function
console.log(analyzeEmployeeData(employees));

// Day 7: <name this one based on concepts>
// Challenge: <name this one>
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

    // TODO:
    // 1. Method to update multiple settings at once using destructuring
    updateConfig(newSettings) {
        // Your code here
    }

    // 2. Method to get specific settings using Object methods
    getSettings(...keys) {
        // Your code here
    }

    // 3. Method to validate configuration using Object.entries()
    validateConfig() {
        // Your code here
    }
}

// Test the ConfigManager
const manager = new ConfigManager();
manager.updateConfig({ theme: "dark", autoSave: true });
console.log(manager.getSettings("theme", "autoSave"));
console.log(manager.validateConfig());
