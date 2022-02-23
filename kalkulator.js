const daftarOperasi = require("./operasi");
const prompt = require("prompt-sync")();

const inputAngka = (urutan) => {
  do {
    const input = prompt(`Masukkan bilangan ${urutan}: `);
    if (!isNaN(input)) return input;
  } while (isNaN(urutan));
};

const prosesInput = (operator) => {
  const operatorObjek = daftarOperasi.filter(
    (op) => op.operator === operator
  )[0];

  console.log(`
    Operasi yang anda pilih : ${operatorObjek.operasi},
    Operator                : ${operatorObjek.operator},
    Jumlah input            : ${operatorObjek.input},
    Rumus                   : ${operatorObjek.rumus},
  `);
  
  const input1 = inputAngka("Pertama");
  if (operatorObjek.input === "2 kali") {
    const input2 = inputAngka("Kedua");
    console.log(
      `Operasi menghitung ${operatorObjek.operasi} dengan input ${input1} dan ${input2}`
    );
    const hasil = operatorObjek.hitung(Number(input1), Number(input2));
    console.log("hasil: " + hasil);
    return;
  }
  console.log(
    `Operasi menghitung ${operatorObjek.operasi} dengan input ${input1}`
  );
  const hasil = operatorObjek.hitung(Number(input1));
  console.log("hasil: " + hasil);
};

module.exports = prosesInput;

