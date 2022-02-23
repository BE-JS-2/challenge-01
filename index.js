var readline = require('readline');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Masukkan Operasi Yang ingin dilakukan (Masukkan Nomornya): \n 1. Tambah \n 2. Kurang \n 3. Bagi \n 4. Kali \n 5. Luas Persegi \n 6. Akar\n 7. Volume Kubus\n 8. Volume Tabung\n Operasi = ', (jawab) => {
            let hasil = '';
        if (jawab == 1) {
                    rl.question('Masukkan angka pertama: ', (answer1) => {
                        rl.question('Masukkan angka kedua: ', (answer2) => {
                        hasil = +answer1 + +answer2
                        console.log('Hasil : ' + hasil)
                        rl.close();
                    });
                });

                
                        
            } else if (jawab == 2) {
                    rl.question('Masukkan angka pertama: ', (answer1) => {
                        rl.question('Masukkan angka kedua: ', (answer2) => {
                        hasil = +answer1 - +answer2
                        console.log('Hasil : ' + hasil)
                        rl.close();
                    });
                });
                    
            }
            else if (jawab == 3) {
                rl.question('Masukkan angka pertama: ', (answer1) => {
                    rl.question('Masukkan angka kedua: ', (answer2) => {
                        hasil = +answer1 / +answer2
                        console.log('Hasil : ' + hasil)
                        rl.close();
                    });
                });
                        
            } else if (jawab == 4) {
                rl.question('Masukkan angka pertama: ', (answer1) => {
                    rl.question('Masukkan angka kedua: ', (answer2) => {
                        hasil = +answer1 + +answer2
                        console.log('Hasil : ' + hasil)
                        rl.close();
                    });
                });
                        
            }
            else if (jawab == 5) {
                rl.question('Masukkan SISI : ', (answer1) => {
                    
                        hasil = +answer1 * +answer1
                        console.log('Hasil : ' + hasil)
                        rl.close();
                    
                });
                        
            }
            else if (jawab == 6) {
                rl.question('Masukkan Angka : ', (akar)=>{
                    hasil = Math.sqrt(+akar)
                    console.log('Hasil : '+hasil)
                    rl.close();
                });
            }
            else if (jawab == 7) {
                rl.question('Masukkan SISI : ', (answer1) => {
                    hasil = +answer1 * +answer1 * +answer1
                    console.log('Hasil : ' + hasil)
                    rl.close();
                });
            }
            else if (jawab == 8) {
                rl.question('Masukkan Jari Jari Alas: ', (answer1) => {
                    rl.question('Masukkan Tinggi: ', (answer2) => {
                        hasil = 3.14 * +answer1 * +answer1 * +answer2
                        console.log('Hasil : ' + hasil)
                        rl.close();
                    });
                });                
            }
});
