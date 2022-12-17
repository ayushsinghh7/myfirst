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
    

