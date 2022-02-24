// import readline from 'fs'
import inquirer from 'inquirer'
import { add } from './operations.js'
import chalkAnimation from 'chalk-animation'
import chalk from 'chalk'

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

async function Welcome() {
  const pulseTitle = chalkAnimation.neon(
    'Calculator Terminal'
  );
    await sleep()
    pulseTitle.stop()
    console.log(`Hello My first App in ${chalk.bgYellowBright('JS')}`)
}

async function InputAnswer1() {
  const inputAnswer_1 = await inquirer.prompt({
    name: 'InputAnswer',
    message: 'Ur Angka :',
  })
  const NumberAnswer = parseInt(inputAnswer_1)
  console.log(NumberAnswer)  
}


async function Menu() {
  await Welcome() 
  const answ = await inquirer.prompt({
    name: 'Menu',
    type: 'list',
    prefix: '>',
    message: 'Mau ngapain ?',
    choices: [
      'Tambah','Perkalian','Kuadrat'
    ]
  })
  .then((answ) => {
    if (answ.choices = 1) {
      InputAnswer1()
      // console.log(NumberAnswer)
    }
    else{
      console.log('error')
    }
  })
}



// async function Coba() {
//    const answer = await inquirer.prompt([
//     {
//       name: 'Welcome',
//       type: 'input',
//       message: 'Welcome to the : ',
//       default(){
//         return 'player'
//       },
//     }
//   ])
//   playerName = answer.player_name;
// }


// await Welcome()


InputAnswer1()