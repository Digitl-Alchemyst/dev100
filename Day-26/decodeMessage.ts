const encodedMessage =
  "0101𠍒Ger𠍐}Ys𠍋higShi𠍗q}𠍎qiwweki𠍏𠍍xlmw𠍖gsyph𠍕fi𠍔e𠍑wxiepxl𠍌jsvq𠍏sj𠍒gsqq𠍐yrmgexmsr𠍋mr$e�ttmrgl𠍎𠍏{lex𠍍hs𠍖}sy𠍕xlmro𠍔C𠍑𠍌3232";

function createDecoder() {
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
      let decodedMessage = removePrefix(message);
      decodedMessage = shiftASCIIBack(decodedMessage);
      decodedMessage = shiftASCIIBackAgain(decodedMessage).join("");
      decodedMessage = reverseMessage(decodedMessage);

      return decodedMessage;
    };
}

const decode = createDecoder();
const decodedMessage = decode(encodedMessage);
console.log('🚀🕷️🔥🎉🚨 --------------------------------------------🚀🕷️🔥🎉🚨')
console.log('🚀🕷️🔥🎉🚨 ~ decodedMessage:', decodedMessage)
console.log('🚀🕷️🔥🎉🚨 --------------------------------------------🚀🕷️🔥🎉🚨')


