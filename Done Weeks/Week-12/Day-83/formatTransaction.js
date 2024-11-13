const formatTransactionData = (transaction, locale = "en-US") => {
  // Format dates and numbers for given transaction data
  // Date Formatting
    const date = new Date(transaction.transactionDate);

    const formattedDate = date.toLocaleDateString(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })

    const formattedAmount = transaction.amount.toLocaleString(locale, {
      style: "currency",
      currency: "USD",
    });
    const formattedQuantity = transaction.quantity.toLocaleString(locale, {
      useGrouping: true,
    });
    const formattedUnitPrice = transaction.unitPrice.toLocaleString(locale, {
      style: "currency",
      currency: "USD",
    });
    const formattedTaxRate = transaction.taxRate.toLocaleString(locale, {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedExchangeRate = transaction.exchangeRate.toLocaleString(locale, {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  // Return formatted data based on locale
  return {
    date: formattedDate,
    amount: formattedAmount,
    quantity: formattedQuantity,
    unitPrice: formattedUnitPrice,
    taxRate: formattedTaxRate,
    exchangeRate: formattedExchangeRate,
  };
}


// Test different locales
const testData = {
    transactionDate: "2024-03-15T14:30:00Z",
    amount: 1234567.89,
    quantity: 5,
    unitPrice: 49.99,
    taxRate: 0.21,
    exchangeRate: 1.18
};

console.log("US Format:", formatTransactionData(testData, 'en-US'));
console.log("UK Format:", formatTransactionData(testData, 'en-GB'));
console.log("German Format:", formatTransactionData(testData, 'de-DE'));
console.log("Japanese Format:", formatTransactionData(testData, 'ja-JP'));