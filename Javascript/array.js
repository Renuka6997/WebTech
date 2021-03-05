var arr=['Mango','Apple','kiwi','chikuu','Watermelon'];
console.log(arr);
console.log(arr[2]);
console.log('is it an array',Array.isArray(arr));

console.log('the length is',arr.length);
console.log('the value in third index is',arr[3]);

var arr=['R','O','W'];
console.log(typeof arr);
console.log(arr);

var str=['priya'];
console.log(typeof str);
console.log(str);

var str=Array.from(str);//conversion of string to array
console.log(typeof str);
console.log(str);

//arraymethods
var hobbies=['football','singing','reading','cooking','travelling','gyming'];
// hobbies.push('skating');//helps to add the elements at last index
// console.log('hobbies after push',hobbies);

hobbies.pop('skating');//helps to remove the last elements
console.log('hobbies after pop',hobbies);

//array methods
// hobbies.unshift('sleeping','bird watching');//add the elements for the first index
// console.log('hobbies after unshift',hobbies);

// hobbies.shift('sleeping');//removes the elements in the beginning of the array
// console.log('hobbies after shift',hobbies);

//to check whether the element is included or not
var isCooking=hobbies.includes('cooking');
console.log('has cooking',isCooking);

//include cooking and it checks whether the cooking from the 5th index
var isCooking=hobbies.includes('cooking',5);
console.log('has cooking', isCooking);

// gives the index of particular element
var isIndexofArray=hobbies.indexOf('travelling');
console.log('the index of travelling',isIndexofArray);

//to add the elements in between the array
var toJoinArray=hobbies.join("======");
console.log(toJoinArray);

//to modify the array
//index one:is to start
//index two:is to delete the count
//index three:is to add the items in deleted places
var afterSplice=hobbies.splice(1,2,'hello','world');
console.log('spliced elements',afterSplice);
console.log('after splicing',hobbies);

//to create
//the slice() method returns the selected elements in the array
//as a new array object. The slice() method selects the element starting
//at the given start argument, and ends at, but does not include,
//the given end argument. Note: the original array will not be changed.

var afterSlice=hobbies.slice(1,3);
console.log('sliced elements',afterSlice);
console.log('after slicing',hobbies);

