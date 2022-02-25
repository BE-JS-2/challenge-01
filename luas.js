// Luas Persegi

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Program Menghitung Luas Persegi");
console.log("================================");
rl.question("Masukan Panjang Persegi : " ,function(panjang){
    rl.question("Masukan Lebar Persegi : " ,function(lebar){
          console.log("-----------------------------------------");
          console.log("Hasil Luas Persegi = " +(parseInt(panjang) * parseInt(lebar)));
      rl.close();
    });     
      });