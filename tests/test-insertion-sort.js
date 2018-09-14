const expect = require('chai').expect;
const insertionSort = require('../insertion-sort');

describe.only("Test Insertion sort", function() {

    it("insertionSort is a function", function() {
        expect(insertionSort).to.be.a('function');
    })

    it("sorts an array of integers", function() {
        var array = [5, 4, 3, 2, 1];
        var result = insertionSort(array);

        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    })

    it("sorts an array with duplicate integers ", function() {
        var array = [3, 3, 1, 4, 5, 2, 2];
        var result = insertionSort(array);

        expect(result).to.deep.equal([1, 2, 2, 3, 3, 4, 5]);
    })

    it("sorts an array with negative integers", function() {
        var array = [-1, -4, -2, 3, 7, 4, 1];
        var result = insertionSort(array);

        expect(result).to.deep.equal([-4, -2, -1, 1, 3, 4, 7]);
    })

})