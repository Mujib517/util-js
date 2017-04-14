var util = function () {

    /*helpers*/
    var isArray = function (list) {
        return Array.isArray(list);
    };

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
        var result = [];

        if (isArray(list)) {
            for (var i = 0; i < list.length; i++)
                if (!iteratorFn(list[i])) result.push(list[i]);
        }

        return result;
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

    return {
        each: each,
        map: map,
        first: first,
        last: last,
        find: find,
        filter: filter,
        except: except
    }
};

module.exports = util();
