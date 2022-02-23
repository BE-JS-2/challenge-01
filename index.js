const prosesInput = require("./kalkulator");
const daftarOperasi = require("./operasi");
const prompt = require("prompt-sync")();


console.log(`
    Selamat datang di program Kalkulator
    by: Mohammad Khoirul Anam
    --------------------------
`);

console.log('Silahkan pilih operasi di bawah ini: ');
const listOperasi = daftarOperasi.map(
    (op) => `Operasi ${op.operasi} gunakan keyword: ${op.operator}`
  );
  console.log(listOperasi);
  
  const operatorInput = prompt("Masukkan operasi sesuai keyword: ");
  console.log(`Anda memilih ${operatorInput}`);
  
  prosesInput(operatorInput)