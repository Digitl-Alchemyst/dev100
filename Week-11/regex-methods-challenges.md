// Week 11: Regular Expression Methods Challenges

// Day 1: The test() Method
// Challenge: Validate user inputs using test()
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validateForm(email, password) {
  // TODO: Use the test() method to validate the email and password
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  return { isEmailValid, isPasswordValid };
}

// Test the function
console.log(validateForm("example@email.com", "ValidPassword123!"));
console.log(validateForm("invalid@email", "weakpass"));

// Day 2: The match() Method
// Challenge: Extract information from text using match()
const logEntry = "2023-04-15 12:34:56 [INFO] User John Doe logged in";

// TODO: Use match() to extract the date, time, log level, and username
function parseLogEntry(entry) {
  const regex = /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) \[(.*?)\] User (.*?) logged in/;
  const matches = entry.match(regex);

  if (matches) {
    // Your code here to extract the data
    return {
      date: matches[1],
      time: matches[2],
      logLevel: matches[3],
      username: matches[4]
    };
  } else {
    return null;
  }
}

// Test the function
console.log(parseLogEntry(logEntry));

// Day 3: The replace() Method
// Challenge: Censor sensitive information using replace()
const message = "My credit card number is 1234-5678-9012-3456 and my PIN is 1234.";

// TODO: Use replace() to censor the credit card number and PIN
function censorMessage(text) {
  const ccRegex = /\d{4}-\d{4}-\d{4}-\d{4}/;
  const pinRegex = /\d{4}/;

  return text.replace(ccRegex, "XXXX-XXXX-XXXX-XXXX")
              .replace(pinRegex, "XXXX");
}

// Test the function
console.log(censorMessage(message));

// Day 4: The exec() Method
// Challenge: Find all matches using exec()
const paragraph = "The quick brown fox jumps over the lazy dog. Another fox is hiding in the bushes.";

// TODO: Use exec() to find all occurrences of "fox"
function findAllFoxes(text) {
  const foxRegex = /fox/g;
  const matches = [];

  let match;
  while ((match = foxRegex.exec(text)) !== null) {
    matches.push(match[0]);
  }

  return matches;
}

// Test the function
console.log(findAllFoxes(paragraph));

// Day 5: Combining Regex Methods
// Challenge: Validate and extract data from a contact form
const formData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  message: "Hello, I'd like to inquire about your services."
};

// TODO: 
// 1. Validate the email using test()
// 2. Extract the phone number parts using match()
// 3. Replace any bad words in the message using replace()
function processContactForm(data) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /\+?(\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/;
  const badWordsRegex = /\b(bad|hate|angry)\b/gi;

  const isEmailValid = emailRegex.test(data.email);
  const phoneMatch = data.phone.match(phoneRegex);
  const cleanedMessage = data.message.replace(badWordsRegex, "**censored**");

  return {
    isEmailValid,
    phoneNumber: phoneMatch ? phoneMatch[0] : null,
    message: cleanedMessage
  };
}

// Test the function
console.log(processContactForm(formData));


// Day 6: Recursive Regex Matching
// Challenge: Find nested HTML tags using recursive regex
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

// TODO:
// 1. Write a recursive regex function to find all nested HTML tags
// 2. Extract the tag name and contents for each nested tag
function findNestedTags(html) {
  const regex = /<(\w+)>([^]*?)<\/\1>/g;
  const tags = [];

  let match;
  while ((match = regex.exec(html)) !== null) {
    const [full, tagName, content] = match;
    tags.push({ tagName, content });

    // Recursively find nested tags within the content
    const nestedTags = findNestedTags(content);
    tags.push(...nestedTags);
  }

  return tags;
}

// Test the function
console.log(findNestedTags(htmlContent));

// Day 7: Real-world Application
// Challenge: Build a URL parser using regular expressions
class URLParser {
  constructor(url) {
    this.url = url;
    this.parseURL();
  }

  parseURL() {
    // TODO:
    // 1. Extract the protocol, host, port, path, query, and hash using regex
    // 2. Handle edge cases like missing or optional parts of the URL
    const regex = /^((\w+):\/\/)?(?:(\w+):(\w+)@)?([^:\/\s]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const match = this.url.match(regex);

    if (match) {
      this.protocol = match[2] || '';
      this.auth = {
        username: match[3] || '',
        password: match[4] || ''
      };
      this.host = match[5];
      this.port = match[6] ? parseInt(match[6]) : null;
      this.path = match[7] || '';
      this.query = match[8] ? new URLSearchParams(match[8]) : new URLSearchParams();
      this.hash = match[9] || '';
    } else {
      throw new Error('Invalid URL format');
    }
  }

  getProtocol() { return this.protocol; }
  getHost() { return this.host; }
  getPort() { return this.port; }
  getPath() { return this.path; }
  getQuery() { return this.query; }
  getHash() { return this.hash; }
  getAuth() { return this.auth; }
}

// Test the URLParser
const url = 'https://user:password@example.com:8080/api/data?q=search#fragment';
const parser = new URLParser(url);
console.log(parser.getProtocol()); // "https"
console.log(parser.getHost()); // "example.com"
console.log(parser.getPort()); // 8080
console.log(parser.getPath()); // "/api/data"
console.log(parser.getQuery().get('q')); // "search"
console.log(parser.getHash()); // "fragment"
console.log(parser.getAuth()); // { username: "user", password: "password" }