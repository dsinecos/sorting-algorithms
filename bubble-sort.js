function swap(array, indexI, indexJ) {
    [array[indexI], array[indexJ]] = [array[indexJ], array[indexI]];
}

function bubbleSort(array) {
    var arrLength = array.length;
    var endIndex = arrLength;
    var numOfSwaps = null;

    for (let i = 0; i < arrLength; i++) {
        if(numOfSwaps === 0) {
            return array;
        }
        numOfSwaps = 0;
        for (let j = 0; j < endIndex-1; j++) {

            let diff = (array[j] - array[j + 1]);

            if (diff > 0) {
                swap(array, j, j + 1);
                numOfSwaps += 1;
            }
        }
        endIndex--;
    }

    return array;
}

var array = [5, 1, 2, 3, 4];
var result = bubbleSort(array);

module.exports = bubbleSort;