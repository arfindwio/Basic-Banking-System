let saldo = 0;

const updateSaldoDisplay = () => {
  const saldoDisplay = document.getElementById("saldoDisplay");
  saldoDisplay.textContent = saldo;
};

const tambahSaldo = () => {
  let menambahSaldo = window.prompt("Masukkan angka untuk menambah saldo:");
  if (menambahSaldo !== null) {
    saldo += parseInt(menambahSaldo);
    updateSaldoDisplay();
    alert("Saldo berhasil ditambahkan");
    console.log("Saldo berhasil ditambahkan");
    console.log("Saldo anda :", saldo);
  }
};

const kurangiSaldo = () => {
  let mengurangSaldo = window.prompt("Masukkan angka untuk mengurangi saldo:");
  if (mengurangSaldo !== null) {
    mengurangSaldo = parseInt(mengurangSaldo);
    if (saldo >= mengurangSaldo) {
      saldo -= mengurangSaldo;
      updateSaldoDisplay();
      alert("Saldo berhasil dikurangi");
      console.log("Saldo berhasil dikurangi");
      console.log("Saldo anda :", saldo);
    } else {
      alert("Saldo gagal dikurangi karena saldo tidak mencukupi");
      console.log("Saldo gagal dikurangi karena saldo tidak mencukupi");
    }
  }
};

updateSaldoDisplay();
