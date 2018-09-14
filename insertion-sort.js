function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {

        for (let j = i - 1; j >= 0; j--) {

            if (array[j] <= array[i] ) {
                insert(array, i, j+1);
                break;
            }

            if (j === 0 && array[i] <= array[j]) {
                insert(array, i, 0);
                break;
            }

        }
    }

    return array;
}

function insert(array, i, j) {
    array.splice(j, 0, array[i]);
    array.splice(i + 1, 1);
}

module.exports = insertionSort;