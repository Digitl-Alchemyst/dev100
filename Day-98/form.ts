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