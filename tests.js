var arr = [9, 7, 1, 7, 9, 0, 2, 3 ,6 ,1 ,6, 8, 5, 3, 3], //Unsorted test array
	sArr = [0, 1, 1, 2, 3, 3, 3, 5, 6, 6, 7, 7, 8, 9, 9], //sorted array used for comparison
	len = 15; //array length


module('Greater Than');  
test('Flat Array, No Objects. ([9, 7, 1, 7, 9, 0, 2, 3 ,6 ,1 ,6, 8, 5, 3, 3])', function() {
	deepEqual(doQ(arr).greaterThan(7).result(), sArr.slice(12), "Simple Greater than 7");
	deepEqual(doQ(arr).greaterThan(0).result(), sArr.slice(1), "Greater than 0"); 
	deepEqual(doQ(arr).greaterThan(4).result(), sArr.slice(7), "Greater than 4, but 4 is not in the array"); 
	deepEqual(doQ(arr).greaterThan(-1).result(), sArr, "Greater than -1. All elements > -1");
	deepEqual(doQ(arr).greaterThan(11).result(), [], "Greater than 11, 11 is > all elements"); 
});  


module('Less Than');  
test('Flat Array, No Objects Greater. ([9, 7, 1, 7, 9, 0, 2, 3 ,6 ,1 ,6, 8, 5, 3, 3])', function() {
	deepEqual(doQ(arr).lessThan(7).result(), sArr.slice(0, 10), "Simple less than 7");
});



/*
0, 1, 1, 2, 3, 3, 3, 5, 6, 6,  7,  7,  8,  9,  9
0  1  2  3  4  5  6  7  8  9   10  11  12  13  14




===================================================



0, 1, 1, 2, 3, 3, 3, 5, 6, 6,  7,  7,  8,  9,  9
1  2  3  4  5  6  7  8  9  10  11  12  13  14  15

*/