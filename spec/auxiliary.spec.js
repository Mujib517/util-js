const util = require('./../auxiliary');

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

            expect(result).toEqual([1, 3, 5, 7]);
        });
    });

    describe('All function', function () {

        it('should return true when all the elements match the criteria', function () {
            var list = [1, 2, 3, 4, 5, 6];
            var result = util.all(list, function (val) {
                return val > 0;
            });

            expect(result).toBe(true);
        });

        it('should return false when any of the elements do not match the criteria', function () {
            var list = [1, 2, 3, 4, 5, 6];
            var result = util.all(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toBe(false);
        });
    });

    describe('Any function', function () {

        it('should return false when none of the elements match the criteria', function () {
            var list = [1, 2, 3, 4, 5, 6];
            var result = util.any(list, function (val) {
                return val == 0;
            });

            expect(result).toBe(false);
        });

        // test for contains method
        it('should return false when none of the elements match the criteria', function () {
            var list = [1, 2, 3, 4, 5, 6];
            var result = util.contains(list, function (val) {
                return val == 0;
            });

            expect(result).toBe(false);
        });

        it('should return true when any of the elements match the criteria', function () {
            var list = [1, 2, 3, 4, 5, 6];
            var result = util.any(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toBe(true);
        });
    });

    describe('Min function', function () {

        it('should return the min value', function () {
            var list = [1, 2, 3, 4, 5, 6, -2];
            var result = util.min(list);

            expect(result).toBe(-2);
        });
    });

    describe('Max function', function () {

        it('should return the max value', function () {
            var list = [1, 2, 3, 4, 5, 6, -2];
            var result = util.max(list);

            expect(result).toBe(6);
        });
    });

    describe('Sort function', function () {

        it('should sort an array', function () {
            var list = [2, 5, 1, 10, 8, 7];

            var result = util.sort(list);

            expect(result).toEqual([1, 2, 5, 7, 8, 10]);
        });


        it('should sort an array of objects', function () {
            var list = [
                { id: 2, name: "abc", price: 100 },
                { id: 5, name: "ghi", price: 200 },
                { id: 1, name: "def", price: 300 }
            ];

            var expected = [
                { id: 1, name: "def", price: 300 },
                { id: 2, name: "abc", price: 100 },
                { id: 5, name: "ghi", price: 200 }
            ];


            var result = util.sort(list, "id");

            expect(result).toEqual(expected);
        });
    });

    describe('SortByDesc function', function () {

        it('should sort an array in descending order', function () {
            var list = [2, 5, 1, 10, 8, 7];

            var result = util.sortByDesc(list);

            expect(result).toEqual([10, 8, 7, 5, 2, 1]);
        });


        it('should sort an array of objects in descending order', function () {
            var list = [
                { id: 2, name: "abc", price: 100 },
                { id: 5, name: "ghi", price: 200 },
                { id: 1, name: "def", price: 300 }
            ];

            var expected = [
                { id: 5, name: "ghi", price: 200 },
                { id: 2, name: "abc", price: 100 },
                { id: 1, name: "def", price: 300 }
            ];


            var result = util.sortByDesc(list, "id");

            expect(result).toEqual(expected);
        });
    });

    describe('Count function', function () {

        it('should return count', function () {
            var list = [1, 2, 3, 4, 5, 6, 7, 8];

            var result = util.count(list, function (val) {
                return val % 2 == 0;
            });

            expect(result).toBe(4);
        })
    });

    describe('CountBy function', function () {

        it('should return obj grouped by type', function () {
            var list = [1, 2, 3, 4, 5, 6, 7, 8];

            var result = util.countBy(list, function (val) {
                return val % 2 == 0 ? 'matching' : 'non-matching';
            });

            expect(result).toEqual({
                matching: 4,
                'non-matching': 4
            });
        });

        it('should return obj grouped by multiple types', function () {
            var list = [2, 3, 4, 5, 6, 7, 0, 0, 8, 0];

            var result = util.countBy(list, function (val) {
                if (val == 0) return 'zero';
                if (val % 2 == 0) return 'even';
                return 'odd';
            });

            expect(result).toEqual({
                zero: 3,
                even: 4,
                odd: 3
            });
        });
    });

}); 