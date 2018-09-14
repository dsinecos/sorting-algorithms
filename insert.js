function insert(array, i, j) {
    array.splice(j, 0, array[i]);
    array.splice(i + 1, 1);

    return array;
}

module.exports = insert;