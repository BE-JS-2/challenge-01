const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.question( 
      `Pilih Menu 
      1.Kalkulasi
      2.Hitung Luas Persegi
      3.Hitung Volume Kubus
      4.Hitung Volume Tabung
      5.Akar Kuadrat
      Masukkan Angka Pilihan ! = `, 
      Menu => {
              
    if(Menu == 1) 
    {
        console.log("----------------------------------------")
        readline.question ('Masukkan Angka Pertama = ', angka1 => {
            console.log("----------------------------------------");
            readline.question ('Masukkan Angka Kedua = ', angka2 => {
            console.log("----------------------------------------")
                let number1 = Number(angka1)
                let number2 = Number(angka2)
                let result
              readline.question
                (`Pilih Perhitungan
                    1.Penjumlahan
                    2.Pengurangan
                    3.Perkalian
                    4.Pembagian 
                        Pilih Perhitungan = `, 
                        Hitung => {
                            if(Hitung == 1) {
                                result = number1 + number2
                            }else if(Hitung == 2) {
                                result = number1 - number2
                            }else if(Hitung == 3){
                                result = number1 * number2
                            }else if(Hitung == 4){
                                result = number1 / number2
                            }else if(Hitung){
                                result = "Maaf Pilihan Tidak Ada"      
                            }
                        console.log("---------------------------------------------------------------")
                        console.log( ` Hasil = ${result}`)
                        console.log("---------------------------------------------------------------")
                        readline.close();4
                    
                })
            })
        })
     }else if (Menu == 2 )
     {
         readline.question ('Masukkan Panjang Sisi Persegi = ', sisi =>{
             let s = Number(sisi)
             let result
            result = s * s
            console.log("---------------------------------------------------------------")
                console.log(`Jadi Luas Persegi Dengan Sisi ${s} adalah = ${result} cm^2`)
            console.log("---------------------------------------------------------------")
            readline.close();
         })
         
     
     }else if (Menu == 3)
     {
        readline.question('Masukkan Panjang Sisi Kubus = ', sisi => {
            let s = Number(sisi)
            let result
            result = s * s * s
            console.log("---------------------------------------------------------------")
            console.log(`Jadi Volume Kubus Dengan Sisi ${s} adalah ${result} cm^3`)
            console.log("---------------------------------------------------------------")
            readline.close();
        })
     }else if (Menu == 4)
     {
        readline.question('Masukkan Tinggi Tabung = ', tinggi => {
            readline.question('Masukkan Panjang Jari-jari Tabung = ', jari => {
                let j = Number(jari)
                let t = Number(tinggi)
                let result
                result = 22/7*j*j*t
                console.log("---------------------------------------------------------------");
                console.log(`Jadi Volume Kubus dengan Tinggi ${t} dan Jari-Jari ${j} adalah ${result} cm^3`)
                console.log("---------------------------------------------------------------");
                readline.close();
            })
        })
     }else if (Menu == 5)
     {
        
            readline.question('Masukkan Angka Akar Kuadrat = ', kuadrat => {
                let k = Number(kuadrat)
                let result
                result = Math.sqrt(k)
                console.log("---------------------------------------------------------------");
                console.log(`Jadi Akar Kuadrat Dari ${kuadrat} Adalah ${result}`)
                console.log("---------------------------------------------------------------");
                readline.close();
            })
        
     }else
readline.close
  })