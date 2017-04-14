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

    describe('First function', function () {

        it('should return first element from the array', function () {
            var list = [1, 2, 3];

            var val = util.first(list);

            expect(val).toBe(1);
        });

        it('should return undefined when array is zero', function () {
            var val = util.first([]);

            expect(val).toBe(undefined);
        });
    });

    describe('Last function', function () {

        it('should return first element from the array', function () {
            var list = [1, 2, 3];

            var val = util.last(list);

            expect(val).toBe(3);
        });

        it('should return undefined when array is zero', function () {
            var val = util.last([]);

            expect(val).toBe(undefined);
        });
    });

    describe('Find function', function () {

        it('should return first even number', function () {
            var list = [1, 2, 3, 4, 5, 6];

            var result = util.find(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toBe(2);
        });


        it('should return undefined when no matching element found', function () {
            var list = [1, 3, 5];

            var result = util.find(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toBeUndefined();
        });
    });

    describe('Filter function', function () {

        it('should return all the values matching criteria', function () {
            var list = [1, 2, 3, 4, 5, 6, 7, 8];

            var result = util.filter(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toEqual([2, 4, 6, 8]);
        });
    });

     describe('Except function', function () {

        it('should return all the values not matching criteria', function () {
            var list = [1, 2, 3, 4, 5, 6, 7, 8];

            var result = util.except(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toEqual([1,3,5,7]);
        });
    });
}); 