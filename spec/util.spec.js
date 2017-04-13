const util = require('./../util.min');

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

        it('should loop through array keys when array is passed as parameter', function () {

            var obj = { "one": 1, "two": 2, "three": 3 };

            var str = "";

            util.each(obj, function (val) {
                str += val;
            });

            expect(str).toBe('123');

        });

    });

});