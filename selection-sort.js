function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let minIndex = [0];
        let min = Infinity;

        for (let j = i; j < array.length; j++) {
            if (array[j] < min) {
                minIndex = j;
                min = array[j];
            }
        }

        if(i !== minIndex) {
            swap(array, i, minIndex);
        }
    }

    return array;
}

function swap(array, indexI, indexJ) {
    [array[indexI], array[indexJ]] = [array[indexJ], array[indexI]];
}

module.exports = selectionSort;