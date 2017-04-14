var util = function () {

    /*helpers*/
    var isArray = function (list) {
        return Array.isArray(list);
    };

    var filterHelper = function (elem, iteratorFn) {
        return iteratorFn(elem);
    };


    var comparer = function (obj1, obj2, field) {
        var val1 = obj1, val2 = obj2;
        if (field) {
            val1 = obj1[field];
            val2 = obj2[field];
        }

        if (val1 < val2) return -1;
        if (val1 == val2) return 0;
        return 1;
    };

    var comparerDesc = function (obj1, obj2, field) {
        return comparer(obj1, obj2, field) * -1;
    }

    /*Collections*/

    var each = function (list, iteratorFn) {

        if (isArray(list))
            for (var i = 0; i < list.length; i++)
                iteratorFn(list[i]);

        else if (typeof list === 'object') {
            for (var key in list) {
                iteratorFn(list[key]);
            }
        }
    };

    var map = function (list, iteratorFn) {

        if (isArray(list))
            for (var i = 0; i < list.length; i++)
                list[i] = iteratorFn(list[i]);

        else if (typeof list === 'object')
            for (var key in list)
                list[key] = iteratorFn(list[key]);
    };

    var find = function (list, iteratorFn) {

        if (isArray(list)) {
            for (var i = 0; i < list.length; i++)
                if (iteratorFn(list[i])) return list[i];
        }
    };

    var filter = function (list, iteratorFn) {
        var result = [];

        if (isArray(list)) {
            for (var i = 0; i < list.length; i++)
                if (iteratorFn(list[i])) result.push(list[i]);
        }

        return result;
    };

    var except = function (list, iteratorFn) {

        //negates the filterHelper
        var exceptHelper = function (elem, iteratorFn) {
            return !filterHelper(elem, iteratorFn);
        };


        var result = [];

        if (isArray(list)) {
            for (var i = 0; i < list.length; i++)
                if (exceptHelper(list[i], iteratorFn)) result.push(list[i]);
        }

        return result;
    };

    var all = function (list, iteratorFn) {
        if (isArray(list)) {
            for (var i = 0; i < list.length; i++)
                if (!iteratorFn(list[i])) return false;
            return true;
        }
        return false;
    };

    var any = function (list, iteratorFn) {
        if (isArray(list)) {
            for (var i = 0; i < list.length; i++)
                if (iteratorFn(list[i])) return true;
            return false;
        }
        return false;
    };


    /*Array functions*/

    var first = function (list) {

        if (isArray(list)) {
            return list[0];
        }
    };

    var last = function (list) {
        if (isArray(list)) {
            return list.length > 0 ? list[list.length - 1] : undefined;
        }
    };

    var min = function (list) {
        if (isArray(list)) {
            var min = 999999999;

            for (var i = 0; i < list.length; i++)
                if (list[i] < min) min = list[i];

            return min;
        }
    };

    var max = function (list) {
        if (isArray(list)) {
            var max = -999999999;

            for (var i = 0; i < list.length; i++)
                if (list[i] > max) max = list[i];

            return max;
        }
    };

    var sortHelper = function (list, field, compareFn) {
        if (isArray(list)) {
            for (var i = 1; i < list.length; i++) {
                for (var j = 0; j < i; j++) {
                    if (compareFn(list[i], list[j], field) < 0) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
            return list;
        }
    };

    var sortByDesc = function (list, field) {
        return sortHelper(list, field, comparerDesc);
    }

    var sort = function (list, field) {
        return sortHelper(list, field, comparer);
    }

    var count = function (list, iteratorFn) {
        if (isArray(list)) {
            var count = 0;

            for (var i = 0; i < list.length; i++)
                if (iteratorFn(list[i])) count++;

            return count;
        }
    };

    var countBy = function (list, iteratorFn) {
        if (isArray(list)) {
            var obj = {};

            for (var i = 0; i < list.length; i++) {
                var val = iteratorFn(list[i]);
                obj[val] = obj[val] ? ++obj[val] : 1;
            }

            return obj;
        }
    };


    return {
        each: each,
        map: map,
        first: first,
        last: last,
        find: find,
        filter: filter,
        except: except,
        all: all,
        any: any,
        contains: any,
        min: min,
        max: max,
        count: count,
        countBy: countBy,

        sort: sort,
        sortByDesc: sortByDesc
    }
};

module.exports = util();
