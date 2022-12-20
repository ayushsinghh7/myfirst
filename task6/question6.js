
var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor ='green';
var item3=document.querySelector('.list-group-item:nth-child(3)');
item3.style.display='none';
var font=document.querySelectorAll('.list-group-item');
font[1].style.color="green";

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

