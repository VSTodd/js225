function makeAccount(num) {
  let number = num;
  let balance = 0;
  let transactions = [];
  return {
    balance() {
      return balance;
    },

    number() {
      return number;
    },

    transactions() {
      return transactions;
    },

    deposit(amount) {
      balance += amount;
      transactions.push({type: "deposit", amount});
      return amount;
    },

    withdraw(amount) {
      if (amount > balance) amount = balance;
      balance -= amount;
      transactions.push({type: "withdrawal", amount});
      return amount;
    },
  };
}

function makeBank() {
  let number = 100;
  let accounts = [];
  return {
    openAccount() {
      let newAccount = makeAccount(number += 1);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    }
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]