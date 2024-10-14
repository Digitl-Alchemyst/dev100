# Code Challenge: Social Media Post Scheduler

## Problem Statement

You're tasked with creating a social media post scheduler for a marketing team. The system needs to handle multiple social media platforms, each with its own API and potential for errors. Your job is to implement a robust scheduling system that can handle various types of errors and provide useful feedback to the user.

This challenge will test your ability to work with async/await, handle different types of errors, and implement retry logic in a practical scenario.

## Function Signatures

```javascript
class PostError extends Error {
  constructor(platform, message) {
    // Your code here
  }
}

async function postToFacebook(message) {
  // Simulated Facebook API call
}

async function postToTwitter(message) {
  // Simulated Twitter API call
}

async function postToInstagram(message) {
  // Simulated Instagram API call
}

async function schedulePost(message, platforms) {
  // Your main function to schedule posts
}
```

## Input

- `message` (string): The content of the social media post
- `platforms` (array of strings): List of platforms to post to (e.g., ['facebook', 'twitter', 'instagram'])

## Output

An object containing the results of posting to each platform:
```javascript
{
  facebook: 'Posted successfully',
  twitter: 'Posted successfully',
  instagram: 'Failed: API rate limit exceeded'
}
```

## Constraints

- Implement a custom `PostError` class that includes information about which platform failed.
- Each platform function should have a simulated chance of failure:
  - Facebook: 10% chance of temporary error
  - Twitter: 20% chance of rate limit error
  - Instagram: 30% chance of network error
- Implement retry logic for temporary errors (max 3 retries).
- If a rate limit error occurs, wait for 2 seconds before retrying.
- If a network error occurs, log the error but continue with other platforms.

## Example

### Input:

```javascript
schedulePost("Check out our summer sale!", ["facebook", "twitter", "instagram"])
  .then(results => console.log("Posting results:", results))
  .catch(error => console.error("Scheduling failed:", error.message));
```

### Possible Output:

```javascript
Posting results: {
  facebook: 'Posted successfully',
  twitter: 'Posted successfully',
  instagram: 'Failed: Network error'
}
```

## Testing the Script

To test your implementation, you can use the following code:

```javascript
async function testScheduler() {
  const messages = [
    "Don't miss our flash sale!",
    "New product launch tomorrow!",
    "Thank you for 1 million followers!"
  ];

  for (let msg of messages) {
    console.log(`\nScheduling post: "${msg}"`);
    try {
      const result = await schedulePost(msg, ["facebook", "twitter", "instagram"]);
      console.log("Results:", result);
    } catch (error) {
      console.error("Scheduling failed:", error.message);
    }
  }
}

testScheduler();
```

## Bonus Challenge

Implement a `schedulePostWithDeadline` function that takes an additional `deadline` parameter. The function should try to post to all platforms but return the results (successful or not) when the deadline is reached.

## Detailed Explanation & Expanded Instructions

### **Spoilers Ahead**

### Step 1: Understanding the Challenge

This challenge simulates a real-world scenario where you're dealing with multiple external APIs, each with its own potential for errors. Key points to consider:

1. Different types of errors (temporary, rate limit, network)
2. Platform-specific error rates
3. Retry logic with different strategies based on error type
4. Continuing the process even if one platform fails

### Step 2: Implementing the Functions

Let's implement our functions:

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class PostError extends Error {
  constructor(platform, message) {
    super(`${platform} error: ${message}`);
    this.name = 'PostError';
    this.platform = platform;
  }
}

async function simulateApiCall(platform, successRate) {
  await sleep(Math.random() * 1000); // Simulate API call delay
  if (Math.random() > successRate) {
    if (platform === 'twitter' && Math.random() < 0.5) {
      throw new PostError(platform, 'Rate limit exceeded');
    }
    throw new PostError(platform, 'Temporary error');
  }
}

async function postToFacebook(message) {
  await simulateApiCall('facebook', 0.9);
  return 'Posted to Facebook';
}

async function postToTwitter(message) {
  await simulateApiCall('twitter', 0.8);
  return 'Posted to Twitter';
}

async function postToInstagram(message) {
  await simulateApiCall('instagram', 0.7);
  return 'Posted to Instagram';
}

async function postWithRetry(postFunction, message, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await postFunction(message);
    } catch (error) {
      if (error.message.includes('Rate limit') && i < maxRetries - 1) {
        await sleep(2000);
      } else if (i === maxRetries - 1) {
        throw error;
      }
    }
  }
}

async function schedulePost(message, platforms) {
  const results = {};
  for (let platform of platforms) {
    try {
      switch (platform) {
        case 'facebook':
          results[platform] = await postWithRetry(postToFacebook, message);
          break;
        case 'twitter':
          results[platform] = await postWithRetry(postToTwitter, message);
          break;
        case 'instagram':
          results[platform] = await postToInstagram(message);
          break;
        default:
          throw new Error(`Unknown platform: ${platform}`);
      }
    } catch (error) {
      results[platform] = `Failed: ${error.message}`;
      if (platform === 'instagram') {
        console.error(`Instagram posting failed: ${error.message}`);
      }
    }
  }
  return results;
}
```

### Step 3: Understanding the Implementation

1. We create a `PostError` class for platform-specific errors.
2. Each platform function simulates API calls with different success rates.
3. `postWithRetry` implements retry logic, with special handling for rate limit errors.
4. `schedulePost` attempts to post to each platform, handling errors individually.
5. Instagram errors are logged but don't stop the process for other platforms.

### Step 4: Testing the Functions

Use the `testScheduler` function provided earlier to test your implementation with various messages.

## Time and Space Complexity

- Time Complexity: O(n * r), where n is the number of platforms and r is the maximum number of retries
- Space Complexity: O(n), where n is the number of platforms (for storing results)

The actual time taken can vary significantly based on API response times and error occurrences.

## References

- [MDN Web Docs: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript.info: Async/await](https://javascript.info/async-await)
- [MDN Web Docs: switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## Related Problems

- Implementing a robust API wrapper for a third-party service
- Creating a job queue system with error recovery and retries
- Developing a web crawler that can handle various network and API errors

## Key Takeaways

- Real-world async operations often involve multiple potential points of failure
- Different types of errors may require different handling strategies
- Retry logic can significantly improve the reliability of your application
- It's important to balance error recovery with timely execution
- Logging and reporting errors is crucial for maintaining and debugging systems

## Notes

In a real-world application, you would replace the simulated API calls with actual API requests. You might also want to implement more sophisticated error handling, such as exponential backoff for retries, or a circuit breaker pattern for persistent failures.
