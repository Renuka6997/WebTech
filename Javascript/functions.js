// //naming function
function sample() {
    alert('this is naming function');
}
sample();
//     //naming function with parameters
function add(num1, num2) {
    console.log('Sum is', num1 + num2);
}
add(25, 25);
//     //function expression
var test = function () {
    alert('this is an example for the function expression');
}
test();
//     //immediate invoke function
(function () {
    console.log('hello...');
})();
// naming function with parameter using alert
function add1(num1, num2)
{
    var c = num1 + num2;
    alert('the sum is ' + c);
}
add(2, 3);
//function closure(declaring the function within the function)
function outer() {
    var out = 'hello..outer function';
    document.write(out + "<br>");

    function inner() {
        var inn = 'hello...inner function';
        document.write(inn + "<br>");
    }
    return inner(); //completely exits from the statement
}
outer();
