// Parameters
// Enert the number to multiply by and the number to multiply to. Enter null to generate all multiplication tables from 1 to 10.
const numberToMultiplyBy = null;
const numberToMultiplyTo = null;

// Function to create a multiplication table
function createMultiplicationTable(numberToMultiplyBy, numberToMultiplyTo) {
  // Check if either parameter is null
  if (numberToMultiplyBy === null || numberToMultiplyTo === null) {
    // Generate all multiplication tables from 1 to 10
    for (let base = 1; base <= 10; base++) {
      let table = []; // Initialize the table array for each base number
      for (let i = 1; i <= 10; i++) {
        table.push({
          number: base,
          multiplier: i,
          result: base * i,
        });
      }
      // Output each table separately
      console.log(`📚 Multiplication Table for Multiples of ${base}:`);
      console.table(table);
    }
    return null; // Return null to indicate no specific range table was created
  } else {
    let table = []; // Initialize the table array
    // Generate a multiplication table for the given range
    for (let i = 1; i <= numberToMultiplyTo; i++) {
      table.push({
        number: numberToMultiplyBy,
        multiplier: i,
        result: numberToMultiplyBy * i,
      });
    }
    return table;
  }
}

// Generate the table
const table = createMultiplicationTable(numberToMultiplyBy, numberToMultiplyTo);

// Output the table only if it's not null
if (table !== null) {
  console.log('');
  console.log('📚 ~ createMultiplicationTable ~ Multiplication Table:');
  console.log('');
  console.log(
    `🧮 ~ Multiples of ${numberToMultiplyBy} to ${numberToMultiplyTo}:`,
  );
  console.table(table);
}
