const yargs = require("yargs");
const fungsi = require("./fungsi.js");

const deskripsi = [
  "Program Penjumlahan Dua Buah Bilangan",
  "Program Pengurangan Dua Buah Bilangan",
  "Program Perkalian Dua Buah Bilangan",
  "Program Pembagian Dua Buah Bilangan",
  "Program Menghitung Akar Kuadrat Sebuah Bilangan",
  "Program Menghitung Luas Persegi",
  "Program Menghitung Volume Kubus",
  "Program Menghitung Volume Tabung",
];

//penjumlahan
yargs
  .command({
    command: "penjumlahan",
    describe: deskripsi[0],
    handler() {
      fungsi.operasiDuaBuahBilangan(deskripsi[0], 1);
    },
  })
  .demandCommand();

// pengurangan;
yargs.command({
  command: "pengurangan",
  describe: deskripsi[1],
  handler() {
    fungsi.operasiDuaBuahBilangan(deskripsi[1], 2);
  },
});

//perkalian
yargs.command({
  command: "perkalian",
  describe: deskripsi[2],
  handler() {
    fungsi.operasiDuaBuahBilangan(deskripsi[2], 3);
  },
});

//pembagian
yargs.command({
  command: "pembagian",
  describe: deskripsi[3],
  handler() {
    fungsi.operasiDuaBuahBilangan(deskripsi[3], 4);
  },
});

//akar
yargs.command({
  command: "akar",
  describe: deskripsi[4],
  handler() {
    fungsi.operasiAkarKuadrat(deskripsi[4], 4);
  },
});

//luas persegi
yargs.command({
  command: "luasPersegi",
  describe: deskripsi[5],
  handler() {
    fungsi.operasiLuasPersegi(deskripsi[5]);
  },
});

//volume kubus
yargs.command({
  command: "volumeKubus",
  describe: deskripsi[6],
  handler() {
    fungsi.operasiVolumeKubus(deskripsi[6]);
  },
});

//volume kubus
yargs.command({
  command: "volumeTabung",
  describe: deskripsi[7],
  handler() {
    fungsi.operasiVolumeTabung(deskripsi[7]);
  },
});

yargs.parse();
