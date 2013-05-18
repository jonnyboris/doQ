doQ - Simple JS Object Queries
====

doQ.js is a simple JavaScript library providing limited SQL style querying for arrays of numbers or Objects with numeric properties.


Example
---

``` JavaScript
 
var arr = [0, 1, 1, 2, 3, 3, 3, 5, 6, 6, 7, 7, 8, 9, 9];

doQ(arr).query("> 2 and < 8");
// = [3, 3, 3, 5, 6, 6, 7, 7]

var arr = [{"name": "alice", "age": 21, "height": 1.2},
           {"name": "bob", "age": 21, "height": 1.7}, 
           {"name": "carol", "age": 28, "height": 1.4}, 
           {"name": "dan", "age": 23, "height": 1.8}, 
           {"name": "erin", "age": 19, "height": 1.3}, 
           {"name": "frank", "age": 18, "height": 1.9}];

doQ(arr).query("age = 21");
// = [{"name": "alice", "age": 21, "height": 1.2}, {"name": "bob", "age": 21, "height": 1.7}]


doQ(arr).query("age = 21 and height > 1.2");
// = [{"name": "bob", "age": 21, "height": 1.7}]
```

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
