class EventEmitter {
  constructor() {
    this.events = new Map()
  }

  on = (eventName, callback) => {
    // TODO: Register an event listener
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);
  };

  emit = (eventName, ...args) => {
    // TODO: Trigger all callbacks associated with the event
    if (!this.events.has(eventName)) return false;
    this.events.get(eventName).forEach(callback => callback(...args));
    return true;
  };
}


const emitter = new EventEmitter();

// Test multiple listeners
emitter.on('test', (data) => console.log('Listener 1:', data));
emitter.on('test', (data) => console.log('Listener 2:', data));

// Test event with multiple arguments
emitter.emit('test', 'Hello World', 123);

// Expected Output:
// Listener 1: Hello World
// Listener 2: Hello World

emitter.on("greet", (name) => console.log(`Hi ${name}`));
emitter.emit("greet", "Alice");

emitter.on("add", (a, b) => console.log(a + b));
emitter.emit("add", 5, 3);