function _sortedIndexes(arr) {
    const copy = [...arr];
    const indexes = Array.from({length: copy.length }, (_, i) => i);

    for(let i = 0; i < copy.length; i++){
        for(let j = 0; j < ( copy.length - i -1 ); j++){
            if(copy[j] > copy[j+1]){
                let temp1 = copy[j];
                copy[j] = copy[j + 1]
                copy[j+1] = temp1;

                let temp2 = indexes[j];
                indexes[j] = indexes[j + 1]
                indexes[j+1] = temp2;
            }
        }
    }

    return indexes;
}

exports.sortedIndexes = _sortedIndexes
