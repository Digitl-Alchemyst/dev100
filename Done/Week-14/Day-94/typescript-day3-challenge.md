# Code Challenge: Event Logger System

## Problem Statement

Create a TypeScript event logging system that can handle different types of log entries with varying parameters. The system should support multiple function signatures for logging different types of events (info, warning, error) and allow for flexible parameter handling.

This challenge demonstrates TypeScript's function typing capabilities, including function overloads, optional parameters, and rest parameters. It shows how TypeScript can create type-safe, flexible function signatures that accommodate different use cases while maintaining code clarity.

## Function Signature

```typescript
// Define log level and log entry types
type LogLevel = 'info' | 'warning' | 'error';
type TimeStamp = number | Date;

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: TimeStamp;
  metadata?: Record<string, unknown>;
}

// Function overloads
function log(level: 'error', error: Error): LogEntry;
function log(level: LogLevel, message: string): LogEntry;
function log(level: LogLevel, message: string, metadata: Record<string, unknown>): LogEntry;
function log(level: LogLevel, message: string, ...tags: string[]): LogEntry;

// TODO: Implement the logging function
function log(
  level: LogLevel,
  messageOrError: string | Error,
  ...rest: (Record<string, unknown> | string)[]
): LogEntry {
  // Implementation here
}
```

## Input

The function should accept:
- Log level ('info', 'warning', 'error')
- Message or Error object
- Optional metadata object
- Optional tags as rest parameters

## Output

Returns a LogEntry object containing:
- Log level
- Formatted message
- Timestamp
- Optional metadata

## Example

### Input:
```typescript
// Different ways to use the log function
log('error', new Error('Database connection failed'));
log('info', 'User logged in successfully');
log('warning', 'High memory usage', { memoryUsage: '85%' });
log('info', 'File processed', 'important', 'batch-job', 'automated');
```

### Output:
```typescript
// Example outputs
{
  level: 'error',
  message: 'Error: Database connection failed',
  timestamp: 1699564800000,
  metadata: { stack: '...' }
}

{
  level: 'info',
  message: 'User logged in successfully',
  timestamp: 1699564800000
}
```

## Constraints

- Function must implement all specified overloads
- Timestamps should be either Unix timestamps or Date objects
- Error messages should include the error stack
- Metadata must be a plain object with unknown values
- Tags must be strings
- Each log entry must have a unique timestamp

## Testing the Script

```typescript
// Test basic logging
console.log(log('info', 'Application started'));

// Test error logging
const error = new Error('Failed to fetch data');
console.log(log('error', error));

// Test metadata
console.log(log('warning', 'CPU usage high', { usage: '90%', process: 'node' }));

// Test tags
console.log(log('info', 'Batch job completed', 'batch', 'processing', 'success'));
```

## Bonus Challenge

Extend the logging system to include:
- Async logging capabilities
- Log level-based filtering
- Custom log formatters
- Log aggregation by tags

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

TypeScript's function typing features we're using:
1. Function overloads for different parameter combinations
2. Rest parameters for variable argument lists
3. Union types for flexible parameter types
4. Optional parameters and properties
5. Type narrowing for parameter handling

### Step 2: Implementing the Functions

**Method 1: Basic Implementation**

```typescript
function log(
  level: LogLevel,
  messageOrError: string | Error,
  ...rest: (Record<string, unknown> | string)[]
): LogEntry {
  const timestamp = Date.now();
  let message: string;
  let metadata: Record<string, unknown> = {};

  // Handle Error objects
  if (messageOrError instanceof Error) {
    message = messageOrError.message;
    metadata = {
      stack: messageOrError.stack,
      name: messageOrError.name
    };
  } else {
    message = messageOrError;
  }

  // Process rest parameters
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
```

**Method 2: Class-based Implementation**

```typescript
class Logger {
  private static formatMessage(messageOrError: string | Error): {
    message: string;
    metadata?: Record<string, unknown>;
  } {
    if (messageOrError instanceof Error) {
      return {
        message: messageOrError.message,
        metadata: {
          stack: messageOrError.stack,
          name: messageOrError.name
        }
      };
    }
    return { message: messageOrError };
  }

  static log(level: 'error', error: Error): LogEntry;
  static log(level: LogLevel, message: string): LogEntry;
  static log(level: LogLevel, message: string, metadata: Record<string, unknown>): LogEntry;
  static log(level: LogLevel, message: string, ...tags: string[]): LogEntry;
  static log(
    level: LogLevel,
    messageOrError: string | Error,
    ...rest: (Record<string, unknown> | string)[]
  ): LogEntry {
    const timestamp = new Date();
    const { message, metadata: errorMetadata } = Logger.formatMessage(messageOrError);
    let metadata: Record<string, unknown> = { ...errorMetadata };

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
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1: Basic Info Log
   - Input: `log('info', 'Test message')`
   - Expected Output: Basic log entry with message

2. Test Case 2: Error Log
   - Input: `log('error', new Error('Test error'))`
   - Expected Output: Log entry with error details

3. Test Case 3: Log with Metadata
   - Input: `log('warning', 'Test warning', { code: 404 })`
   - Expected Output: Log entry with metadata

## Time and Space Complexity

- Time Complexity: O(1) for basic logging, O(n) for tag processing
- Space Complexity: O(n) where n is the size of the log entry

## References

- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [TypeScript Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

## Related Problems

- Event Emitter Implementation
- Command Pattern with TypeScript
- Generic Function Handlers

## Key Takeaways

- Function overloads provide type-safe method signatures
- Rest parameters enable flexible argument handling
- Union types allow for varied parameter types
- Type narrowing helps handle different parameter types safely
- Optional parameters and properties increase function flexibility

## Notes

This challenge demonstrates how TypeScript's function features can create flexible, type-safe APIs. The concepts covered are essential for building robust applications where function signatures need to accommodate various use cases while maintaining type safety.

Key points to remember:
- Order of function overloads matters
- Rest parameters must be the last parameter
- Type narrowing is essential for union types
- Optional parameters vs rest parameters
- Metadata handling patterns