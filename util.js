var util = function () {

    var each = function (list,iteratorFn) {

        for(var i=0;i<list.length;i++)
            iteratorFn(list[i]);
    };

    return {
        each: each
    }
};

module.exports = util();