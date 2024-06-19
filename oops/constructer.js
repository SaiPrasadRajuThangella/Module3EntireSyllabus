class BankAccount {
  constructor(name, branch, accountBalance) {
    this.name = name;
    this.branch = branch;
    this.accountBalance = accountBalance;
  }
  withDraw(amount) {
    this.accountBalance -= amount;
  }
}

// class savingsAccount {
//     constructor(name, branch, accountBalance) {
//       this.name = name;
//       this.branch = branch;
//       this.accountBalance = accountBalance;
//     }
//     withDraw(amount) {
//       this.accountBalance -= amount;
//     };
//     educationLoan(){
//         console.log(`you have cleared the loan of ${10*this.accountBalance}`)
//     }
//   }

class savingsAccount extends BankAccount {
  constructor(name, branch, accountBalance) {
    // this.name = name;
    // this.branch = branch;
    // this.accountBalance = accountBalance;
    super(name, branch, accountBalance);
  }
  //   withDraw(amount) {
  //     this.accountBalance -= amount;
  //   }
  educationLoan() {
    console.log(`you have cleared the loan of ${10 * this.accountBalance}`);
  }
}

const creditor = new savingsAccount("asdfsdf", "sdsdfd", 5050);
creditor.educationLoan();
console.log(creditor);
const customer = new BankAccount("abc", "sbi", 100000);

console.log(customer);
