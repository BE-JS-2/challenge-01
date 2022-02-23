const readline = require("readline");

const rl = readline.createInterface(
    process.stdin,
    process.stdout
);

function tambah() {
    rl.question("Input number 1 :", number1 => {
        rl.question("Input number 2 :", number2 => {
            console.log(Number(number1) + Number(number2));
            rl.close();
        })
    })
}

function kurang() {
    rl.question("Input number 1 :", number1 => {
        rl.question("Input number 2 :", number2 => {
            console.log(Number(number1) - Number(number2));
            rl.close();
        })
    })
}

function bagi() {
    rl.question("Input number 1 :", number1 => {
        rl.question("Input number 2 :", number2 => {
            console.log(Number(number1) / Number(number2));
            rl.close();
        })
    })
}

function kali() {
    rl.question("Input number 1 :", number1 => {
        rl.question("Input number 2 :", number2 => {
            console.log(Number(number1) * Number(number2));
            rl.close();
        })
    })
}

function akar() {
    rl.question("Input number :", number => {
        console.log(Number(number) ** (1 / 2));
        rl.close();
    })
}

function luasPersegi() {
    rl.question("Input number :", number => {
        console.log(Number(number) ** 2);
        rl.close();
    })
}

function volumeKubus() {
    rl.question("Input number :", number => {
        console.log(Number(number) ** 3);
        rl.close();
    })
}

function volumeTabung() {
    rl.question("Input jari - jari :", number1 => {
        rl.question("Input tinggi :", number2 => {
            console.log(Math.PI * Number(number1) ** 2 * Number(number2));
            rl.close();
        })
    })
}

// Panggil fungsi di sini