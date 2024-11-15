function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function step1() {
  // Your code here
  await sleep(1000);
  const result = 1;
  console.log('Result set to:', result);
  return {
      message: `Step 1 complete!}`,
      result
    };
}

async function step2(previousResult) {
    // Your code here
    await sleep(1000);
    const newResult = previousResult.result + 1;
    console.log('New result is:', newResult);
    return {
        message: `Step 2 complete: ${previousResult.message}`,
        result: newResult,
    };
}

async function step3(previousResult) {
    // Your code here
    await sleep(3000);
    const newResult = previousResult.result + 1;
    console.log('New result is:', newResult);
  return {
    message: `Step 3 complete: ${previousResult.message}`,
    result: newResult,
  };
}

async function runProcess() {
  try {
    const result1 = await Promise.race([step1(), timeout(2000)]); 
    const result2 = await Promise.race([step2(result1), timeout(2000)]); 
    const result3 = await Promise.race([step3(result2), timeout(2000)]); 
    return result3;
  } catch (error) {
    throw error;
  }
}

function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), ms)
  );
}

console.log("Starting the process...");
runProcess()
  .then((finalResult) =>
    console.log(
      "Process completed:",
      finalResult.message,
      "Final result:",
      finalResult.result
    )
  )
  .catch((error) => console.error("An error occurred:", error));

console.log("This message should appear before the process completes");
