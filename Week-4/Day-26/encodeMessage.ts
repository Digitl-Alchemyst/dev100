const originalMessage =
  "🍎Can🍌yUo🍇decOde🍓my🍊message🍋🍉this🍒could🍑be🍐a🍍stealth🍈form🍋of🍎comm🍌unication🍇in a🍓pinch🍊🍋what🍉do🍒you🍑think🍐?🍍🍈";

function createEncoder() {
  // Use nested functions and closure to create the encoding steps

  const reverseMessage = (message) => {
    return message.split("").reverse().join("");
  };
  const shiftASCII = (message) => {
    return message.split("").map((char) => {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    });
  };
  const shiftASCIIAgain = (message) => {
    return message.map((char) => {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    });
  };
  const joinMessage = (message) => {
    return message.join("");
  };
  const appendPrefix = (message) => {
    return "0101" + message;
  };

  return function (message) {
    let encodedMessage = reverseMessage(message);
    encodedMessage = shiftASCII(encodedMessage);
    encodedMessage = shiftASCIIAgain(encodedMessage);
    encodedMessage = joinMessage(encodedMessage);
    encodedMessage = appendPrefix(encodedMessage);

    return encodedMessage;
  };
}



function createDecoder() {
  // TODO: Implement the encoding logic here
  // Use nested functions and closure to create the encoding steps
  
  const removePrefix = (message) => {
    return message.slice(4);
  };

  const shiftASCIIBack = (message) => {
    return message.split("").map((char) => {
      return String.fromCharCode(char.charCodeAt(0) - 1);
    });
  };
  
  const shiftASCIIBackAgain = (message) => {
    return message.map((char) => {
      return String.fromCharCode(char.charCodeAt(0) - 1);
    });
  };

  const reverseMessage = (message) => {
    return message.split("").reverse().join("");
  };

  return function (message) {
    // TODO: Call the nested functions here to encode the message
    let decodedMessage = removePrefix(encodedMessage);
    decodedMessage = shiftASCIIBack(decodedMessage);
    decodedMessage = shiftASCIIBackAgain(decodedMessage);
    decodedMessage = reverseMessage(decodedMessage.join(""));
    
    return decodedMessage;
  };
}

const encode = createEncoder();
const encodedMessage = encode(originalMessage);
console.log(encode(encodedMessage));
const decode = createDecoder();
const decodedMessage = decode(encodedMessage);
console.log(decodedMessage);

// Check if the final result matches the original message
console.log("Matches original:", decodedMessage == originalMessage);
