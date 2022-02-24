//Perhitungan Luas Persegi
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});


function soalKedua(nomor2){
    console.log(nomor2)
}

rl.question('Tolong masukkan nilai sisi awal : ', function(s){
    rl.question('Jangan lupa masukkan nilai sisinya : ', function(s){
        let nomor2 = +s * +s;

        soalKedua(nomor2)

        rl.close();
    });
})