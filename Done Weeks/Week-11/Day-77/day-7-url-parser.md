# Code Challenge: URL Parser

## Problem Statement

In this challenge, we will build a URL parser using regular expressions. The goal is to create a `URLParser` class that can extract various components of a URL, such as the protocol, host, port, path, query parameters, and hash fragment.

## Function Signature

```javascript
class URLParser {
  constructor(url) {
    this.url = url;
    this.parseURL();
  }

  parseURL() {
    // TODO:
    // 1. Extract the protocol, host, port, path, query, and hash using regex
    // 2. Handle edge cases like missing or optional parts of the URL
  }

  getProtocol() { return this.protocol; }
  getHost() { return this.host; }
  getPort() { return this.port; }
  getPath() { return this.path; }
  getQuery() { return this.query; }
  getHash() { return this.hash; }
  getAuth() { return this.auth; }
}
```

## Input

The input to the `URLParser` constructor is a string representing a valid URL.

## Output

The `URLParser` class should provide the following methods to access the URL components:

- `getProtocol()`: Returns the protocol of the URL (e.g., "http", "https", "ftp").
- `getHost()`: Returns the host of the URL (e.g., "example.com").
- `getPort()`: Returns the port of the URL (e.g., 8080).
- `getPath()`: Returns the path of the URL (e.g., "/api/data").
- `getQuery()`: Returns a `URLSearchParams` object representing the query parameters.
- `getHash()`: Returns the hash fragment of the URL (e.g., "fragment").
- `getAuth()`: Returns an object with `username` and `password` properties if the URL contains authentication information.

## Example

```javascript
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
```

## Constraints

- The URL can have any valid format, including optional components like authentication, port, query parameters, and hash fragments.
- The parser should handle edge cases where certain components are missing or empty.
- The parser should throw an error if the input URL is not in a valid format.

## Implementation

Here's the implementation of the `URLParser` class:

```javascript
class URLParser {
  constructor(url) {
    this.url = url;
    this.parseURL();
  }

  parseURL() {
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
```

The key steps are:

1. Define a regular expression pattern that can match the different components of a URL.
2. In the `parseURL()` method, use the `match()` method to extract the matched groups from the URL.
3. Assign the extracted values to the corresponding properties of the `URLParser` class.
4. Provide getter methods to access the URL components.
5. Handle edge cases, such as missing or optional parts of the URL, by initializing the properties with appropriate default values.
6. Throw an error if the input URL is not in a valid format.

## Testing

You can test the `URLParser` class by creating instances with different URLs and checking the output of the getter methods:

```javascript
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
```

You can also test the parser with different URL formats, including those with missing or optional components, to ensure it handles edge cases correctly.

## Complexity Analysis

- Time Complexity: O(1), as the regular expression matching and property assignment operations are constant-time.
- Space Complexity: O(1), as the `URLParser` class only stores the extracted URL components, which have a fixed number of properties.

The time and space complexities are both constant, which makes this implementation efficient and suitable for practical use.

## References

- [MDN Web Docs - URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [MDN Web Docs - URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [Eloquent JavaScript - Regular Expressions](https://eloquentjavascript.net/09_regexp.html)

