const {messageMatrix} = require("./_messageMatrix");
const {matrixIndexOf} = require("./_matrixIndexOf");

function polybiusSquare(message) {
    const alphabet = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя.,;';
    const alphabetMatrix = messageMatrix(alphabet, 6, 6);

    const arrI = [];
    const arrJ = [];

    Array.from(message).forEach((char) => {
        const [i,j] = matrixIndexOf(alphabetMatrix, char);

        arrI.push(i);
        arrJ.push(j);
    })

    let codedMessage = '';
    const all = [...arrI, ...arrJ]
    for(let i = 0; i < all.length; i+=2){
        const charI = all[i];
        const charJ = all[i + 1];

        codedMessage += alphabetMatrix[charI][charJ];
    }

    return codedMessage
}

exports.polybiusSquare = polybiusSquare
