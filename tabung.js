// Volume Tabung

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Program Menghitung Volume Tabung");
console.log("================================");
rl.question("Masukan Jari-Jari Tabung : " ,function(jari){
    rl.question("Masukan Tinggi Tabung : " ,function(tinggi){
          console.log("-----------------------------------------");
          console.log("Hasil Volume Tabung = " +(3.14 * Math.pow(jari,2) * parseInt(tinggi)));
      rl.close();
    });     
      });