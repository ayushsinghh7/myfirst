
var itemlist=document.querySelector('#items');
var okitemlist=document.querySelector('li')

console.log(itemlist.parentNode);
console.log(itemlist.parentElement);
console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
console.log(itemlist.childNodes);
console.log(itemlist.children);
            console.log(itemlist.nextSibling);
            console.log(itemlist.nextElementSibling);
            console.log(itemlist.previousSibling);
            console.log(itemlist.previousElementSibling);
            
var ne=document.createElement('div');
 ne.className='bro';
 ne.id='bro1';
 ne.setAttribute=('title','hellodi')
console.log(ne);
var netext=document.createTextNode('Hello');

ne.appendChild(netext);
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1');
console.log(ne);
container.insertBefore(ne,h1);
var new1=document.createElement('div');
new1.className='row';
 new1.id='row1';
new1.setAttribute=('title','hellodis')
var newtext=document.createTextNode('Hello');
new1.appendChild(newtext);
var container1=document.querySelector('ul ');
var h2=document.querySelector('ul li');
console.log(new1);
container1.insertBefore(new1,h2);


