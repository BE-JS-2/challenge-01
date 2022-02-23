function luasPersegi(sisi) {
    let luas = sisi * sisi
    return luas    
}

function volumeKubus(sisi) {
    let result = sisi * sisi * sisi
    return result
}

function volumeTabung(rusuk, tinggi) {
    const phi = Math.PI
    let result = phi * rusuk * rusuk * tinggi
    return result
}

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Menu");
console.log("============");
console.log("1. Kalkulator Sederhana");
console.log("2. Luas Persegi");
console.log("3. Volume Kubus");
console.log("4. Volume Tabung");

rl.question("\n Pilihan anda : ", (pilihan)=> {
  console.log(`Anda Memilih Menu ${pilihan}` );
  switch (pilihan){
      case '1':
        console.log("Kalkulator");
        console.log("============");
        console.log("1. Tambah(+)");
        console.log("2. Kurang(-)");
        console.log("3. Bagi(/)");
        console.log("4. Kali(*)");
        console.log("5. Akar");
        console.log("6. Pangkat")
        rl.question("\n Pilih Operasi: ", (kalkulator)=>{
            console.log(`Anda Memilih Kalkulator ${kalkulator}`);
            rl.question("Masukan Bilangan pertama : ", (bilanganpertama)=> {
              rl.question("Masukan Bilangan kedua : ", (bilangankedua)=> {
                console.log("-----------------------------------------");
                console.log(`Bilangan Pertama Anda ${bilanganpertama}`);
                console.log(`Bilangan Kedua Anda  ${bilangankedua}`);
                console.log("-----------------------------------------");
                switch(kalkulator){
                    case '1':
                        console.log(`Hasilnya : ${parseInt(bilanganpertama) + parseInt(bilangankedua)}`);
                        break;
            
                    case '2':
                        console.log(`Hasilnya : ${parseInt(bilanganpertama) - parseInt(bilangankedua)}`);
                        break;
            
                    case '3':
                        console.log(`Hasilnya : ${parseInt(bilanganpertama) / parseInt(bilangankedua)}`);
                        break;
            
                    case '4':
                        console.log(`Hasilnya : ${parseInt(bilanganpertama) * parseInt(bilangankedua)}`);
                        break;

                    case '5':
                        console.log(`Hasilnya : ${Math.pow(bilanganpertama, 1/bilangankedua)}`);
                        break;
                    
                    case '6':
                        console.log(`Hasilnya : ${Math.pow(bilanganpertama, bilangankedua)}`);
                        break;
          
                    default:
                        console.log("Pilihan anda tidak tersedia");
                        rl.close();
                        break;
                }
                rl.close();
              });
            });
        })
        break;

    case '2':
        rl.question("Masukkan Sisi Persegi : ", (sisiPersegi)=>{
            console.log("-----------------------------------------");
            console.log(`Sisi Persegi = ${sisiPersegi}`);
            console.log(`Luas Persegi = ${luasPersegi(sisiPersegi)}`);
            console.log("-----------------------------------------");
            rl.close();
        })
        break ;

    case '3':
        rl.question("Masukkan Sisi Kubus : ", (sisiKubus)=>{
            console.log("-----------------------------------------");
            console.log(`Sisi Kubus = ${sisiKubus}`);
            console.log(`Luas Kubus = ${volumeKubus(sisiKubus)}`);
            console.log("-----------------------------------------");
            rl.close();
        })
        break;

    case '4':
        rl.question("Masukkan Rusuk Tabung : ", (rusukTabung)=>{
            rl.question("Masukkan Tinggi Tabung : ", (tinggiTabung)=>{
                console.log("-----------------------------------------");
                console.log(`Rusuk Tabung = ${rusukTabung}`);
                console.log(`Tinggi Tabung = ${tinggiTabung}`);
                console.log(`Luas Tabung = ${volumeTabung(rusukTabung,tinggiTabung)}`);
                console.log("-----------------------------------------");
                rl.close();
            })
        })
        break;

    default:
        console.log("Pilihan anda tidak tersedia");
        rl.close();
        break;
  }
});