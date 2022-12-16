function matrixIndexOf(matrix, item) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === item){
               return [i,j]
            }
        }
    }
}

exports.matrixIndexOf = matrixIndexOf
