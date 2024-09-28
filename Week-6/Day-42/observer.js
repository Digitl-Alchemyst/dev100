class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer {
  constructor(name, onUpdate) {
    this.name = name;
    this.onUpdate = onUpdate;
  }
  update(data) {
    this.onUpdate(data);
    console.log(data);
  }
}

// Usage
const subject1 = new Subject();
const subject2 = new Subject();

const observer1 = new Observer("Observer 1", (data) =>
  console.log("Observer 1 received:", data)
);
const observer2 = new Observer("Observer 2", (data) =>
  console.log("Observer 2 received:", data)
);
const observer3 = new Observer("Observer 3", (data) =>
  console.log("Observer 3 received:", data)
);

subject1.addObserver(observer1);
subject1.addObserver(observer2);
subject2.addObserver(observer2);
subject2.addObserver(observer3);

subject1.notifyObservers("Hello from Subject 1");
subject2.notifyObservers("Greetings from Subject 2");

subject1.removeObserver(observer2);
subject1.notifyObservers("Observer 2 should not receive this");