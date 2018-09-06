function swap(array, indexI, indexJ) {
    [array[indexI], array[indexJ]] = [array[indexJ], array[indexI]];
}

function bubbleSort(array) {
    var arrLength = array.length;
    var endIndex = arrLength;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < endIndex; j++) {

            let diff = (array[j] - array[j + 1]);

            if (diff > 0) {
                swap(array, j, j + 1);
            }
        }
        endIndex--;
    }

    return array;
}

module.exports = bubbleSort;