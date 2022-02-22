var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("kalkulator\n")
rl.question("Masukkan angka pertama = ", (answ) =>{
            rl.question("Masukkan angka ke dua = ", (answ2)=>{
                console.log("Penjumlahan =",+answ + +answ2)
                console.log("Pengurangan = ",+answ - +answ2)
                console.log("Perkalian = ", +answ * +answ2)
                console.log("Pembagian = ", +answ / +answ2)
                console.log("Akar Kuadrat angka 1 = ", Math.sqrt(answ))
                console.log("Akar Kuadrat angka 2 = ", Math.sqrt(answ2))
                console.log("\nBagun Ruang\n")
                const PHI = 3.14
rl.question("Masukkan sisi = ", (sisi) =>{
            rl.question("Masukkan Jari- Jari = ", (jari_jari)=>{
                rl.question("Masukkan Tinggi = ", (tinggi)=>{
                    console.log("Luas Persegi = ", sisi * +sisi)
                    console.log("Volume Kubus = ", sisi * +sisi * +sisi)
                    console.log("Volume Tabung = ", PHI *jari_jari * +jari_jari * +tinggi)
                    rl.close()
                })
            })
        })
    })
})