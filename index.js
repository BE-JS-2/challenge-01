const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🏃🏃🏃🏃🏃 CHALLENGE 1 🏃🏃🏃🏃🏃");

const startProgramKalkulasi = (inputPilihan, num1 = 0, num2 = 0) => {
  let hasil;

  switch (inputPilihan) {
    case "tambah":
      hasil = num1 + num2;
      break;
    case "kurang":
      hasil = num1 - num2;
      break;
    case "kali":
      hasil = num1 * num2;
      break;
    case "bagi":
      hasil = num1 / num2;
      break;
    case "akar kuadrat":
      hasil = Math.sqrt(num1);
      break;
    case "luas persegi":
      hasil = num1 * num1;
      break;
    case "volume kubus":
      hasil = Math.pow(num1, 3);
      break;
    case "volume tabung":
      hasil = 3.14 * Math.pow(num1, 2) * num2;
      break;
    default:
      hasil = "Inputan tidak dimengerti😢, semoga harimu senin terus :p";
  }

  console.log(`📝 Result : ${hasil} `);
  console.log("Thankss 👋 👋 👋 ");
};

rl.question(
  "Please input calculate menu (tambah/kurang/kali/bagi/akar kuadrat/luas persegi/volume kubus/volume tabung/exit) : ",
  (inputPilihan) => {
    if (inputPilihan === "exit") {
      console.log("Program berhenti, SAYONARA ! 👋👋");
      return rl.close();
    }
    inputPilihan === "volume kubus" || inputPilihan === "akar kuadrat" || inputPilihan === "luas persegi"
      ? rl.question("⏪ Please enter the input number : ", (num1) => {
          startProgramKalkulasi(inputPilihan.toLowerCase(), +num1);
          rl.close();
        })
      : rl.question("⏪ Please enter the input number : ", (num1) => {
          rl.question(
            "⏪ Please enter the input number again ✌️ : ",
            (num2) => {
              startProgramKalkulasi(inputPilihan.toLowerCase(), +num1, +num2);
              rl.close();
            }
          );
        });
  }
);
