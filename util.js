var util = function () {

    var each = function (list, iteratorFn) {

        console.log(typeof list);

        if (Array.isArray(list))
            for (var i = 0; i < list.length; i++)
                iteratorFn(list[i]);

        else if (typeof list === 'object') {
            for (var val in list) {
                iteratorFn(list[val]);
            }
        }
    };

    return {
        each: each
    }
};

module.exports = util();
