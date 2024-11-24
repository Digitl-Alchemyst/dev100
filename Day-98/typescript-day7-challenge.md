# Code Challenge: Dynamic Form Validation System

## Problem Statement

Create a type-safe, dynamic form validation system that uses advanced TypeScript features to handle complex form structures, validation rules, and error messages. The system should leverage mapped types, conditional types, and utility types to provide a flexible yet strongly-typed form handling solution.

This challenge demonstrates the power of TypeScript's advanced type system to create a robust form validation framework that can handle various data types while maintaining type safety throughout the validation process.

## Function Signature

```typescript
// Basic field types
type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'email' | 'password';

// Field configuration
type FieldConfig<T> = {
  type: FieldType;
  required?: boolean;
  min?: T extends number ? number : never;
  max?: T extends number ? number : never;
  minLength?: T extends string ? number : never;
  maxLength?: T extends string ? number : never;
  pattern?: T extends string ? RegExp : never;
  custom?: (value: T) => boolean;
};

// Form schema definition
type FormSchema = {
  [K: string]: FieldConfig<any>;
};

// Infer form data type from schema
type InferFormData<T extends FormSchema> = {
  [K in keyof T]: T[K] extends FieldConfig<infer U> ? U : never;
};

// Validation result type
type ValidationResult<T> = {
  isValid: boolean;
  errors: {
    [K in keyof T]?: string[];
  };
};

// Form validator interface
interface FormValidator<T extends FormSchema> {
  validate(data: Partial<InferFormData<T>>): ValidationResult<T>;
  validateField<K extends keyof T>(
    field: K,
    value: InferFormData<T>[K]
  ): string[];
}

// TODO: Implement the form validator class
```

## Input

- Form schema defining field types and validation rules
- Form data to validate
- Individual field values for single-field validation

## Output

- Validation results with error messages
- Type-safe form data
- Field-specific validation results

## Example

### Input:
```typescript
// Define a form schema
const userFormSchema = {
  username: {
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/
  },
  age: {
    type: 'number',
    required: true,
    min: 18,
    max: 100
  },
  email: {
    type: 'email',
    required: true,
    custom: (value: string) => value.endsWith('@company.com')
  }
} as const;

// Create validator instance
const validator = new FormValidator(userFormSchema);

// Validate form data
const result = validator.validate({
  username: "john_doe",
  age: 25,
  email: "john@example.com"
});
```

### Output:
```typescript
{
  isValid: false,
  errors: {
    email: ["Email must end with @company.com"]
  }
}
```

## Constraints

- All validation rules must be type-safe
- Custom validators must maintain type information
- Error messages must be clear and specific
- Field types must match their configurations
- Partial form data must be supported for validation

## Testing the Script

```typescript
const schema = {
  name: {
    type: 'string',
    required: true,
    minLength: 2
  },
  age: {
    type: 'number',
    min: 0,
    max: 150
  },
  email: {
    type: 'email',
    required: true
  }
} as const;

const validator = new FormValidator(schema);

// Test complete form
console.log(validator.validate({
  name: "John",
  age: 30,
  email: "john@example.com"
}));

// Test partial form
console.log(validator.validate({
  name: "J" // Should fail minLength
}));

// Test single field
console.log(validator.validateField('email', "not-an-email"));
```

## Bonus Challenge

Extend the system to include:
- Nested form schemas
- Cross-field validation rules
- Async validation support
- Custom error message templates
- Dynamic field dependencies

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Advanced type concepts used:
1. Mapped types for schema transformation
2. Conditional types for field validation
3. Type inference for form data
4. Utility types for partial validation
5. Generic type constraints

### Step 2: Implementing the Functions

**Method 1: Basic Implementation**

```typescript
class FormValidator<T extends FormSchema> implements FormValidator<T> {
  constructor(private schema: T) {}

  validate(data: Partial<InferFormData<T>>): ValidationResult<T> {
    const errors: Record<string, string[]> = {};
    let isValid = true;

    // Validate each field in the schema
    for (const [field, config] of Object.entries(this.schema)) {
      const value = data[field];
      const fieldErrors = this.validateField(field as keyof T, value);

      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
        isValid = false;
      }
    }

    return { isValid, errors };
  }

  validateField<K extends keyof T>(
    field: K,
    value: InferFormData<T>[K]
  ): string[] {
    const config = this.schema[field];
    const errors: string[] = [];

    // Required check
    if (config.required && (value === undefined || value === '')) {
      errors.push(`${String(field)} is required`);
      return errors;
    }

    // Skip validation if value is undefined and field is not required
    if (value === undefined) return errors;

    // Type-specific validation
    switch (config.type) {
      case 'string':
        this.validateString(field, value as string, config, errors);
        break;
      case 'number':
        this.validateNumber(field, value as number, config, errors);
        break;
      case 'email':
        this.validateEmail(field, value as string, config, errors);
        break;
    }

    // Custom validation
    if (config.custom && !config.custom(value)) {
      errors.push(`${String(field)} failed custom validation`);
    }

    return errors;
  }

  private validateString(
    field: keyof T,
    value: string,
    config: FieldConfig<string>,
    errors: string[]
  ): void {
    if (config.minLength && value.length < config.minLength) {
      errors.push(
        `${String(field)} must be at least ${config.minLength} characters`
      );
    }

    if (config.maxLength && value.length > config.maxLength) {
      errors.push(
        `${String(field)} must be at most ${config.maxLength} characters`
      );
    }

    if (config.pattern && !config.pattern.test(value)) {
      errors.push(`${String(field)} must match pattern ${config.pattern}`);
    }
  }

  private validateNumber(
    field: keyof T,
    value: number,
    config: FieldConfig<number>,
    errors: string[]
  ): void {
    if (config.min !== undefined && value < config.min) {
      errors.push(`${String(field)} must be at least ${config.min}`);
    }

    if (config.max !== undefined && value > config.max) {
      errors.push(`${String(field)} must be at most ${config.max}`);
    }
  }

  private validateEmail(
    field: keyof T,
    value: string,
    config: FieldConfig<string>,
    errors: string[]
  ): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errors.push(`${String(field)} must be a valid email address`);
    }
  }
}
```

**Method 2: Advanced Implementation with Async Validation**

```typescript
type AsyncFieldConfig<T> = FieldConfig<T> & {
  asyncValidation?: (value: T) => Promise<boolean>;
};

type AsyncValidationResult<T> = Promise<ValidationResult<T>>;

class AsyncFormValidator<T extends FormSchema> extends FormValidator<T> {
  async validateAsync(
    data: Partial<InferFormData<T>>
  ): AsyncValidationResult<T> {
    const syncResult = this.validate(data);
    if (!syncResult.isValid) return syncResult;

    const asyncErrors: Record<string, string[]> = {};
    let isValid = true;

    const validations = Object.entries(this.schema).map(
      async ([field, config]) => {
        const value = data[field];
        if (
          value !== undefined &&
          (config as AsyncFieldConfig<any>).asyncValidation
        ) {
          const valid = await (
            config as AsyncFieldConfig<any>
          ).asyncValidation(value);
          if (!valid) {
            asyncErrors[field] = [`${field} failed async validation`];
            isValid = false;
          }
        }
      }
    );

    await Promise.all(validations);

    return {
      isValid,
      errors: { ...syncResult.errors, ...asyncErrors }
    };
  }
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1: Required Fields
   - Input: Missing required fields
   - Expected Output: Validation errors for missing fields

2. Test Case 2: Type Validation
   - Input: Wrong type for field
   - Expected Output: Type validation errors

3. Test Case 3: Custom Rules
   - Input: Data failing custom validation
   - Expected Output: Custom validation errors

## Time and Space Complexity

- Time Complexity: O(n) where n is the number of fields
- Space Complexity: O(n) for storing validation results

## References

- [TypeScript Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## Related Problems

- Form State Management
- API Request Validation
- Data Transformation Pipeline

## Key Takeaways

- Mapped types enable dynamic type transformation
- Conditional types provide type-safe branching
- Utility types simplify common type operations
- Type inference reduces manual type annotations
- Generic constraints ensure type safety

## Notes

This challenge demonstrates how TypeScript's advanced type system can create sophisticated type-safe validation systems. The concepts are essential for building robust form handling and data validation solutions.

Key points to remember:
- Using mapped types for schema transformation
- Leveraging conditional types for validation
- Implementing type-safe custom validators
- Handling partial form data
- Managing async validation