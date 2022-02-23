const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("*----------------CHALLENGE #01---------------*")
console.log("*---------------KHALIF RIZALDI--------------*")
console.log("*-----------KELAS BE-JAVASCRIPT-02--------------*\n")

console.log("PERHITUNGAN")
console.log("================================")
console.log("1. Tambah ")
console.log("2. Kurang ")
console.log("3. Bagi ")
console.log("4. Kali ")
console.log("5. Akar Kuadrat ")
console.log("6. Luas Persegi ")
console.log("7. Volume Kubus ")
console.log("8. Volume Tabung ")
console.log("========SELAMAT MENCOBA=========\n")

rl.question("Masukkan Pilihan Anda : ", function(pilihan){
    console.log("Anda Memilih Pilihan " +pilihan);
    rl.question("Masukkan bilangan pertama anda : ",function(bil1){
        rl.question("Masukkan bilangan kedua anda : ",function(bil2){
            rl.question("Masukkan nilai Sisi : ", function(sisi){
                rl.question("Masukkan nilai Jari - jari : ",function(jari2){
                    rl.question("Masukkan nilat Tinggi bangun ruang : ",function(tinggi){

                        console.log("-------------------------------------");
                        console.log("Bilangan pertama anda adalah : " +bil1);
                        console.log("Bilangan kedua anda adalah : " +bil2);
                        console.log("nilai Sisi Bangun Ruang anda adalah : " +sisi);
                        console.log("Jari-jari Bangun Ruang anda adalah : " +jari2);
                        console.log("Tinggi Bangun Ruang anda adalah : " +tinggi);
                        console.log("-------------------------------------");

                        const phi = 3.14

                        if(pilihan == "1"){
                            console.log("Hasilnya :", +bil1 + +bil2)
                        }else if(pilihan == "2"){
                            console.log("Hasilnya :", +bil1 - +bil2)
                        }else if(pilihan == "3"){
                            console.log("Hasilnya :", +bil1 / +bil2);
                        }else if(pilihan == "4"){
                            console.log("Hasilnya :", +bil1 * +bil2);
                        }else if(pilihan == "5"){
                            console.log("Hasil Akar Kuadrat dari", +bil1 - +bil2 ,"adalah", Math.sqrt(+bil1 - +bil2));
                        }else if(pilihan == "6"){
                            console.log("Hasil dari Luas Persegi adalah : ", +sisi * +sisi);
                        }else if(pilihan == "7"){
                            console.log("Hasil dari Volume Kubus adalah : ", +sisi * +sisi * +sisi);
                        }else if(pilihan == "8"){
                            console.log("Hasil dari Volume Tabung adalah : ", phi *jari2 * +jari2 * +tinggi);
                        }else{
                            console.log("Pilihan tidak ada");
                        }
                    });
                });
            });
        });
    });
});
