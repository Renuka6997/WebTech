//filter method

var numbers=[100,200,300,400];

var afterfilter=numbers.filter(function(value,index){
    if(value>200){
        return true;
    }
    else{
        return false;
    }
})

console.log('before filter',numbers);
console.log('after filter',afterfilter);