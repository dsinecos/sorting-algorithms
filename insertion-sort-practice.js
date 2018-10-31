function insertionSort(array) {

    for(let i = 1; i < array.length; i++) {

        for(let j = i - 1; j >= 0; j--) {

            if(array[i] <= array[j] && j === 0) {
                insertIBeforeJ(array, i, j);
            }

            if(array[i] <= array[j] && array[j-1] <= array[i]) {
                insertIBeforeJ(array, i, j);
            }

        }
    }

    return array;
}

function insertIBeforeJ(array, i, j) {
    array.splice(j, 0, array[i]);
    array.splice(i+1, 1);
}

module.exports = insertionSort;
