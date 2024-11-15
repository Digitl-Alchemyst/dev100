class URLParser {
  constructor(url) {
    this.url = url;
    this.parseURL();
  }

  parseURL() {
    // TODO:
    const regex =
      /^((\w+):\/\/)?(?:(\w+):(\w+)@)?([^:\/\s]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const match = this.url.match(regex);
    if (match) {
      this.protocol = match[2] || "";
      this.auth = {
        username: match[3] || "",
        password: match[4] || "",
      };
      this.host = match[5];
      this.port = match[6] ? parseInt(match[6]) : null;
      this.path = match[7] || "";
      this.query = match[8]
        ? new URLSearchParams(match[8])
        : new URLSearchParams();
      this.hash = match[9] || "";
    } else {
      throw new Error("Invalid URL format");
    }
  }

  getProtocol() {
    return this.protocol;
  }
  getHost() {
    return this.host;
  }
  getPort() {
    return this.port;
  }
  getPath() {
    return this.path;
  }
  getQuery() {
    return this.query;
  }
  getHash() {
    return this.hash;
  }
  getAuth() {
    return this.auth;
  }
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