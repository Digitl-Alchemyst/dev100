class StepError extends Error {
  constructor(step, message) {
    // Your code here
    super(message);
    this.step = step;
    this.name = "StepError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, StepError);
    }
  }
  toString() {
    return `StepError [${this.step}]: ${this.message}`;
  }
}

function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), ms)
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function step1() {
  // Your code here
  try {
    await sleep(1000);
    const result = 1;
    console.log("Result set to:", result);
    return {
      message: `Step 1 complete!`,
      result,
    };
  } catch (error) {
    throw new StepError("step1", `Error in step 1: ${error.message}`);
  }
}

async function step2(previousResult) {
  // Your code here
  try {
    await sleep(1000);
    const newResult = previousResult.result + 1;
    console.log("New result is:", newResult);
    return {
      message: `Step 2 complete: ${previousResult.message}`,
      result: newResult,
    };
  } catch (error) {
    throw new StepError("step2", `Error in step 2: ${error.message}`);
  }
}

async function step3(previousResult) {
  // Your code here
    try {
      await sleep(3000);
      const newResult = previousResult.result + 1;
      console.log("New result is:", newResult);
      return {
        message: `Step 2 complete: ${previousResult.message}`,
        result: newResult,
      };
    } catch (error) {
      throw new StepError("step2", `Error in step 3: ${error.message}`);
    }
}

async function runProcess(retries = 3) {
  // Your code here
  try {
    const result1 = await Promise.race([step1(), timeout(2000)]);
    const result2 = await Promise.race([step2(result1), timeout(2000)]);
    const result3 = await Promise.race([step3(result2), timeout(2000)]);
    return result3;
  } catch (error) {
    if (error instanceof StepError && retries > 0) {
      console.log(`Retrying... (Attempt ${retries})`);
      return runProcess(retries - 1);
    } else {
      throw error;
    }
  }
}

console.log("Starting the process...");
runProcess()
  .then((result) => console.log("Process completed successfully:", result))
  .catch((error) => console.error("Process failed:", error.message));
console.log("This message should appear before the process completes");
