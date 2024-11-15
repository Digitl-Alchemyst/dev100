class DataValidator {
  constructor(schema) {
    this.schema = schema;
    this.patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      url: /^https?:\/\/.+/,
      phone: /^\+?[\d\s-]{10,}$/,
    };
  }

  validate(data) {
    const errors = [];
    const convertedData = {};

    for (const [field, rules] of Object.entries(this.schema)) {
      try {
        const value = data[field];

        // Check required fields
        if (rules.required && (value === undefined || value === null)) {
          errors.push(`${field} is required`);
          continue;
        }

        // Skip undefined optional fields
        if (value === undefined) continue;

        // Validate and convert value
        const convertedValue = this.validateField(field, value, rules);
        if (convertedValue !== undefined) {
          convertedData[field] = convertedValue;
        }
      } catch (error) {
        errors.push(`${field}: ${error.message}`);
      }
    }

    return {
      isValid: errors.length === 0,
      convertedData,
      errors,
    };
  }

  validateField(field, value, rules) {
    switch (rules.type) {
      case "string":
        return this.validateString(field, value, rules);
      case "number":
        return this.validateNumber(field, value, rules);
      case "boolean":
        return this.validateBoolean(field, value);
      case "date":
        return this.validateDate(field, value);
      case "array":
        return this.validateArray(field, value, rules);
      case "object":
        return this.validateObject(field, value, rules);
      default:
        throw new Error(`Unknown type: ${rules.type}`);
    }
  }

  validateString(field, value, rules) {
    const strValue = String(value);

    if (rules.min && strValue.length < rules.min) {
      throw new Error(`must be at least ${rules.min} characters`);
    }

    if (rules.max && strValue.length > rules.max) {
      throw new Error(`must be at most ${rules.max} characters`);
    }

    if (rules.pattern && this.patterns[rules.pattern]) {
      if (!this.patterns[rules.pattern].test(strValue)) {
        throw new Error(`invalid ${rules.pattern} format`);
      }
    }

    return strValue;
  }
    
  validateNumber(field, value, rules) {
    const numValue = Number(value);

    if (isNaN(numValue)) {
      throw new Error("must be a number");
    }

    if (rules.min !== undefined && numValue < rules.min) {
      throw new Error(`must be at least ${rules.min}`);
    }

    if (rules.max !== undefined && numValue > rules.max) {
      throw new Error(`must be at most ${rules.max}`);
    }

    return numValue;
  }

  validateBoolean(field, value) {
    if (typeof value === "string") {
      return value.toLowerCase() === "true";
    }
    return Boolean(value);
  }

  validateDate(field, value) {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error("must be a valid date");
    }
    return date;
  }

  validateArray(field, value, rules) {
    if (!Array.isArray(value)) {
      throw new Error("must be an array");
    }

    return value.map((item, index) => {
      try {
        return this.validateField(`${field}[${index}]`, item, {
          type: rules.itemType,
        });
      } catch (error) {
        throw new Error(`item ${index}: ${error.message}`);
      }
    });
  }

  validateObject(field, value, rules) {
    if (typeof value !== "object" || value === null) {
      throw new Error("must be an object");
    }

    const nestedValidator = new DataValidator(rules.properties);
    const result = nestedValidator.validate(value);

    if (!result.isValid) {
      throw new Error(result.errors.join("; "));
    }

    return result.convertedData;
  }

  transform(data) {
    try {
      const validationResult = this.validate(data);
      if (!validationResult.isValid) {
        return {
          transformed: false,
          result: null,
          errors: validationResult.errors,
        };
      }

      const transformedData = this.applyTransforms(
        validationResult.convertedData
      );

      return {
        transformed: true,
        result: transformedData,
      };
    } catch (error) {
      return {
        transformed: false,
        result: null,
        errors: [error.message],
      };
    }
  }

  applyTransforms(data) {
    const result = {};

    for (const [field, value] of Object.entries(data)) {
      const rules = this.schema[field];
      if (rules.transform) {
        result[field] = rules.transform(value);
      } else {
        result[field] = value;
      }
    }

    return result;
  }
}

const schema = {
    fieldName: {
        type: 'string',          // 'string' | 'number' | 'boolean' | 'date' | 'array' | 'object'
        required: false,     // If field is required
        min: 0,          // Minimum value/length
        max: 100,          // Maximum value/length
        pattern: '',      // Predefined pattern or regex
        itemType: '',     // For arrays, type of items
        properties: {},    // For nested objects
        transform: null   // Custom transformation function
    }
};

const userSchema = {
    username: { 
        type: 'string',
        required: true,
        min: 3,
        max: 50
    },
    age: {
        type: 'number',
        min: 13,
        max: 120,
        transform: (value) => Math.floor(value)
    },
    email: {
        type: 'string',
        pattern: 'email',
        required: true
    },
    settings: {
        type: 'object',
        properties: {
            theme: { type: 'string', enum: ['light', 'dark'] },
            notifications: { type: 'boolean' }
        }
    },
    tags: {
        type: 'array',
        itemType: 'string'
    }
};

const validator = new DataValidator(userSchema);


console.log("\n=== Testing User Schema ===");
const userData = {
    username: "john_doe",
    age: "25.7",
    email: "john@example.com",
    settings: {
        theme: "dark",
        notifications: "true"
    },
    tags: ["user", 123, true]
};

const validationResult = validator.validate(userData);
console.log("Validation Result:", JSON.stringify(validationResult, null, 2));

const transformResult = validator.transform(userData);
console.log("Transform Result:", JSON.stringify(transformResult, null, 2));

// Test basic validation
console.log("\n=== Testing Basic Schema ===");
const basicSchema = {
    name: { type: 'string', required: true },
    age: { type: 'number', min: 0 }
};
const basicValidator = new DataValidator(basicSchema);

const basicTest = {
    name: "John",
    age: "25"
};

console.log("Basic Validation Result:", 
    JSON.stringify(basicValidator.validate(basicTest), null, 2));

// Test nested validation
console.log("\n=== Testing Nested Schema ===");
const nestedSchema = {
    user: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            contacts: {
                type: 'array',
                itemType: 'string'
            }
        }
    }
};
const nestedValidator = new DataValidator(nestedSchema);

const nestedTest = {
    user: {
        name: "John",
        contacts: ["email@test.com", 123]
    }
};

console.log("Nested Validation Result:", 
    JSON.stringify(nestedValidator.validate(nestedTest), null, 2));

// Test transformations
console.log("\n=== Testing Transform Schema ===");
const transformSchema = {
    price: {
        type: 'number',
        transform: (value) => value.toFixed(2)
    }
};
const transformValidator = new DataValidator(transformSchema);

const transformTest = {
    price: 99.99999
};

console.log("Transform Result:", 
    JSON.stringify(transformValidator.transform(transformTest), null, 2));