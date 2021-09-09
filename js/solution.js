'use strict'

const ulElem = document.body.childNodes[1];
 let arr = []
 for(let attr of ulElem.attributes) {    
    arr.push(attr.name, attr.value)    
 }
 console.log(arr)


 let arr2 = []
 for(let attr2 of ulElem.attributes) {    
     arr2.push(attr2.name)    
 }
 console.log(arr2)


 const lastLi = document.querySelector('ul li:last-child');
 lastLi.innerHTML = '«Привет меня зовут Диана»';




 const firstLi = document.querySelector('ul li:first-child');
 firstLi.setAttribute('data-my-name', '«Привет меня зовут Диана»')


 const ul = document.querySelector('ul');
 ul.removeAttribute('data-dog-tail')
 console.log(ul)


 