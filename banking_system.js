class BankAccount {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  introduce() {
    console.log(`Selamat datang ${this.name} di Bank`);
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          this.balance += amount;
          resolve(`Deposit berhasil. Saldo Anda sekarang: ${this.balance}`);
        } else {
          reject("Jumlah deposit harus lebih dari 0.");
        }
      }, 1000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          resolve(`Penarikan berhasil. Saldo Anda sekarang: ${this.balance}`);
        } else if (amount <= 0) {
          reject("Jumlah penarikan harus lebih dari 0.");
        } else {
          reject("Saldo tidak mencukupi untuk melakukan penarikan.");
        }
      }, 1000);
    });
  }
}

async function main() {
  let name = window.prompt("Masukan nama anda");
  const myAccount = new BankAccount(name);
  myAccount.introduce();

  const saldoElement = document.getElementById("saldo");
  saldoElement.textContent = myAccount.balance;

  try {
    window.deposit = async () => {
      let jumlahDeposit = window.prompt("Masukkan jumlah yang ingin dideposit");
      const depositResult = await myAccount.deposit(Number(jumlahDeposit));
      console.log(depositResult);
      saldoElement.textContent = myAccount.balance;
    };

    window.withdraw = async () => {
      let jumlahWithdraw = window.prompt("Masukkan jumlah yang ingin diwithdraw");
      const withdrawResult = await myAccount.withdraw(Number(jumlahWithdraw));
      console.log(withdrawResult);
      saldoElement.textContent = myAccount.balance;
    };
  } catch (error) {
    console.error(error);
  }
}

main();
