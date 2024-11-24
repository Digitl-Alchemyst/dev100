# Code Challenge: Adding Types to Event Logger

## Problem Statement

You are given a JavaScript event logging system that needs to be converted to TypeScript. The challenge is to add appropriate type definitions to the existing JavaScript code while maintaining its functionality. This exercise helps understand TypeScript's type system and how to gradually add types to existing JavaScript code.

This challenge demonstrates how to transform JavaScript code into type-safe TypeScript code, showing the process of adding type definitions, function signatures, and interfaces to existing JavaScript code. It's particularly relevant for developers working on migrating JavaScript codebases to TypeScript.

## Function Signature

Here's the JavaScript code that needs typing:

```javascript
// Starting JavaScript code
function log(level, messageOrError, ...rest) {
  const timestamp = Date.now();
  let message;
  let metadata = {};

  if (messageOrError instanceof Error) {
    message = messageOrError.message;
    metadata = {
      stack: messageOrError.stack,
      name: messageOrError.name
    };
  } else {
    message = messageOrError;
  }

  if (rest.length > 0) {
    if (typeof rest[0] === 'object') {
      metadata = { ...metadata, ...rest[0] };
    } else {
      metadata.tags = rest;
    }
  }

  return {
    level,
    message,
    timestamp,
    ...(Object.keys(metadata).length && { metadata })
  };
}

// TODO: Add TypeScript type definitions and convert to TypeScript
```

## Input

The function accepts:
- Log level (string: 'info', 'warning', 'error')
- Message (string) or Error object
- Optional metadata object or variable number of tag strings

## Output

Returns a log entry object containing:
- Log level
- Formatted message
- Timestamp
- Optional metadata

## Example

### Input:
```javascript
log('error', new Error('Failed to connect'));
log('info', 'User login', { userId: 123 });
log('warning', 'Low memory', 'system', 'resource');
```

### Output:
```javascript
{
  level: 'error',
  message: 'Failed to connect',
  timestamp: 1699564800000,
  metadata: {
    stack: 'Error: Failed to connect...',
    name: 'Error'
  }
}
```

## Constraints

- Must maintain all existing JavaScript functionality
- Must add proper TypeScript types and interfaces
- Must implement function overloads for different parameter combinations
- Must use TypeScript's built-in utility types where appropriate

## Testing the Script

```typescript
// After adding types, the following should all type-check correctly
console.log(log('info', 'Application started'));
console.log(log('error', new Error('Database error')));
console.log(log('warning', 'High CPU usage', { cpu: '90%' }));
console.log(log('info', 'Batch job', 'important', 'automated'));
```

## Bonus Challenge

- Add generic type parameters to handle different metadata types
- Implement type guards for custom error types
- Add readonly modifiers where appropriate
- Use branded types for log levels

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Key TypeScript concepts needed:
1. Type declarations and interfaces
2. Function overloads
3. Union types
4. Optional properties
5. Rest parameters
6. Type narrowing

### Step 2: Implementing the Types

**Method 1: Basic Type Implementation**

```typescript
// Define the log level type
type LogLevel = 'info' | 'warning' | 'error';

// Define the log entry interface
interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

// Define function overloads
function log(level: 'error', error: Error): LogEntry;
function log(level: LogLevel, message: string): LogEntry;
function log(level: LogLevel, message: string, metadata: Record<string, unknown>): LogEntry;
function log(level: LogLevel, message: string, ...tags: string[]): LogEntry;
function log(
  level: LogLevel,
  messageOrError: string | Error,
  ...rest: (Record<string, unknown> | string)[]
): LogEntry {
  // Original implementation remains the same
}
```

**Method 2: Advanced Type Implementation**

```typescript
// Define custom error type guard
function isCustomError(error: unknown): error is Error {
  return error instanceof Error;
}

// Define metadata type with generics
interface LogMetadata<T = unknown> {
  [key: string]: T;
}

// Define log entry with generic metadata
interface LogEntry<T = unknown> {
  readonly level: LogLevel;
  readonly message: string;
  readonly timestamp: number;
  readonly metadata?: LogMetadata<T>;
}

// Implementation with generics
function log<T = unknown>(level: LogLevel, messageOrError: string | Error, metadata?: LogMetadata<T>): LogEntry<T>;
function log(level: LogLevel, messageOrError: string | Error, ...tags: string[]): LogEntry;
// ... rest of implementation
```

### Step 3: Testing the Types

**Test Cases**

1. Test Case 1: Type checking basic logs
```typescript
// Should compile
const basicLog = log('info', 'Test message');
// Should not compile
const invalidLog = log('invalid', 'Test message'); // Error: invalid log level
```

2. Test Case 2: Type checking with error objects
```typescript
const error = new Error('Test error');
const errorLog = log('error', error);
```

## Time and Space Complexity

- Time Complexity: O(1) for basic logging, O(n) for tag processing
- Space Complexity: O(n) where n is the size of the log entry

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Migration Guide](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)

## Related Problems

- Type-safe Event Emitter
- Generic Logger Implementation
- Error Handling with TypeScript

## Key Takeaways

- Understanding how to add types to existing JavaScript code
- Using TypeScript's type system effectively
- Implementing function overloads
- Working with union types and type narrowing
- Using generics for flexible type definitions

## Notes

When adding types to existing JavaScript code:
1. Start with basic types and gradually add complexity
2. Use type inference where possible
3. Consider backwards compatibility
4. Document type definitions clearly
5. Use strict mode for better type safety
