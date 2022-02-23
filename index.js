const inquirer = require('inquirer');

inquirer
  .prompt([
	{
	  name: 'input_a',
	  message: 'Masukkan Nilai Pertama?'
	},
	{
	  name: 'input_b',
	  message: 'Masukkan Nilai Kedua?'
	},
    {
      type: 'rawlist',
      name: 'math',
      message: 'Pilih Menu Matematika?',
      choices: ['Pertambahan', 'Pengurangan', 'Perkalian', 'Pembagian', 'Akar', 'Kuadrat','Luas Persegi','Volume Kubus','Volume Tabung'],
    },
  ])
  .then(answers => {
	let hasil
	if (answers.math == 'Pertambahan') {
		hasil = (answers.input_a + answers.input_b)
	} else if(answers.math == 'Pengurangan') {
		hasil = (answers.input_a - answers.input_b)
	} else if(answers.math == 'Perkalian') {
		hasil = (answers.input_a * answers.input_b)
	} else if(answers.math == 'Pembagian') {
		hasil = (answers.input_a / answers.input_b)
	} else if(answers.math == 'Akar') {
		hasil = Math.sqrt(answers.input_a, answers.input_b)
	} else if(answers.math == 'Kuadrat') {
		hasil = (answers.input_a ** answers.input_b)
	} else if(answers.math == 'Luas Persegi') {
		// Luas Persegi = S x S
		hasil = (answers.input_a * answers.input_a)
	} else if(answers.math == 'Volume Kubus') {
		// Volume Kubus = S x S x S
		hasil = (answers.input_a ** 3)
	} else if(answers.math == 'Volume Tabung') {
		// Volume Tabung = π x r x r x t
		hasil = (3.14 * answers.input_a * answers.input_a * answers.input_b)
	}

    console.info('Answer:', hasil);
  });