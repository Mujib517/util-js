Auxiliary JS : a utility library 
==================================================================
<h4>Installation:<h4>

npm install auxiliary-js

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

6. All(): returns true if all the  elements match the given criteria

<pre>
    var list=[2,4,6];
   var result = util.all(list, function (val) {
                return val % 2 == 0;
            });  //returns true;
</pre>

7. Any(): returns true if any of the elements match the given criteria

<pre>
    var list=[2,4,6];
    var result = util.any(list, function (val) {
                return val % 2 == 0;
   });  //returns true;
</pre>

8. Min() and Max(): returns min and max value from array respectively

<pre>
    var list=[2,4,6,-2];
    var min = util.min(list); //returns -2;
    var max = util.max(list); //returns 6;
</pre>

9. Sort(): to sort collections

<pre>
     var list = [2, 5, 1, 10, 8, 7];
     var result = util.sortBy(list); 
     
     var list = [
                { id: 2, name: "abc", price: 100 },
                { id: 5, name: "ghi", price: 200 },
                { id: 1, name: "def", price: 300 }
            ];
     var result = util.sort(list, "id"); //sorting by id field
</pre>

10. SortByDesc(): to sort collections in descending order

<pre>
     var list = [2, 5, 1, 10, 8, 7];
     var result = util.sortByDesc(list); 
     
     var list = [
                { id: 2, name: "abc", price: 100 },
                { id: 5, name: "ghi", price: 200 },
                { id: 1, name: "def", price: 300 }
            ];
     var result = util.sortByDesc(list, "id"); //sorting by id field
</pre>