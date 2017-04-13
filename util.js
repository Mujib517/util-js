var util = function () {

    var each = function (list, iteratorFn) {

        if (Array.isArray(list))
            for (var i = 0; i < list.length; i++)
                iteratorFn(list[i]);

        else if (typeof list === 'object') {
            for (var key in list) {
                iteratorFn(list[key]);
            }
        }
    };


    var map = function (list, iteratorFn) {

        if (Array.isArray(list))
            for (var i = 0; i < list.length; i++)
                list[i] = iteratorFn(list[i]);

        else if (typeof list === 'object')
            for (var key in list)
                list[key] = iteratorFn(list[key]);
    }

    return {
        each: each,
        map: map
    }
};

module.exports = util();
