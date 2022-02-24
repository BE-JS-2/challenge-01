//Perhitungan volume tabung

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function volumeTabung(nilai){
    console.log(nilai)
};

rl.question ('Berapa nilai panjangnya : ', function(p){
    rl.question ('Berapa nilai lebarnya : ', function(l){
        rl.question ('Berapa nilai tingginya : ', function(t){

            let nilai = +p * +l * +t

            volumeTabung(nilai)

            rl.close();
        });
    });
});