const { matrixCode } = require('./matrixCode.js')
const { polybiusSquare } = require('./polybiusSquare.js')

const message1 = 'програмнезабезпечення';

const columnKey = 'крипто';
const rowKey = 'шифр';

const matrixCodeResult = matrixCode(message1, rowKey, columnKey)
console.log('#1');
console.log(message1);
console.log(matrixCodeResult);


const message2 = 'заміна';
const polybiusSquareResult = polybiusSquare(message2)
console.log('#2');
console.log(message2);
console.log(polybiusSquareResult);
