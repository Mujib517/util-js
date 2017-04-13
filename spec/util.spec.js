const util = require('./../util.js');

describe('Utli library', function () {

    describe('Each function', function () {

        it('should loop through all the values of a list', function () {
            var list = [1, 2, 3];

            var str = "";

            util.each(list, function (val) {
                str += val;
            });

            expect(str).toBe('123');

        });
    });

});