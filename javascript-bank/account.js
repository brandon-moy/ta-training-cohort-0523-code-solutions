/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    const trans = new Transaction('deposit', amount);
    this.transactions.push(trans);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    const trans = new Transaction('withdrawal', amount);
    this.transactions.push(trans);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  let balance = 0;
  if (!this.transactions.length) return balance;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
