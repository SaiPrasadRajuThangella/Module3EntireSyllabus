function BankAcc(name, branch, balance) {
  this.name = name;
  this.branch = branch;
  this.balance = balance;
}
const bankaccount = new BankAcc("rockey", "acx", 636);

BankAcc.prototype.withDraw = function (amount) {
  this.balance -= amount;
  return this.balance;
};
BankAcc.prototype.addMoney = function (amount) {
  this.balance += amount;
};
console.log(bankaccount);
// ------------------------------------------------

function savingsAcc(name, branch, balance) {
  // this.name = name;
  // this.branch = branch;
  // this.balance = balance;
  BankAcc.call(this, name, branch, balance);
}

savingsAcc.prototype.eduLoan = function (amount) {
  console.log(`you have been credited ${amount} as your loan `);
};

savingsAcc.prototype.__proto__ = BankAcc.prototype;
const shubhamAccount = new savingsAcc("shockey", "acasdsax", 6536);
console.log(shubhamAccount);
