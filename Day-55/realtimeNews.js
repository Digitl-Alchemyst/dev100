

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function* fetchArticlesFromSource(source, numArticles) {
  // Your code here
  for ( let i = 0; i < numArticles; i++) {
    await sleep(Math.random() * 1000);
    if (Math.random() < 0.1) {
      throw new Error(`Error fetching article from ${source}`);
    }
    yield {
      source: source,
      title: `Article ${i + 1} from ${source}`,
      content: `Content for Article ${i} from ${source}`,
      timestamp: new Date(),
    };
  }

}

async function* newsFeedGenerator(sources, numArticlesPerSource) {
  // Your code here
  for (const source of sources) {
try{
 for await (const article of fetchArticlesFromSource(source, numArticlesPerSource)) {
  yield article;
 }
} catch (error) {
 console.error(`Error fetching articles from ${source}`, error.message);
 yield {
  source: source,
  title: `Error fetching articles from ${source}`,
  timestamp: new Date(),
 };
}
  }
}

async function displayNewsFeed(feedGenerator) {
  // Your code here
  for await (const article of feedGenerator) {
    console.log(`${article.source}: ${article.title}`);
    await sleep(Math.random() * 500);
  }
}


async function runNewsFeed() {
  const sources = ["TechCrunch", "Wired", "The Verge"];
  const numArticlesPerSource = 3;

  console.log("Starting news feed...");
  const feedGenerator = newsFeedGenerator(sources, numArticlesPerSource);
  await displayNewsFeed(feedGenerator);
  console.log("News feed complete.");
}

runNewsFeed().catch((error) => console.error("An error occurred:", error));