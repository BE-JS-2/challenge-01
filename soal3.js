//Perhitungan volume kubus

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});


function volumeKubus(nomor3){
    console.log(nomor3)
}

rl.question('Tolong masukkan nilai sisi awal : ', function(s){
    rl.question('Jangan lupa masukkan nilai sisinya : ', function(s){
        rl.question('Masukkan nilai sisi : ', function(s){
            let nomor3 = +s * +s *+s;
            
            volumeKubus(nomor3)

            rl.close();
        });
        
    });
})