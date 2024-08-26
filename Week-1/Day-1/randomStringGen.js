//Initial Variables
//Random Number
const cryptoNumber = crypto.getRandomValues(new Uint32Array(1));
const mathNumber =  Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 1000);
const multiplier =  Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 1000);

const randomNumber = cryptoNumber[0] + mathNumber * multiplier;
console.log('Your lucky numbers:', randomNumber);

// Random String 
const randomString = crypto.randomUUID();

// Formatted Variables 
const stringNumber = randomNumber.toString();
const stringWithoutDashes = randomString.replace(/-/g, '');

console.log('Your lucky string:', stringWithoutDashes);

function randomizeString(stringNumber, stringWithoutDashes) {
  let combinedString = '';
  const maxLegnth = stringNumber.length + stringWithoutDashes.length;
  let indices = [];

  // Create an array of indices for both strings
  for (let i = 0; i < stringNumber.length; i++) {
    indices.push({ from: 'stringNumber', index: i });
  }
  for (let i = 0; i < stringWithoutDashes.length; i++) {
    indices.push({ from: 'stringWithoutDashes', index: i });
  }

  // Shuffle the indices array
  indices = indices.sort(() => Math.random() - 0.5);

  // Build the combined string based on shuffled indices
  for (let i = 0; i < maxLegnth; i++) {
    if (indices[i].from === 'stringNumber') {
      combinedString += stringNumber.charAt(indices[i].index);
    } else {
      combinedString += stringWithoutDashes.charAt(indices[i].index);
    }
  }

  return combinedString;
}

// Produce the randomized string
const randomizedString = randomizeString( stringNumber, stringWithoutDashes, );
console.log('🚀 ~ Randomized String:', randomizedString);
