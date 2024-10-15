# Code Challenge: Real-Time News Feed Generator

## Problem Statement

You're tasked with creating a real-time news feed generator for a media company. The system needs to fetch news articles from various sources asynchronously and combine them into a single feed. This challenge will introduce you to async generators and for-await-of loops, which are powerful tools for working with streams of asynchronous data.

Your task is to implement a news feed generator that fetches articles from multiple sources, processes them, and yields them one by one. The consumer of this feed should be able to iterate over the articles asynchronously as they become available.

## Function Signatures

```javascript
async function* fetchArticlesFromSource(source, numArticles) {
  // Your code here
}

async function* newsFeedGenerator(sources, numArticlesPerSource) {
  // Your code here
}

async function displayNewsFeed(feedGenerator) {
  // Your code here
}
```

## Input

- `sources` (array of strings): List of news sources to fetch articles from
- `numArticlesPerSource` (number): Number of articles to fetch from each source

## Output

The `newsFeedGenerator` should yield news article objects one by one. Each article object should have the following structure:

```javascript
{
  title: "Article Title",
  source: "Source Name",
  timestamp: Date object
}
```

## Constraints

- Use async generator functions (async function*) to create the feed generator
- Use for-await-of loops to consume the generated feed
- Simulate network delay and potential failures in fetching articles
- Handle errors gracefully without breaking the entire feed generation process

## Example

### Input:

```javascript
const sources = ["TechCrunch", "Wired", "The Verge"];
const numArticlesPerSource = 3;

const feedGenerator = newsFeedGenerator(sources, numArticlesPerSource);
await displayNewsFeed(feedGenerator);
```

### Possible Output:

```
New article: "Latest AI Breakthrough" from TechCrunch
New article: "The Future of Electric Cars" from Wired
New article: "Apple's New Product Line" from The Verge
New article: "Startup Funding Trends" from TechCrunch
...
```

## Testing the Script

To test your implementation, you can use the following code:

```javascript
async function runNewsFeed() {
  const sources = ["TechCrunch", "Wired", "The Verge"];
  const numArticlesPerSource = 3;

  console.log("Starting news feed...");
  const feedGenerator = newsFeedGenerator(sources, numArticlesPerSource);
  await displayNewsFeed(feedGenerator);
  console.log("News feed complete.");
}

runNewsFeed().catch(error => console.error("An error occurred:", error));
```

## Bonus Challenge

Implement a `filterNewsFeed` function that takes a generator and a filter condition, and returns a new generator that yields only the articles matching the condition. Use this to create a filtered feed based on keywords or sources.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding Async Generators and for-await-of

Async generators and for-await-of loops are powerful features for working with asynchronous streams of data:

1. Async generators are created using the `async function*` syntax and can yield promises.
2. The `yield` keyword is used to produce values in the generator.
3. The `for-await-of` loop is used to consume async iterables, including async generators.

### Step 2: Implementing the Functions

Let's implement our news feed generator:

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function* fetchArticlesFromSource(source, numArticles) {
  for (let i = 0; i < numArticles; i++) {
    await sleep(Math.random() * 1000); // Simulate network delay
    if (Math.random() < 0.1) { // 10% chance of failure
      throw new Error(`Failed to fetch article from ${source}`);
    }
    yield {
      title: `${source} Article ${i + 1}`,
      source: source,
      timestamp: new Date()
    };
  }
}

async function* newsFeedGenerator(sources, numArticlesPerSource) {
  for (const source of sources) {
    try {
      for await (const article of fetchArticlesFromSource(source, numArticlesPerSource)) {
        yield article;
      }
    } catch (error) {
      console.error(`Error fetching from ${source}:`, error.message);
      // Yield an error article instead of breaking the entire feed
      yield {
        title: `Error: Could not fetch from ${source}`,
        source: source,
        timestamp: new Date()
      };
    }
  }
}

async function displayNewsFeed(feedGenerator) {
  for await (const article of feedGenerator) {
    console.log(`New article: "${article.title}" from ${article.source}`);
    await sleep(500); // Simulate processing time
  }
}
```

### Step 3: Understanding the Implementation

1. `fetchArticlesFromSource` is an async generator that simulates fetching articles from a single source. It includes random delays and potential failures.

2. `newsFeedGenerator` is the main async generator that combines articles from all sources. It uses a for-await-of loop to consume articles from each source.

3. Error handling is implemented in `newsFeedGenerator` to ensure that a failure in one source doesn't break the entire feed.

4. `displayNewsFeed` uses a for-await-of loop to consume the generated feed, displaying each article as it becomes available.

### Step 4: Testing the Functions

Use the `runNewsFeed` function provided earlier to test your implementation.

## Time and Space Complexity

- Time Complexity: O(n * m), where n is the number of sources and m is the number of articles per source
- Space Complexity: O(1), as we're yielding articles one at a time without storing them

Note that the actual time taken will vary due to simulated network delays and potential retries.

## References

- [MDN Web Docs: Async iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [JavaScript.info: Async iteration and generators](https://javascript.info/async-iterators-generators)
- [MDN Web Docs: yield keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

## Related Problems

- Implementing a paginated API client using async generators
- Creating a real-time data processing pipeline
- Developing a file system watcher that reports changes asynchronously

## Key Takeaways

- Async generators allow you to work with asynchronous streams of data efficiently
- The for-await-of loop provides a clean syntax for consuming async iterables
- Error handling in async generators allows for graceful failure management
- Async iteration is powerful for scenarios involving real-time or streaming data
- These concepts can significantly simplify code dealing with multiple asynchronous sources

## Notes

In a real-world application, you would replace the simulated article fetching with actual API calls to news sources. You might also want to implement more sophisticated error handling, rate limiting, and caching mechanisms to optimize the feed generation process.
