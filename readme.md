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

3. First() and Last() to get the first and last element from the list respectively.

<pre>
    var first=util.map([1,2,3]);
    var last=util.map([1,2,3]);
</pre>

4. Find(): returns the first matching elements from the array

<pre>
    var list=[1,2,3,4,5,6];
    var result=util.find(list,function(val){
        return val%2==0;
    });  //returns 2
</pre>

5. Filter(): returns all matching elements from the array

<pre>
    var list=[1,2,3,4,5,6];
    var result=util.filter(list,function(val){
        return val%2==0;
    });  //returns [2,4,6]
</pre>

6. Except(): returns all the non matching elements from the array

<pre>
    var list=[1,2,3,4,5,6];
    var result=util.excpt(list,function(val){
        return val%2==0;
    });  //returns [1,3,5]
</pre>