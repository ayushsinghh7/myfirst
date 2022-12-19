console.log(document.body)
console.log(document.head)
document.title='wow';
console.log(document.getElementById('header-title'));
var  g=document.getElementById('header-title');
console.log(g)
g.textContent='hello nice to meet you';
g.innerText='favorite dishes';
//g.innerHTML='<h3>hello</h3>';
var  tittle=document.getElementById('main-header')
tittle.style.borderBottom='solid  3px #000';
var minititle=document.getElementById('bold')
    minititle.style.color='green';
    minititle.style.fontFamily='bold';
   var items= document.getElementsByClassName('list-group-item');
   items[1].style.backgroundColor='green';
   for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
   // items[1].style.backgroundColor='green';
   }

    var item= document.getElementsByTagName('li');
   
   for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
    item[i].style.backgroundColor='lightyellow';
   }
   items[1].style.backgroundColor='green';

    

