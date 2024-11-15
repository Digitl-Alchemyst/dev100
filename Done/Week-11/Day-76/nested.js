function findNestedTags(html) {
  const results = [];
  const tagPattern = /<([a-z]+)>([\s\S]*?)<\/\1>/gi;

  let match;
  while ((match = tagPattern.exec(html)) !== null) {
    const [fullMatch, tagName, contents] = match;

    // Create tag object with name and contents
    const tagInfo = {
      tag: tagName,
      content: contents.trim(),
      children: [],
    };

    // Recursively find nested tags within the contents
    if (contents.includes("<")) {
      tagInfo.children = findNestedTags(contents);
    }

    results.push(tagInfo);
  }

  return results;
}

// Example usage:
const htmlContent = `
<div>
  <p>This is a paragraph.</p>
  <div>
    <h2>Nested Heading</h2>
    <p>This is another paragraph.</p>
  </div>
  <span>Some text</span>
</div>
`;

console.log(JSON.stringify(findNestedTags(htmlContent), null, 2));
