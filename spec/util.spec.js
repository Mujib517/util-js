const util = require('./../util');

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

    describe('Map function', function () {

        it('should map and return array', function () {
            var arr = [1, 2, 3];

            util.map(arr, function (val) {
                return val * 3;
            });

            expect(arr).toEqual([3, 6, 9]);
        });

        it('should map and return an object', function () {
            var obj = { "one": 1, "two": 2, "three": 3 };

            util.map(obj, function (val) {
                return val * 3;
            });

            var result = { "one": 3, "two": 6, "three": 9 };

            expect(obj).toEqual(result);
        });
    });

}); 