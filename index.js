// Kalkulasi tambah, kurang, kali, bagi
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Program Kalkulator");
console.log("==================");
console.log("1. Tambah(+)");
console.log("2. Kurang(-)");
console.log("3. Kali(*)");
console.log("4. Bagi(/)");

rl.question("Pilihan anda : " ,function(pil){
  console.log("Kamu Memilih Menu Nomor  " + pil );
  rl.question("Masukan Bilangan Pertama : " ,function(bilsatu){
   rl.question("Masukan Bilangan Kedua : " ,function(bildua){
         console.log("-----------------------------------------");
      console.log("Bilangan Pertama = " + bilsatu);
      console.log("Bilangan Kedua = " + bildua );
         console.log("-----------------------------------------");
      if(pil == "1"){
       console.log("Hasil = " +(parseInt(bilsatu) + parseInt(bildua)));
      }else if(pil == "2"){
       console.log("Hasil = " +(parseInt(bilsatu) - parseInt(bildua)));
      }else if(pil == "3"){
       console.log("Hasil = " +(parseInt(bilsatu) * parseInt(bildua)));
      }else if(pil == "4"){
       console.log("Hasil = " +(parseInt(bilsatu) / parseInt(bildua)));
      }else{
        console.log("Pilihan kamu tidak tersedia");
      }
       
     rl.close();
   });     
     });
});
