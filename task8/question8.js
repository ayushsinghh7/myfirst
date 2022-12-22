var form=document.getElementById('addform');
var itemlist=document.getElementById('items');

addEventListener('submit',dodo)
addEventListener('click',removeitem)



function dodo(e){
    e.preventDefault();
   // console.log('5');

   var bro=document.getElementById('ite').value;
   var li= document.createElement('li');
   li.className='list-group-item';
   console.log(li)
   li.appendChild(document.createTextNode(bro));
   var del=document.createElement('button');
   del.className='btn btn-danger btn-sm float-right delete'
   del.appendChild(document.createTextNode('x'))
   
   li.appendChild(del)
   itemlist.appendChild(li);

  var de=document.createElement('button');
   de.className='btn btn-danger btn-sm float-right '
   de.appendChild(document.createTextNode('Edit'));
   
   li.appendChild(de)
   itemlist.appendChild(li);

}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li= e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

