const { matrixCode } = require('./matrixCode.js')
const { polybiusSquare } = require('./polybiusSquare.js')

const message1 = 'програмнезабезпечення';

const columnKey = 'крипто';
const rowKey = 'шифр';

const matrixCodeResult = matrixCode(message1, rowKey, columnKey)
console.log(message1);
console.log(matrixCodeResult);


const message2 = 'програмнезабезпечення';
const polybiusSquareResult = polybiusSquare(message1)
console.log(message2);
console.log(polybiusSquareResult);
