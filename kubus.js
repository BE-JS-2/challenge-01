// Volume Kubus

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Program Menghitung Volume Kubus");
console.log("================================");
  rl.question("Masukan Angka : " ,function(angka){
    console.log("-----------------------------------------");
    console.log("Hasil Volume Kubus = " + Math.pow(angka,3));
    rl.close();
  });
