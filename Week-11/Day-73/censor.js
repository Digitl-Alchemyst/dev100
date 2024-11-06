function censorMessage(text) {
  // TODO: Use the replace() method to censor the credit card number and PIN
  const ccRegex = /\d{4}-\d{4}-\d{4}-\d{4}/;
  const PINRegex = /\d{4}/;

  text = text.replace(ccRegex, "****-****-****-****");
  text = text.replace(PINRegex, "****");

  return text;
}


const message =
  "My credit card number is 1234-5678-9012-3456 and my PIN is 1234.";

console.log(censorMessage(message));
