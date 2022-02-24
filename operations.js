const add = (x, y) => (+x) + (+y)
const subtract = (x, y) => (+x) - (+y)
const multiply = (x, y) => (+x) * (+y)
const divide = (x, y) => (+x) / (+y)

const squareRootVar = (x) => (Math.sqrt(+x))
const volumeCube = (x) => (Math.pow(+x, 2))
const volumeSilinder = (x,y) => (Math.PI * Math.pow(+x,2) * +y)

export { add, subtract, multiply, divide, squareRootVar, volumeCube, volumeSilinder }
