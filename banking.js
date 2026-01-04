//====================================
//            BankAccount
//====================================
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    }

    console.log("unsufficient funds!");
  }
}

//====================================
//               Bank
//====================================
class Bank {
  constructor() {
    this.accounts = [];
  }

  getAccountByName(name) {
    const account = this.accounts.find((account) => account.owner === name);

    if (!account) {
      throw new Error("account not found!");
    }

    return account;
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  transfer(fromName, toName, amount) {
    const fromAccount = this.getAccountByName(fromName);
    const toAccount = this.getAccountByName(toName);

    if (fromAccount.balance - amount >= 0) {
      fromAccount.balance -= amount;
      toAccount.balance.deposit(amount);
    } else {
      console.log("not enough funds to transfer.");
    }
  }

  showBalance() {
    this.accounts.forEach((account) => {
      console.log("Name:", account.owner, "Balance:", this.balance);
    });
  }
}
