type CreateContentPayload<T extends Content['type']> = 
  T extends 'article' 
    ? Omit<Article, 'id' | 'created' | 'modified'> 
    : T extends 'video' 
      ? Omit<Video, 'id' | 'created' | 'modified'>
      : Omit<Podcast, 'id' | 'created' | 'modified'>;

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

class ContentManager implements ContentManager {
    private contents: Map<string, Content> = new Map();

    create<T extends Content['type']>(content: CreateContentPayload<T>): Content {
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
    };

    update(id: string, content: Partial<Content>): Content {

        const existing = this.contents.get(id);
        if (!existing) throw new Error('Content ID not Found')

        if (content.type && content.type !== existing.type) {
            throw new Error('Content type does not match')
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
    };

    publish(id: string): Content {
        return this.update(id, { status: 'published' });
    };

    archive(id: string): Content {
        return this.update(id, { status: 'archived' });

    };

    getContent(id: string): Content | null {
        return this.contents.get(id) || null;
    };

    search(query: string): Content[] {
        const lowerQuery = query.toLowerCase();

        return Array.from(this.contents.values()).filter(content => content.title.toLowerCase().includes(lowerQuery) || this.getSearchableText(content).toLowerCase().includes(lowerQuery));
    };

    filterByType(type: Content['type']): Content[] {
        return Array.from(this.contents.values()).filter(content => content.type === type)
    };

    private getSearchableText(content: Content): string {
        switch (content.type) {
            case "article":
                return content.body;
            case "video":
                return content.url;
            case "podcast":
                return content.host;
        }
    }

    private generateId(): string {
        return Math.random().toString(36).substring(2, 9)
    }
}




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