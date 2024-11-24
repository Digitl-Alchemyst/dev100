type LogLevel = 'info' | 'warning' | 'error';

interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: number;
    metadata?: Record<string, unknown>;
}

/**
 * Creates a log entry with the specified level, message, and optional metadata
 * @param level - The severity level of the log
 * @param messageOrError - The message string or Error object to log
 * @param rest - Additional metadata (object) or tags (strings)
 * @returns A structured log entry
 */
function log(
    level: LogLevel,
    messageOrError: string | Error,
    ...rest: (Record<string, unknown> | string)[]
): LogEntry {
    const timestamp = Date.now();
    let message: string;
    let metadata: Record<string, unknown> = {};
  
    if (messageOrError instanceof Error) {
        message = messageOrError.message;
        metadata = {
            stack: messageOrError.stack,
            name: messageOrError.name
        };
    } else {
        message = messageOrError;
    }
  
    if (rest.length > 0) {
        const firstArg = rest[0];
        if (typeof firstArg === 'object' && firstArg !== null) {
            metadata = { ...metadata, ...firstArg };
        } else {
            metadata.tags = rest;
        }
    }
  
    return {
        level,
        message,
        timestamp,
        ...(Object.keys(metadata).length > 0 && { metadata })
    };
}

// Example usage - all of these should type-check correctly
console.log(log('info', 'Application started'));
console.log(log('error', new Error('Database error')));
console.log(log('warning', 'High CPU usage', { cpu: '90%' }));
console.log(log('info', 'Batch job', 'important', 'automated'));

// For demonstration, here are some examples that would fail type checking:
// log('debug', 'Invalid log level');  // 'debug' is not assignable to LogLevel
// log('info');  // Missing required messageOrError parameter
// log('info', 'Message', { metadata: true }, 'extra');  // Can't mix object and string rest parameters