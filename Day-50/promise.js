function delayedGreeting(arr, delay) {
  // TODO: Return a Promise that resolves with a greeting message after the specified delay
  return arr.reduce((promise, name, index) => {
    return promise.then(() => {
      return new Promise((resolve) => {

          setTimeout(() => {
            const message = `Greetings ${name}`;
            console.log(message)
            resolve();
          }, delay + index * 1000);

      });
    });

  }, Promise.resolve()).then(() => {
    return 'All guest have been greeted.'
  });
}

delayedGreeting(["Alice", "Bob", "Tim", "Jill"], 2000).then((message) =>
  console.log(message)
);
