const expect = require('chai').expect;
const selectionSort = require('../selection-sort');

describe("Test Selection sort", function() {

    it("selectionSort is a function", function() {
        expect(selectionSort).to.be.a('function');
    })

    it("sorts an array of integers", function() {
        var array = [5, 4, 3, 2, 1];
        var result = selectionSort(array);

        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    })

    it("sorts an array with duplicate integers ", function() {
        var array = [3, 3, 1, 4, 5, 2, 2];
        var result = selectionSort(array);

        expect(result).to.deep.equal([1, 2, 2, 3, 3, 4, 5]);
    })

    it("sorts an array with negative integers", function() {
        var array = [-1, -4, -2, 3, 7, 4, 1];
        var result = selectionSort(array);

        expect(result).to.deep.equal([-4, -2, -1, 1, 3, 4, 7]);
    })

})