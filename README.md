doQ - Simply Object Queries
====

doQ.js is a simple JavaScript library providing limited SQL style querying for arrays of numbers or Objects with numeric properties.


Example
---

``` JavaScript
 
var arr = [0, 1, 1, 2, 3, 3, 3, 5, 6, 6, 7, 7, 8, 9, 9];

doQ(arr).query("> 2 and < 8");
// = [3, 3, 3, 5, 6, 6, 7, 7]

var arr = [{"name": "alice", "age": 21, "height": 1.2}, {"name": "bob", "age": 21, "height": 1.7}, {"name": "carol", "age": 28, "height": 1.4}, {"name": "dan", "age": 23, "height": 1.8}, {"name": "erin", "age": 19, "height": 1.3}, {"name": "frank", "age": 18, "height": 1.9}];


