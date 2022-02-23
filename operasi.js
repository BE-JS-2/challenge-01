const daftarOperasi = [
    {
      operasi: "Penjumlahan",
      operator: "+",
      input: "2 kali",
      rumus: "A + B",
      hitung: (bilA, bilB) => bilA + bilB,
    },
  
    {
      operasi: "Pengurangan",
      operator: "-",
      input: "2 kali",
      rumus: "A - B",
      hitung: (bilA, bilB) => bilA - bilB,
    },
    {
      operasi: "Perkalian",
      operator: "x",
      input: "2 kali",
      rumus: "A * B",
      hitung: (bilA, bilB) => bilA * bilB,
    },
    {
      operasi: "Pembagian",
      operator: "/",
      input: "2 kali",
      rumus: "A / B",
      hitung: (bilA, bilB) => bilA / bilB,
    },
    {
      operasi: "Volume Tabung",
      operator: "Vtabung",
      input: "2 kali",
      rumus: "3.14 * (A*A) * B",
      hitung: (jari, tinggi) => Math.PI * Math.pow(jari, 2) * tinggi,
    },
    {
      operasi: "Volume kubus",
      operator: "Vcube",
      input: "1 kali",
      rumus: "A*A*A",
      hitung: (bilA) => Math.pow(bilA, 3),
    },
    {
      operasi: "Luas Persegi",
      operator: "Lpersegi",
      input: "1 kali",
      rumus: "A*A",
      hitung: (bilA) => Math.pow(bilA, 2),
    },
    {
      operasi: "Akar kuadrat",
      operator: "akar",
      input: "1 kali",
      rumus: "√A",
      hitung: (bilA) => Math.sqrt(bilA),
    },
  ];
  
  module.exports = daftarOperasi;