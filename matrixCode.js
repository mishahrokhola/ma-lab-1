const {messageMatrix} = require("./_messageMatrix");
const {sortedIndexes} = require("./_sortedIndexes");

function matrixCode(message, rowKey, columnKey) {
    // form 2D array from message
    const matrix = messageMatrix(message, rowKey.length, columnKey.length);

    const sortedKeyIndexesJ = sortedIndexes(columnKey);
    const sortedKeyIndexesI = sortedIndexes(rowKey);

    const sortedMatrix1 = [];
    for(let i = 0; i < rowKey.length; i++){
        sortedMatrix1[i] = [...matrix[i]];
        for(let j = 0; j < columnKey.length; j++){
            const newIndex = sortedKeyIndexesJ.indexOf(j);
            sortedMatrix1[i][newIndex] = matrix[i][j]
        }
    }


    const sortedMatrix2 = [];
    for(let i = 0; i < rowKey.length; i++){
        const newIndex = sortedKeyIndexesI.indexOf(i);
        sortedMatrix2[newIndex] = sortedMatrix1[i]
    }


    let codedMessage = '';
    for(let j = 0; j < columnKey.length; j++){
        for(let i = 0; i < rowKey.length; i++){
            codedMessage += sortedMatrix2[i][j] || ' ';
        }

        codedMessage += ' ';
    }

    return codedMessage
}

exports.matrixCode = matrixCode
