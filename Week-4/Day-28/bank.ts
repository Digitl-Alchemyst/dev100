const bankAccount = (function () {
    return function (name, initialBalance) {
  let balance = initialBalance;
  let accountHolder = name;

  // Private function
  function validateAmount(amount) {
    return typeof amount === "number" && amount > 0;
  }

  // Public methods
  return {
    deposit: function (amount) {
      if (validateAmount(amount)) {
        balance += amount;
        return balance;
      }
    },
    withdraw: function (amount) {
      if (validateAmount(amount) && amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds";
      }
    },
    getBalance: function () {
      return balance;
    },
    getAccountHolder: function () {
      return accountHolder;
    },
  };
}
})();

const myAccount = bankAccount("John Doe", 1000);

console.log(myAccount.deposit(500)); // Output: 1500
console.log(myAccount.getBalance()); // Output: 1500
console.log(myAccount.withdraw(200)); // Output: 1300
console.log(myAccount.getBalance()); // Output: 1300
console.log(myAccount.getAccountHolder()); // Output: John Doe
console.log(myAccount.withdraw(2000)); // Output: Error message
