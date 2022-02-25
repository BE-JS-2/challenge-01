// Akar Kuadrat

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Program Menghitung Akar Kuadrat");
console.log("================================");
  rl.question("Masukan Angka : " ,function(angka){
    console.log("-----------------------------------------");
    console.log("Hasil = " + Math.sqrt(angka));
    rl.close();
  });
