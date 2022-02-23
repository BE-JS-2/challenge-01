var readline = require('readline-sync');

var Kalkulasi = function(bil1, bil2, op) {
  this.x = parseInt(bil1);
  this.y = parseInt(bil2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "1") {
      var result = x + y;
    } else if (op === "2") {
      var result = x - y;
    } else if (op === "3") {
      var result = x / y;
    } else if (op === "4") {
      var result = x * y;
    } else if (op === "5") {
      var result = x * y;
    } else if (op === "6") {
      var result = x ** 3;
    } else if (op === "7") {
      var result = Math.PI * x ** 2 * y;
    } else if (op === "8") {
      var result = Math.sqrt(x);
    } else {
      var result = "Gagal! Operasi Tidak Ditemukan!"
    }

    console.log("Hasil: " + result);
  };
}
var op = readline.question("=======================\nNAMA : QOHARUL JABBAR\nKELAS : BEJS-2\nChallenge01\n=======================\n\nMasukkan operasi yang diinginkan:\n 1. Penjumlahan\n 2. Pengurangan\n 3. Pembagian\n 4. Perkalian\n 5. Hitung Luas Persegi\n 6. Volume Kubus\n 7. Volume Tabung\n 8. Akar Kuadrat\nPilihan Anda: ");


if (op === "6" || op === "8") {
  var bil1 = readline.question("Masukkan bilangan: ");
} else {
  var bil1 = readline.question("Masukkan bilangan pertama: ");
  var bil2 = readline.question("Masukkan bilangan kedua: "); 
}

var calc = new Kalkulasi(bil1, bil2, op);

calc.result();