# Code Challenge: Content Management Type System

## Problem Statement

Create a flexible content management system that can handle different types of content (articles, videos, podcasts) with shared and unique properties. Use union and intersection types to create a type-safe system for managing mixed content types while maintaining specific type information.

This challenge demonstrates the power of TypeScript's union and intersection types for creating flexible yet type-safe systems that can handle diverse but related data types.

## Function Signature

```typescript
// Base content types
interface BaseContent {
  id: string;
  title: string;
  created: Date;
  modified: Date;
  status: 'draft' | 'published' | 'archived';
}

interface TextContent {
  body: string;
  wordCount: number;
}

interface MediaContent {
  url: string;
  duration: number;
  thumbnail: string;
}

// Content type definitions
type Article = BaseContent & TextContent & {
  type: 'article';
  author: string;
  tags: string[];
};

type Video = BaseContent & MediaContent & {
  type: 'video';
  resolution: string;
  subtitles?: string[];
};

type Podcast = BaseContent & MediaContent & {
  type: 'podcast';
  host: string;
  episode: number;
};

// Union type for all content
type Content = Article | Video | Podcast;

// Content manager interface
interface ContentManager {
  create(content: Omit<Content, 'id' | 'created' | 'modified'>): Content;
  update(id: string, content: Partial<Content>): Content;
  publish(id: string): Content;
  archive(id: string): Content;
  getContent(id: string): Content | null;
  search(query: string): Content[];
  filterByType(type: Content['type']): Content[];
}

// TODO: Implement the content manager class
```

## Input

- Content objects of various types (Article, Video, Podcast)
- Update operations with partial content
- Search queries
- Content type filters

## Output

- Created/Updated content objects
- Filtered content arrays
- Search results
- Status updates

## Example

### Input:
```typescript
const manager = new ContentManager();

// Create an article
const article = manager.create({
  type: 'article',
  title: 'Understanding TypeScript',
  body: 'TypeScript is a powerful language...',
  wordCount: 1500,
  author: 'John Doe',
  tags: ['typescript', 'programming'],
  status: 'draft'
});

// Create a video
const video = manager.create({
  type: 'video',
  title: 'TypeScript Tutorial',
  url: 'https://example.com/video',
  duration: 1200,
  thumbnail: 'https://example.com/thumb',
  resolution: '1080p',
  status: 'draft'
});
```

### Output:
```typescript
// Published article
{
  id: "abc123",
  type: "article",
  title: "Understanding TypeScript",
  body: "TypeScript is a powerful language...",
  wordCount: 1500,
  author: "John Doe",
  tags: ["typescript", "programming"],
  status: "published",
  created: "2024-11-20T10:00:00Z",
  modified: "2024-11-20T10:30:00Z"
}
```

## Constraints

- All content must have required BaseContent properties
- Type-specific properties must be present based on content type
- IDs must be unique
- Status transitions must be valid
- Dates must be valid Date objects
- Content type must be immutable after creation

## Testing the Script

```typescript
const manager = new ContentManager();

// Create different types of content
const article = manager.create({
  type: 'article',
  title: 'Test Article',
  body: 'Test content',
  wordCount: 100,
  author: 'Test Author',
  tags: ['test'],
  status: 'draft'
});

console.log(article);

// Test type-specific operations
const updated = manager.update(article.id, { 
  body: 'Updated content',
  wordCount: 150
});

console.log(updated);

// Test filtering
const articles = manager.filterByType('article');
console.log(articles);
```

## Bonus Challenge

Extend the system to include:
- Content versioning
- Type-safe content validation
- Custom type guards for content types
- Composite content types
- Content relationship handling

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Problem

Key concepts for this challenge:
1. Union types for content variety
2. Intersection types for shared properties
3. Type narrowing for specific operations
4. Type guards for runtime checks
5. Discriminated unions with type property

### Step 2: Implementing the Functions

**Method 1: Basic Implementation**

```typescript
class ContentManager implements ContentManager {
  private contents: Map<string, Content> = new Map();

  create(content: Omit<Content, 'id' | 'created' | 'modified'>): Content {
    const id = this.generateId();
    const timestamp = new Date();
    
    const newContent = {
      ...content,
      id,
      created: timestamp,
      modified: timestamp
    } as Content;

    this.contents.set(id, newContent);
    return newContent;
  }

  update(id: string, content: Partial<Content>): Content {
    const existing = this.contents.get(id);
    if (!existing) throw new Error('Content not found');

    // Type guard to ensure type-safe updates
    if (content.type && content.type !== existing.type) {
      throw new Error('Cannot change content type');
    }

    const updated = {
      ...existing,
      ...content,
      id: existing.id,
      type: existing.type,
      modified: new Date()
    } as Content;

    this.contents.set(id, updated);
    return updated;
  }

  publish(id: string): Content {
    return this.update(id, { status: 'published' });
  }

  archive(id: string): Content {
    return this.update(id, { status: 'archived' });
  }

  getContent(id: string): Content | null {
    return this.contents.get(id) || null;
  }

  search(query: string): Content[] {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.contents.values()).filter(content => 
      content.title.toLowerCase().includes(lowerQuery) ||
      this.getSearchableText(content).toLowerCase().includes(lowerQuery)
    );
  }

  filterByType(type: Content['type']): Content[] {
    return Array.from(this.contents.values())
      .filter(content => content.type === type);
  }

  private getSearchableText(content: Content): string {
    switch (content.type) {
      case 'article':
        return content.body;
      case 'video':
        return content.url;
      case 'podcast':
        return content.host;
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
```

**Method 2: Advanced Implementation with Type Guards**

```typescript
// Type guards
function isArticle(content: Content): content is Article {
  return content.type === 'article';
}

function isVideo(content: Content): content is Video {
  return content.type === 'video';
}

function isPodcast(content: Content): content is Podcast {
  return content.type === 'podcast';
}

class AdvancedContentManager extends ContentManager {
  validateContent(content: Content): boolean {
    switch (content.type) {
      case 'article':
        return this.validateArticle(content);
      case 'video':
        return this.validateVideo(content);
      case 'podcast':
        return this.validatePodcast(content);
    }
  }

  private validateArticle(article: Article): boolean {
    return article.wordCount > 0 && article.body.length > 0;
  }

  private validateVideo(video: Video): boolean {
    return video.duration > 0 && video.url.startsWith('http');
  }

  private validatePodcast(podcast: Podcast): boolean {
    return podcast.duration > 0 && podcast.episode > 0;
  }
}
```

### Step 3: Testing the Functions

**Test Cases**

1. Test Case 1: Create Different Content Types
   - Input: Create article, video, and podcast
   - Expected Output: Properly typed content objects

2. Test Case 2: Type-Safe Updates
   - Input: Update content with type-specific properties
   - Expected Output: Updated content with maintained type safety

3. Test Case 3: Type Filtering
   - Input: Filter by content type
   - Expected Output: Array of specific content type

## Time and Space Complexity

- Time Complexity: O(1) for CRUD operations, O(n) for search and filter
- Space Complexity: O(n) where n is the number of content items

## References

- [TypeScript Union Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)
- [Type Guards and Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## Related Problems

- Event System with Union Types
- API Response Handler
- State Management System

## Key Takeaways

- Union types provide flexibility with type safety
- Intersection types combine multiple types
- Type guards enable runtime type checking
- Discriminated unions simplify type narrowing
- Type-safe updates require careful handling

## Notes

This challenge demonstrates how union and intersection types can create flexible yet type-safe systems. The concepts are essential for building robust applications that handle diverse but related data types.

Key points to remember:
- When to use union vs intersection types
- Type guard implementation
- Discriminated union patterns
- Type-safe update operations
- Content type validation