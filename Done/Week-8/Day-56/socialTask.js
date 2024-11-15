class TaskQueue {
  constructor(concurrency = 2) {
    this.concurrency = concurrency;
    this.queue = [];
    this.activeTasks = 0;
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.runNext();
    });
  }

  async runNext() {
    if (this.activeTasks >= this.concurrency || this.queue.length === 0) {
      return;
    }

    this.activeTasks++;
    const { task, resolve, reject } = this.queue.shift();

    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.activeTasks--;
      this.runNext();
    }
  }
}

class PostError extends Error {
  constructor(platform, message) {
    super(message);
    this.name = "PostError";
    this.platform = platform;
  }
}

async function postToFacebook(message) {
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 4000));
  if (Math.random() < 0.15)
    throw new PostError("Facebook", "Failed to post to Facebook");
  return { platform: "Facebook", status: "success" };
}

async function postToTwitter(message) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 4000));
  if (Math.random() < 0.15)
    throw new PostError("Twitter", "Failed to post to Twitter");
  return { platform: "Twitter", status: "success" };
}

async function postToInstagram(message) {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 4000));
  if (Math.random() < 0.15)
    throw new PostError("Instagram", "Failed to post to Instagram");
  return { platform: "Instagram", status: "success" };
}

async function schedulePost(message, platforms) {
  const results = [];
  for (const platform of platforms) {
    try {
      let result;
      switch (platform.toLowerCase()) {
        case "facebook":
          result = await postToFacebook(message);
          break;
        case "twitter":
          result = await postToTwitter(message);
          break;
        case "instagram":
          result = await postToInstagram(message);
          break;
        default:
          throw new Error(`Unsupported platform: ${platform}`);
      }
      results.push(result);
    } catch (error) {
      results.push({ platform, status: "failed", error: error.message });
    }
  }
  return results;
}

async function testTaskQueue() {
  const queue = new TaskQueue(2); // Allow 2 concurrent tasks

  const messages = [
    "Don't miss our flash sale!",
    "New product launch tomorrow!",
    "Thank you for 1 million followers!",
    "Join our webinar on social media strategies",
    "Limited time offer: Free shipping on all orders!",
  ];

  const priorityMessages = [
    "URGENT: System maintenance in 1 hour",
    "Breaking News: Important announcement coming soon",
  ];

  const tasks = messages.map((msg) => async () => {
    console.log(`\nScheduling post: "${msg}"`);
    const result = await schedulePost(msg, [
      "facebook",
      "twitter",
      "instagram",
    ]);
    console.log("Results:", result);
    return result;
  });

  const priorityTasks = priorityMessages.map((msg) => async () => {
    console.log(`\nScheduling priority post: "${msg}"`);
    const result = await schedulePost(msg, [
      "facebook",
      "twitter",
      "instagram",
    ]);
    console.log("Priority Results:", result);
    return result;
  });

  try {
    const priorityResults = await Promise.all(priorityTasks.map((task) => queue.addTask(task, true)));
    console.log("\nPriority tasks completed successfully");

    const results = await Promise.all(tasks.map((task) => queue.addTask(task)));
    console.log("\nAll regular tasks completed successfully");
  } catch (error) {
    console.error("\nTask queue execution failed:", error);
  }
}

testTaskQueue();
