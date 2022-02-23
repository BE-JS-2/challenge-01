const readLine = require("readline");
const chalk = require("chalk");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan = (tulisPertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(tulisPertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const header = (deskripsi) => {
  const log = console.log;
  log(chalk.blue.inverse.bold(`${deskripsi}`));
};

const operasiDuaBuahBilangan = async (deskripsi, jenis) => {
  header(deskripsi);
  let bilangan1 = await pertanyaan("Masukkan bilangan pertama : ");
  let bilangan2 = await pertanyaan("Masukkan bilangan Kedua : ");

  let operasi, hasil;
  if (jenis === 1) {
    operasi = "penjumlahan";
    hasil = +bilangan1 + +bilangan2;
  } else if (jenis === 2) {
    operasi = "pengurangan";
    hasil = +bilangan1 - +bilangan2;
  } else if (jenis === 3) {
    operasi = "perkalian";
    hasil = +bilangan1 * +bilangan2;
  } else if (jenis === 4) {
    operasi = "pembagian";
    hasil = +bilangan1 / +bilangan2;
  }
  console.log(
    chalk.green.inverse.bold(
      `\nHasil ${operasi} antara ${bilangan1} dan ${bilangan2} \n`
    ) + chalk.green.bold(`= ${hasil}`)
  );
  rl.close();
};

const operasiAkarKuadrat = async (deskripsi) => {
  header(deskripsi);
  let bilangan = await pertanyaan("Masukan suatu bilangan : ");
  let akar = Math.sqrt(bilangan);
  console.log(
    chalk.green.inverse.bold(`\nHasil akar kuadrat dari ${bilangan}  \n`) +
      chalk.green.bold(`= ${akar}`)
  );
  rl.close();
};

const operasiLuasPersegi = async (deskripsi) => {
  header(deskripsi);
  let sisi = await pertanyaan("Masukkan panjang sisi persegi (cm) : ");
  let luas = Math.pow(sisi, 2);
  console.log(
    chalk.green.inverse.bold(`\nLuas Persegi dengan sisi ${sisi}cm \n`) +
      chalk.green.bold(`= ${luas} cm\u00B2`)
  );
  rl.close();
};

const operasiVolumeKubus = async (deskripsi) => {
  header(deskripsi);
  let sisi = await pertanyaan("Masukan panjang sisi kubus (cm) : ");
  let volume = Math.pow(sisi, 3);
  console.log(
    chalk.green.inverse.bold(`\nVolume Kubus dengan sisi ${sisi}cm \n`) +
      chalk.green.bold(`= ${volume} cm\u00B3`)
  );
  rl.close();
};

const operasiVolumeTabung = async (deskripsi) => {
  header(deskripsi);
  let jari_jari = await pertanyaan("Masukan jari-jari tabung (cm) : ");
  let tinggi = await pertanyaan("Masukkan tinggi tabung (cm) : ");
  let volume = Math.PI * Math.pow(jari_jari, 2) * tinggi;
  console.log(
    chalk.green.inverse.bold(
      `\nVolume Tabung dengan jari-jari ${jari_jari}cm dan tinggi ${tinggi}cm \n`
    ) + chalk.green.bold(`= ${volume} cm\u00B3`)
  );
  rl.close();
};

module.exports = {
  operasiDuaBuahBilangan,
  operasiAkarKuadrat,
  operasiLuasPersegi,
  operasiVolumeKubus,
  operasiVolumeTabung,
};
