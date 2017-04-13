Utility library 
==================================================================
<h4>Installation:<h4>

npm install util-js

<h4>Usage:</h4>

var util=require('util');

1. Each(): to iterate through an array or object

<pre>

    var list=[1,2,3];  // var list={"one":1,"two":2,"three":3};
    
    util.each(list,function(val){
        console.log(val);
    });

</pre>

2. Map(): to modify values of an object or array and return it.

<pre>
    var list=[1,2,3];

    util.map(list,functio(val){
        return val*2;
    });
</pre>
