function processContactForm(data) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /\+?(\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/;
  const badWordsRegex = /\b(bad|hate|angry)\b/gi;

  const isEmailValid = emailRegex.test(data.email);
  const phoneMatch = data.phone.match(phoneRegex);
  const cleanedMessage = data.message.replace(badWordsRegex, "**censored**");

  return {
    isEmailValid,
    phoneNumber: phoneMatch ? phoneMatch[0] : null,
    message: cleanedMessage,
  };
}


console.log(
  processContactForm({
    name: "John Doe",
    email: "invalid@email",
    phone: "555-1234-5678",
    message: "I hate this service!",
  })
);
console.log(
  processContactForm({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    message: "Hello, I'd like to inquire about your services.",
  })
);

console.log(
  processContactForm({
    name: "Sarah Connor",
    email: "sarah.connor@example.com",
    phone: "5555555555",
    message: "What's the turnaround time for orders? Thanks! :)",
  })
);

console.log(
  processContactForm({
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+44 7890 123456",
    message: "Hi!, Im Mike and I hae a bad problem",
  })
);

console.log(
  processContactForm({
    name: "Jane Smith",
    email: "jane.smith@website",
    phone: "123-4567",
    message: "Please send me more details about the pricing.",
  })
);