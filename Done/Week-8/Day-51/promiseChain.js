function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1");
      resolve(1);
      reject("Error in step 1");
    }, 1000);
  });
}

function step2(previousResult) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Step 2 before " + previousResult);
      resolve(previousResult + 1);
      reject("Error in step 2");
    }, 1000)
  );
}

function step3(previousResult) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Step 3 before " + previousResult);
      resolve(previousResult + 1);
      reject("Error in step 3");
    }, 1000)
  );
}

step1()
  .then(step2)
  .then(step3)
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.error(error));

console.log("This message should appear first");
