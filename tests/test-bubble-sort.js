const expect = require('chai').expect;
const bubbleSort = require('../bubble-sort');

describe("Test Bubble sort", function() {

    it("bubbleSort is a function", function() {
        expect(bubbleSort).to.be.a('function');
    })

    it("sorts an array of integers", function() {
        var array = [5, 4, 3, 2, 1];
        var result = bubbleSort(array);

        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    })

    it("sorts an array with duplicate integers ", function() {
        var array = [3, 3, 1, 4, 5, 2, 2];
        var result = bubbleSort(array);

        expect(result).to.deep.equal([1, 2, 2, 3, 3, 4, 5]);
    })

})