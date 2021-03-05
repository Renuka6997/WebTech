//map methods

var numbers=[100,200,300,400];

var mappednums=numbers.map(function(val,index){
val=val+50;
return val;
})
console.log('before mapping',numbers);
console.log('after mapping',mappednums);