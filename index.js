import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

console.log("#=================================================#");
console.log("# Challange 1                                     #");       
console.log("# Nama   : Didik Nur Hidayat                      #");
console.log("# Kampus : Universitas Nurul Jadid                #");
console.log("#=================================================#");

const play = () => {
    console.log("# Option program                                  #");
    console.log("# 1. Penjumlahan Akar Kuadrat                     #");   
    console.log("# 2. Pengurangan Akar Kuadrat                     #");   
    console.log("# 3. Pembagian Akar Kuadrat                       #");   
    console.log("# 4. Perkalian Akar Kuadrat                       #");
    console.log("# 5. Menghitung Luas Persegi                      #");
    console.log("# 6. Menghitung Volume Kubus                      #");
    console.log("# 7. Menghitung Volume Tabung                     #");
    console.log("#=================================================#");
    rl.question("# Masukkan pilihan anda : ", answer => {
        switch (+answer) {
            case 1:
                rl.question("# Masukkan akar kuadrat (1) : ", angka1 => {
                    rl.question("# Masukkan akar kuadrat (2) : ", angka2 => {
                        const akr1   = Math.sqrt(+angka1);
                        const akr2   = Math.sqrt(+angka2);
                        const result = akr1 + akr2;
                        console.log("# Result");
                        console.log(`# √${angka1} + √${angka2} = ${akr1.toFixed(2)} + ${akr2.toFixed(2)} = ${result.toFixed(2)}`);
                        rl.question("# Ingin coba lagi ? ", answer2 => {
                            if (answer2 === "y" || answer2 === "ya") {
                                console.log("#=================================================#");
                                play();
                            } else {
                                console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                                rl.close();
                            }
                        })
                    })
                })
                break;
            case 2:
                rl.question("# Masukkan akar kuadrat (1) : ", angka1 => {
                    rl.question("# Masukkan akar kuadrat (2) : ", angka2 => {
                        const akr1   = Math.sqrt(+angka1);
                        const akr2   = Math.sqrt(+angka2);
                        const result = akr1 - akr2;
                        console.log("# Result");
                        console.log(`# √${angka1} - √${angka2} = ${akr1.toFixed(2)} - ${akr2.toFixed(2)} = ${result.toFixed(2)}`);
                        rl.question("# Ingin coba lagi ? ", answer2 => {
                            if (answer2 === "y" || answer2 === "ya") {
                                console.log("#=================================================#");
                                play();
                            } else {
                                console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                                rl.close();
                            }
                        })
                    })
                })
                break;
            case 3:
                rl.question("# Masukkan akar kuadrat (1) : ", angka1 => {
                    rl.question("# Masukkan akar kuadrat (2) : ", angka2 => {
                        const akr1   = Math.sqrt(+angka1);
                        const akr2   = Math.sqrt(+angka2);
                        const result = akr1 / akr2;
                        console.log("# Result");
                        console.log(`# √${angka1} : √${angka2} = ${akr1.toFixed(2)} : ${akr2.toFixed(2)} = ${result.toFixed(2)}`);
                        rl.question("# Ingin coba lagi ? ", answer2 => {
                            if (answer2 === "y" || answer2 === "ya") {
                                console.log("#=================================================#");
                                play();
                            } else {
                                console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                                rl.close();
                            }
                        })
                    })
                })
                break;
            case 4:
                rl.question("# Masukkan akar kuadrat (1) : ", angka1 => {
                    rl.question("# Masukkan akar kuadrat (2) : ", angka2 => {
                        const akr1   = Math.sqrt(+angka1);
                        const akr2   = Math.sqrt(+angka2);
                        const result = akr1 * akr2;
                        console.log("# Result");
                        console.log(`# √${angka1} x √${angka2} = ${akr1.toFixed(2)} x ${akr2.toFixed(2)} = ${result.toFixed(2)}`);
                        rl.question("# Ingin coba lagi ? ", answer2 => {
                            if (answer2 === "y" || answer2 === "ya") {
                                console.log("#=================================================#");
                                play();
                            } else {
                                console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                                rl.close();
                            }
                        })
                    })
                });
                break;
            case 5:
                rl.question("# Masukkan sisi : ", angka => {
                    console.log("# Result");
                    console.log(`# S x S = ${angka} x ${angka} = ${angka * angka}`);
                    rl.question("# Ingin coba lagi ? ", answer2 => {
                        if (answer2 === "y" || answer2 === "ya") {
                            console.log("#=================================================#");
                            play();
                        } else {
                            console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                            rl.close();
                        }
                    })
                });
                break;
            case 6:
                rl.question("# Masukkan sisi : ", angka => {
                    console.log("# Result");
                    console.log(`# S x S x S = ${angka} x ${angka} x ${angka} = ${angka * angka * angka}`);
                    rl.question("# Ingin coba lagi ? ", answer2 => {
                        if (answer2 === "y" || answer2 === "ya") {
                            console.log("#=================================================#");
                            play();
                        } else {
                            console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                            rl.close();
                        }
                    })
                });
                break;
            case 7:
                rl.question("Masukkan radius : ", radius => {
                    rl.question("Masukkan tinggi : ", tinggi => {
                        const result = Math.PI * radius * radius * tinggi;
                        console.log("# Result");
                        console.log(`# π x r x r x t = ${Math.PI.toFixed(2)} x ${radius} x ${radius} x ${tinggi} = ${result.toFixed(2)}`);
                        rl.question("# Ingin coba lagi ? ", answer2 => {
                            if (answer2 === "y" || answer2 === "ya") {
                                console.log("#=================================================#");
                                play();
                            } else {
                                console.log("# Terima Kasih Sudah Mencoba Aplikasi Saya :)");
                                rl.close();
                            }
                        });
                    });
                })
            default:
                console.log("Anda salah memasukkan pilihan, mohon coba kembali");
                rl.close();
                break;
        }
    })
}

play();