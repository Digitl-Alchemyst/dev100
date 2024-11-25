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
    create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
        const id = this.generateId();
        const timestamp = new Date();

        const newItem = {
            ...item,
            id,
            createdAt: timestamp,
            updatedAt: timestamp,
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
        }

        this.items.set(id, updated);
        return updated;
    }

    delete(id: T['id']): boolean {
        return this.items.delete(id);
    }

    // TODO: Implement filtering and sorting methods
    find(id: T['id']): T | null {
        return this.items.get(id) || null
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

const userRepo = new GenericRepository<User>();

// Define a specific entity type
interface User extends Entity {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

// Create multiple test users
console.log('\n--- Creating Test Users ---');
const user1 = userRepo.create({
    name: "John Doe",
    email: "john@example.com",
    role: "user"
});
console.log('Created User 1:', user1);

const user2 = userRepo.create({
    name: "Alice Smith",
    email: "alice@example.com",
    role: "admin"
});
console.log('Created User 2:', user2);

const user3 = userRepo.create({
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user"
});
console.log('Created User 3:', user3);

// Test find operation
console.log('\n--- Testing Find Operation ---');
const foundUser = userRepo.find(user1.id);
console.log('Found User:', foundUser);

// Test filter operations
console.log('\n--- Testing Filter Operations ---');
const regularUsers = userRepo.filter(user => user.role === 'user');
console.log('Regular Users:', regularUsers);

const adminUsers = userRepo.filter(user => user.role === 'admin');
console.log('Admin Users:', adminUsers);

// Test sort operations
console.log('\n--- Testing Sort Operations ---');
const usersSortedByName = userRepo.sort((a, b) => a.name.localeCompare(b.name));
console.log('Users Sorted by Name:', usersSortedByName);

// Test update operation
console.log('\n--- Testing Update Operation ---');
const updatedUser = userRepo.update(user1.id, { name: "John Smith" });
console.log('Updated User:', updatedUser);

// Test delete operation
console.log('\n--- Testing Delete Operation ---');
const deleteResult = userRepo.delete(user1.id);
console.log('Delete Result:', deleteResult);

// Verify deletion with find
console.log('\n--- Verifying Deletion ---');
const findDeletedUser = userRepo.find(user1.id);
console.log('Finding Deleted User:', findDeletedUser); // Should be null