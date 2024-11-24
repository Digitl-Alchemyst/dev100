# Code Challenge: Generic Data Repository Pattern

## Problem Statement

Create a generic repository pattern implementation that can handle different types of entities while maintaining type safety. This system should provide basic CRUD (Create, Read, Update, Delete) operations and support custom filtering and sorting capabilities.

This challenge demonstrates the power of TypeScript generics by creating a flexible, type-safe data management system that can work with any entity type while enforcing specific constraints and maintaining code reusability.

## Function Signature

```typescript
// Generic interfaces
interface Entity {
  id: number | string;
  createdAt: Date;
  updatedAt: Date;
}

interface Repository<T extends Entity> {
  create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T;
  update(id: T['id'], item: Partial<T>): T | null;
  delete(id: T['id']): boolean;
  find(id: T['id']): T | null;
  filter(predicate: (item: T) => boolean): T[];
  sort(compareFn: (a: T, b: T) => number): T[];
}

// Generic type for query operations
type QueryOptions<T> = {
  filter?: Partial<T>;
  sortBy?: keyof T;
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
};

// TODO: Implement the generic repository class
class GenericRepository<T extends Entity> implements Repository<T> {
  protected items: Map<T['id'], T>;

  constructor() {
    this.items = new Map();
  }

  // TODO: Implement CRUD operations
  // TODO: Implement filtering and sorting methods
  // TODO: Implement query method with options
}
```

## Input

- Entity objects conforming to the Entity interface
- Query parameters for filtering and sorting
- Entity IDs for single-item operations
- Partial entity data for updates

## Output

- Created/Updated entities
- Boolean success indicators for deletions
- Filtered and sorted arrays of entities
- Single entity lookups

## Example

### Input:
```typescript
// Define a specific entity type
interface User extends Entity {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

const userRepo = new GenericRepository<User>();

// Create a new user
const newUser = userRepo.create({
  name: "John Doe",
  email: "john@example.com",
  role: "user"
});

// Query users
const adminUsers = userRepo.query({
  filter: { role: 'admin' },
  sortBy: 'name',
  sortOrder: 'asc'
});
```

### Output:
```typescript
// Created user
{
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "user",
  createdAt: "2024-11-20T10:00:00Z",
  updatedAt: "2024-11-20T10:00:00Z"
}

// Queried users array
[
  {
    id: 2,
    name: "Alice Admin",
    role: "admin",
    // ... other properties
  },
  // ... other admin users
]
```

## Constraints

- All entities must have id, createdAt, and updatedAt properties
- IDs must be unique within a repository
- Updates must maintain the original ID
- Dates must be valid Date objects
- Sort operations must maintain type safety
- Filter predicates must be type-safe

## Testing the Script

```typescript
// Create a repository for User entities
const userRepo = new GenericRepository<User>();

// Test CRUD operations
const user = userRepo.create({
  name: "John Doe",
  email: "john@example.com",
  role: "user"
});

console.log(userRepo.find(user.id));

const updated = userRepo.update(user.id, { name: "John Smith" });
console.log(updated);

const deleted = userRepo.delete(user.id);
console.log(deleted);
```

## Bonus Challenge

Extend the repository to include:
- Relationship handling between entities
- Transaction support
- Advanced filtering with logical operators
- Pagination support
- Type-safe event listeners for CRUD operations

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Key generic concepts in this challenge:
1. Generic type constraints
2. Generic interfaces and classes
3. Generic method implementation
4. Type inference and narrowing
5. Conditional types with generics

### Step 2: Implementing the Functions

**Method 1: Basic Implementation**

```typescript
class GenericRepository<T extends Entity> implements Repository<T> {
  protected items: Map<T['id'], T>;

  constructor() {
    this.items = new Map();
  }

  create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
    const id = this.generateId();
    const timestamp = new Date();
    
    const newItem = {
      ...item,
      id,
      createdAt: timestamp,
      updatedAt: timestamp
    } as T;

    this.items.set(id, newItem);
    return newItem;
  }

  update(id: T['id'], item: Partial<T>): T | null {
    const existing = this.items.get(id);
    if (!existing) return null;

    const updated = {
      ...existing,
      ...item,
      id: existing.id,
      updatedAt: new Date()
    };

    this.items.set(id, updated);
    return updated;
  }

  delete(id: T['id']): boolean {
    return this.items.delete(id);
  }

  find(id: T['id']): T | null {
    return this.items.get(id) || null;
  }

  filter(predicate: (item: T) => boolean): T[] {
    return Array.from(this.items.values()).filter(predicate);
  }

  sort(compareFn: (a: T, b: T) => number): T[] {
    return Array.from(this.items.values()).sort(compareFn);
  }

  private generateId(): T['id'] {
    return Date.now() as T['id'];
  }
}
```

**Method 2: Advanced Implementation with Querying**

```typescript
class AdvancedRepository<T extends Entity> extends GenericRepository<T> {
  query(options: QueryOptions<T>): T[] {
    let result = Array.from(this.items.values());

    if (options.filter) {
      result = result.filter(item => 
        Object.entries(options.filter).every(([key, value]) => 
          item[key as keyof T] === value
        )
      );
    }

    if (options.sortBy) {
      const sortKey = options.sortBy;
      const sortOrder = options.sortOrder === 'desc' ? -1 : 1;
      
      result.sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        return sortOrder * (aVal < bVal ? -1 : aVal > bVal ? 1 : 0);
      });
    }

    if (options.offset) {
      result = result.slice(options.offset);
    }

    if (options.limit) {
      result = result.slice(0, options.limit);
    }

    return result;
  }
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1: Create and Retrieve
   - Input: Create new entity
   - Expected Output: Created entity with ID and timestamps

2. Test Case 2: Update
   - Input: Update existing entity
   - Expected Output: Updated entity with new timestamp

3. Test Case 3: Query
   - Input: Query with filter and sort
   - Expected Output: Filtered and sorted array

## Time and Space Complexity

- Time Complexity: O(1) for basic operations, O(n log n) for sorting
- Space Complexity: O(n) where n is the number of entities

## References

- [TypeScript Generics Documentation](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Repository Pattern](https://martinfowler.com/eaaCatalog/repository.html)

## Related Problems

- Generic Collection Implementation
- Type-safe Event Emitter
- Generic Data Service

## Key Takeaways

- Generics enable type-safe reusable code
- Generic constraints enforce requirements
- Type inference helps maintain safety
- Generic interfaces define contracts
- Repository pattern provides data abstraction

## Notes

This challenge showcases how TypeScript generics can create flexible, reusable components while maintaining type safety. The concepts are essential for building scalable applications with type-safe data management.

Key points to remember:
- Generic type constraints
- Type inference with generics
- Generic method implementation
- Repository pattern principles
- Type-safe query operations