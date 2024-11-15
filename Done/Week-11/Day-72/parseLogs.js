function parseLogEntry(entry) {
  // TODO: Use the match() method to extract the date, time, log level, and username
  const regex =
    /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) \[(.*?)\] User (.*?) logged in/;
  const matches = entry.match(regex);

  if (matches) {
    // Your code here to extract the data
    return {
      date: matches[1],
      time: matches[2],
      logLevel: matches[3],
      username: matches[4],
    };
  } else {
    return null;
  }
}

const logEntry = "2023-04-15 12:34:56 [INFO] User John Doe logged in";

console.log(parseLogEntry(logEntry)); // Output: { date: '2023-04-15', time: '12:34:56', logLevel: 'INFO', username: 'John Doe' }