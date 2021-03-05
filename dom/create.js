//unordered list
const ulElement=document.createElement('ul')
ulElement.textContent="lipsticks"

const li1Element=document.createElement('li')
li1Element.textContent="lakme"

const li2Element=document.createElement('li')
li2Element.textContent="loreal"

ulElement.appendChild(li1Element);
ulElement.appendChild(li2Element);

console.log(ulElement);

//adding to the body
document.body.appendChild(ulElement);

//ordered list
const olElement=document.createElement('ol')
olElement.textContent="lipsticks"

const li3Element=document.createElement('li')
li3Element.textContent="lakme"

const li4Element=document.createElement('li')
li4Element.textContent="loreal"

olElement.appendChild(li3Element);
olElement.appendChild(li4Element);

console.log(olElement);
document.body.appendChild(olElement);

//creating multiple buttons in dom with different names

let ar=['a','b','c','d','e','g','h','i','j'];

function buttons(){
    for(let i=0;i<10;i++) {
        let button = document.createElement("button");
        button.textContent=ar[i];
        document.body.appendChild(button);
    }
}
buttons();





