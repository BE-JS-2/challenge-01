const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function areaOfSquare(side) {
    let area = side * side
    return area
}

function cubeVolume(side) {
    let result = side * side * side
    return result
}

function cylinderVolume(radius, height) {
    const phi = Math.PI
    let result = phi * radius * radius * height
    return result
}

console.log ("\n========== CHALLENGE-01 ==========\n");
console.log ("Please Choose the Menu\n");
console.log ("1. Area of Square");
console.log ("2. Volume of Cube");
console.log ("3. Volume of Cylinder");
console.log ("4. Square root");
console.log ("5. Simple Calculator");

rl.question('==> ', option => {
  if(option == "1"){
    rl.question("\nInput Side of Square : ", (sideOfSquare)=> {
      console.log("\nResult :");
      console.log(`\nArea of Square = ${areaOfSquare(sideOfSquare)}`);
      console.log("\nArea of Square Formula  : Side * Side");
      rl.close();
  })
  } else if(option == "2"){
    rl.question("\nInput Side of Cube : ", (sideOfCube)=> {
      console.log("\nResult :");
      console.log(`\nVolume of Cube = ${cubeVolume(sideOfCube)}`);
      console.log("\nVolume of Cube Formula : Side * Side * Side");
      rl.close();
  })
  } else if(option == "3"){
    rl.question("\nInput Radius of Cylinder : ", (radiusOfCylinder)=> {
      rl.question("\nInput Height of Cylinder : ", (heightOfCylinder)=> {
        console.log("\nResult :");
        console.log(`\nVolume of Cylinder = ${cylinderVolume(radiusOfCylinder, heightOfCylinder)}`);
        console.log("\nVolume of Cylinder Formula : Phi * Radius * Radius * Height");
        rl.close();
  })
  })
  } else if(option == "4"){
    rl.question("\nInput Number : ", (theNum)=> {
      let squareRoot = Math.sqrt(theNum)
        console.log('\nResult : ', squareRoot );
        rl.close();
    })
  } else if(option == "5"){
      console.log("\n===== Calculator Menu =====");
      console.log("\n1. Plus(+)");
      console.log("2. Minus(-)");
      console.log("3. Times(*)");
      console.log("4. Divided by(/)");
    rl.question('\n==> ', function(chooseNum) {
        rl.question("\nInput Number 1 : ", function(num1) {
          rl.question("Input Number 2 : ", function(num2) {
            
            if(chooseNum == 1){
              result = +num1 + +num2
              console.log('\nResult : ', +result);
              rl.close();
            }
            else if(chooseNum == 2){
              result = +num1 - +num2
              console.log('\nResult : ', +result);
              rl.close();
            }
            else if(chooseNum == 3){
              result = +num1 * +num2
              console.log('\nResult : ', +result);
              rl.close();
            }
            else if(chooseNum == 4){
              result = +num1 / +num2
              console.log('\nResult : ', +result);
              rl.close();
            }
          })
        })
      })
    } 
  })