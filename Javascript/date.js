// var dt=new Date();
// document.write(dt);

// var cd=new Date(2019,11,25);
// document.write(cd);

//setTimeout(function(){},time delay;
setTimeout(function(){
    var date=new Date().toLocaleDateString();
    var x=document.getElementById('demo');
    x.innerHtml=date;
},5000);
//ex:2




//setInterval
setInterval(function(){
    var date=new Date().toLocaleTimeString();
    var x=document.getElementById('demo');
    x.innerHTML=date;
},4000);

// //date object methods
// var todaysdate=new Date();
// document.write('today date is', todaysdate);

// console.log('date',todaysdate.getDate);
// console.log('year',todaysdate.getFullYear);
// console.log('date',todaysdate.getDay);
// console.log('year',todaysdate.getHours);

