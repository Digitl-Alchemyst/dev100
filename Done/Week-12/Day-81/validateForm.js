const validateFormData = (formData) => {
  // Process and validate form data with type coercion handling
  const validationErrors = [];
  const processedData = {};

  processedData.userId = +formData.userId;
  if (!formData.userId) {
    validationErrors.push("User ID is required.");
  }
  if (isNaN(formData.userId)) {
    validationErrors.push("User ID must be a number.");
  }

  processedData.quantity = +formData.quantity;
  if (isNaN(formData.quantity)) {
    validationErrors.push("Quantity must be a number.");
  }
  if (formData.quantity <= 0) {
    validationErrors.push("Quantity must be greater than 0.");
  }

  processedData.price = +formData.price;
  if (isNaN(formData.price)) {
    validationErrors.push("Price must be a number.");
  }
  if (formData.price <= 0) {
    validationErrors.push("Price must be greater than.");
  }

  processedData.isSubscribed = formData.isSubscribed === "true";

  processedData.promoCode = formData.promoCode ?? "";

  processedData.discountPercent = +formData.discountPercent;
  if (isNaN(formData.discountPercent)) {
    validationErrors.push("Discount Percent must be a number.");
  }
  if (formData.discountPercent < 0 || formData.discountPercent > 100) {
    validationErrors.push("Discount Percent must be between 0 and 100.");
  }

  const calculatedTotals = {
    subtotal: processedData.quantity * processedData.price,
    discount: 0,
    total: 0,
  };

  calculatedTotals.discount = processedData.subtotal * (processedData.discountPercent / 100);
  calculatedTotals.total = processedData.subtotal - calculatedTotals.discount;

  // Return validation results and processed data
  return {
    isValid: validationErrors.length === 0,
    processedData,
    validationErrors,
    calculatedTotals,
  };
};

// Test Case 1: Valid input
const validData = {
  userId: "123",
  quantity: "5",
  price: 19.99,
  isSubscribed: "true",
  promoCode: "",
  discountPercent: "10",
};

// Test Case 2: Invalid input
const invalidData = {
  userId: "abc",
  quantity: "five",
  price: "19.99x",
  isSubscribed: "yes",
  promoCode: null,
  discountPercent: "ten",
};

console.log(validateFormData(validData));
console.log(validateFormData(invalidData));
