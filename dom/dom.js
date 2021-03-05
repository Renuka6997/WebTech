//using getElementById

let pElement=document.getElementById('demo');

//once we get the element then only access the text content
let pText=pElement.textContent;

console.log(pText); //hello

//the old value of pElement will be overridden
console.log(pElement);//hi everyone

//adding another element
pElement.textContent="hi everyone";

// console.log(pElement.textContent);

console.log("=======");

//using query selector(#id,.classname,tag,tagname)
let testElement=document.querySelector(".test");
console.log(testElement.textContent);

console.log("======");