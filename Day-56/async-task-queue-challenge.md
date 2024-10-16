# Code Challenge: Async Task Queue for Social Media Posting

## Problem Statement

You're tasked with creating an asynchronous task queue system for a social media management tool. This system needs to handle posting to multiple social media platforms, each with its own API and potential for errors. Your job is to implement a robust task queue that can handle various types of errors, provide useful feedback, and manage concurrent executions.

This challenge will test your ability to work with async/await, handle different types of errors, implement retry logic, and manage concurrency in a practical scenario.

## Task Queue Implementation

Implement a `TaskQueue` class with the following methods:

```javascript
class TaskQueue {
  constructor(concurrency = 2) {
    // Initialize the task queue
  }

  addTask(task) {
    // Add a task to the queue
  }

  async run() {
    // Process all tasks in the queue
  }
}
```

## Social Media Posting Functions

Implement the following functions for social media posting:

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
- The `TaskQueue` should process tasks concurrently, with a default concurrency of 2.

## Example Usage

```javascript
const queue = new TaskQueue(3); // Allow 3 concurrent tasks

const messages = [
  "Check out our summer sale!",
  "New product launch tomorrow!",
  "Thank you for 1 million followers!",
  "Flash sale: 50% off all items!",
  "Join our live Q&A session tonight!"
];

messages.forEach(msg => {
  queue.addTask(() => schedulePost(msg, ["facebook", "twitter", "instagram"]));
});

queue.run()
  .then(() => console.log("All posts have been scheduled"))
  .catch(error => console.error("An error occurred:", error));
```

## Testing the Implementation

To test your implementation, you can use the following code:

```javascript
async function testTaskQueue() {
  const queue = new TaskQueue(2); // Allow 2 concurrent tasks

  const messages = [
    "Don't miss our flash sale!",
    "New product launch tomorrow!",
    "Thank you for 1 million followers!",
    "Join our webinar on social media strategies",
    "Limited time offer: Free shipping on all orders!"
  ];

  messages.forEach(msg => {
    queue.addTask(async () => {
      console.log(`\nScheduling post: "${msg}"`);
      try {
        const result = await schedulePost(msg, ["facebook", "twitter", "instagram"]);
        console.log("Results:", result);
        return result;
      } catch (error) {
        console.error("Scheduling failed:", error.message);
        throw error;
      }
    });
  });

  try {
    await queue.run();
    console.log("All tasks completed successfully");
  } catch (error) {
    console.error("Task queue execution failed:", error);
  }
}

testTaskQueue();
```

## Bonus Challenge

Implement a `prioritySchedulePost` function that allows adding high-priority posts to the front of the queue. Modify the `TaskQueue` class to support this feature.

## Evaluation Criteria

Your solution will be evaluated based on:

1. Correct implementation of the `TaskQueue` class with concurrent execution
2. Proper error handling and retry logic for different types of errors
3. Effective use of async/await and Promises
4. Code organization and readability
5. Handling of edge cases and potential race conditions

This challenge combines asynchronous programming, error handling, concurrency management, and practical application design, making it an excellent "Real-world Application" task for Day 7 of your course.
