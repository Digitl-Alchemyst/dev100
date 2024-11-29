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

// Improved type inference
type InferFieldType<T extends FieldConfig<any>> = T['type'] extends 'string' | 'email' | 'password'
  ? string
  : T['type'] extends 'number'
  ? number
  : T['type'] extends 'boolean'
  ? boolean
  : T['type'] extends 'date'
  ? Date
  : never;

// Updated form data type inference
type InferFormData<T extends FormSchema> = {
  [K in keyof T]: InferFieldType<T[K]>;
};

// Validation result type
type ValidationResult<T> = {
  isValid: boolean;
  errors: {
    [K in keyof T]?: string[];
  };
};

interface FormValidator<T extends FormSchema> {
  validate(data: Partial<InferFormData<T>>): ValidationResult<T>;
  validateField<K extends keyof T>(
    field: K,
    value: InferFormData<T>[K]
  ): string[];
}

class FormValidator<T extends FormSchema> implements FormValidator<T> {
    constructor(private schema: T) {}

    validate(data: Partial<InferFormData<T>>): ValidationResult<T> {
        const errors: Record<string, string[]> = {};
        let isValid = true;

        for (const [field, config] of Object.entries(this.schema)) {
            if (field in data) {
                const value = data[field as keyof T] as InferFormData<T>[keyof T];
                const fieldErrors = this.validateField(field as keyof T, value);

                if (fieldErrors.length > 0) {
                    errors[field] = fieldErrors;
                    isValid = false;
                }
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

        if (config.required && (value === undefined || value === '')) {
            errors.push(`${String(field)} is required`);
            return errors;
        }

        switch (config.type) {
            case 'string':
                this.validateString(field, value as string, config as FieldConfig<string>, errors);
                break;
            case 'number':
                this.validateNumber(field, value as number, config as FieldConfig<number>, errors);
                break;
            case 'email':
                this.validateEmail(field, value as string, config as FieldConfig<string>, errors);
                break;
        }

        if (config.custom && !config.custom(value)) {
            errors.push(`${String(field)} failed custom validation check`);
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
            errors.push(`${String(field)} must be at least ${config.minLength} characters`)
        }
        if (config.maxLength && value.length > config.maxLength) {
            errors.push(`${String(field)} must be no mroe than ${config.maxLength} characters`)
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {

        }
      }
}


const schema = {
  name: {
    type: 'string' as const,
    required: true,
    minLength: 2
  },
  age: {
    type: 'number' as const,
    min: 0,
    max: 150
  },
  email: {
    type: 'email' as const,
    required: true
  }
} satisfies FormSchema;

const validator = new FormValidator<typeof schema>(schema);

// Test complete form
const completeData = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

console.log(validator.validate(completeData));

// Test partial form
const partialData = {
  name: "J"
};

console.log(validator.validate(partialData));

// Test single field
console.log(validator.validateField('email', "not-an-email"));