//Perhitungan operasi tambah, kurang, kali dan bagi
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});


function soalPertama(nomor1){
    console.log(nomor1)
}

rl.question('Please enter the first number : ', function(x){
    rl.question('Please enter the second number : ', function(y){

       console.log(+x + +y);
       console.log(+x - +y);
       console.log(+x * +y);
       console.log(+x / +y)

        rl.close();
    });
})