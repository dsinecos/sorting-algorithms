function insert(array, i, j) {
    array.splice(j, 0, array[i]);
    array.splice(i + 1, 1);

    return array;
}

var array = [1, 2, 4, 5, 3];

console.log(insert(array, 4, 2));

module.exports = insert;