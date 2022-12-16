function _messageMatrix(message, rows, columns) {
    return Array.from({length: rows}, (_, i) => Array.from({ length: columns }, (__, j) => message[i * columns + j]));
}

exports.messageMatrix = _messageMatrix
