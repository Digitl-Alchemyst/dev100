const setupServer = (userConfig = {}) => {
  // TODO: Return a configuration object with:
  // - All required server settings
  // - Default values for missing properties
  // - Renamed properties where specified
  const {
        host: serverHost = "localhost",
        port: serverPort = 3000,
        timeout = 5000,
        retries: maxRetries = 3,
        ssl: secure = false
  } = userConfig;
  return {
    serverHost,
    serverPort,
    timeout,
    maxRetries,
    secure,
  };
};

// Test with default values
console.log(setupServer());

// Test with partial configuration
console.log(setupServer({ 
    host: "example.com", 
    port: 8080 
}));

// Test with complete configuration
console.log(setupServer({
    host: "example.com",
    port: 8080,
    timeout: 3000,
    retries: 5,
    ssl: true
}));