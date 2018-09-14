const expect = require('chai').expect;
const insert = require('../insert');

describe.only("Test Insert", function() {

    it("insert is a function", function() {
        expect(insert).to.be.a('function');
    })

    it('Switches the position of an element in an array given the old and new index', function() {
        var array = [1, 2, 4, 5, 3];
        var result = insert(array, 4, 2);

        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    })
})