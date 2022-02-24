const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Haii! silakan pilih perhitungan yang ingin dilakukan : \n A. Penambahan \n B. Pengurangan \n C. Perkalian \n D. Pembagian \n E. Akar Kuadrat \n F. Luas Persegi \n G. Volume Kubus \n H. Volume Tabung \n Perhitungan : ', (pilihan) =>{
    let hasil = '';
    if (pilihan == 'A'){
        rl.question('Masukkan angka awal : ', (angka1) => {
            rl.question('Masukkan angka berikutnya : ', (angka2) => {
                hasil = +angka1 + +angka2
                console.log('Jawabannya adalah', hasil)
                rl.close();
            });
        });


    } else if (pilihan == 'B'){
        rl.question('Masukkan angka awal : ', (angka1) => {
            rl.question('Masukkan angka berikutnya : ', (angka2) => {
                hasil = +angka1 - +angka2
                console.log('Jawabannya adalah', hasil)
                rl.close();
            });
        });

    } else if (pilihan == 'C'){
        rl.question('Masukkan angka awal : ', (angka1) => {
            rl.question('Masukkan angka berikutnya : ' , (angka2) => {
                hasil = +angka1 * +angka2
                console.log('Jawabannya adalah', hasil)
                rl.close;
            });
        });

    } else if (pilihan == 'D'){
        rl.question('Masukkan angka awal : ', (angka1) => {
            rl.question('Masukkan angka berikutnya : ', (angka2) => {
                hasil = +angka1 / +angka2
                console.log('Jawabannya adalah', hasil)
                rl.close();
            });
        });

    } else if (pilihan == 'E'){
        rl.question('Masukkan akarnya : ', (angka) => {
            hasil = Math.sqrt(+angka)
            console.log('Hasil akarnya adalah', hasil)
            rl.close();
        });

    } else if (pilihan == 'F'){
        rl.question('Masukkan nilai sisi kubusnya : ', (sisi) => {
            hasil = +sisi * +sisi
            console.log('Luas perseginya adalah',hasil, 'Cm2')
            rl.close();
        });

    } else if (pilihan == 'G'){
        rl.question('Masukkan nilai sisi kubusnya : ', (kubus) => {
            hasil = +kubus * +kubus * +kubus
            console.log('Besar volume kubusnya adalah', hasil, 'Cm3')
            rl.close();
        });

    } else if (pilihan == 'H'){
        rl.question('Berapa nilai jari-jarinya : ', (r) => {
            rl.question('Berapa nilai tinggi tabunganya : ', (t) => {
                hasil = Math.PI * +r * +r * +t
                console.log('Besar volume tabung tersebut adalah', hasil, 'Cm3')
                rl.close();
            });
        });
    }
})
    