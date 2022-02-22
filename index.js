const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
console.log(`Pilihan perhitungan
1. Menghitung aritmatika 
2. Menghitung akar
3. Menghitung luas persegi
4. Menghitung volume kubus
5. Menghitung volume tabung`)
readline.question('Pilih perhitunga yang ingin di lakukan : ', Option => {
  if (Option == 1){
    aritmatika()
  }
  else if (Option == 2){
    akar()
  }
  else if (Option == 3){
    persegi()
  }
  else if (Option == 4){
    kubus()
  }
  else if (Option == 5){
    tabung()
  }
  else{
    readline.close();
  }
});

function aritmatika (){
  readline.question('Masukan angka : ', number1 => {
    readline.question('Masukan operasi perhitungan : ', operasi => {
        readline.question('Masukan angka : ', number2 => {
            let hasil = eval(`${+number1}  ${operasi} ${+number2}`)
            console.log(`Hasil perhitungan sebesar : ${hasil}`)
            readline.close();
        });
    });
});
}

function akar(){
  readline.question('Masukan angka : ', number3 => {
    let akar = Math.sqrt(number3)
    console.log(`Hasil akar dari ${number3} adalah ${akar}`)
    readline.close();
  });
}

function persegi(){
  readline.question('Masukan panjang : ', number1 => {
      readline.question('Masukan lebar : ', number2 => {
        console.log('Luas persegi sebesar : '+ (number1*number2))
        readline.close();
  });
});
}

function kubus(){
  readline.question('Masukan panjang sisi : ', number1 => {
    console.log('Volume kubus sebesar : '+ (number1**3))
      readline.close();
  });
}

function tabung(){
  readline.question('Masukan jari-jari : ', number1 => {
      readline.question('Masukan tinggi : ', number2 => {
        console.log('Volume tabung sebesar : '+ (Math.PI*number1**2*number2))
        readline.close();
    });
  });
}
