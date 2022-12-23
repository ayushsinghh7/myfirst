var form=document.getElementById('addform');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',dodo)
itemlist.addEventListener('click',removeitem)
filter.addEventListener('keyup',filteritems)



function dodo(e){
    e.preventDefault();
   // console.log('5');

   var bro=document.getElementById('ite').value;
   var second=document.getElementById('itee').value;
   var li= document.createElement('li');
   li.className='list-group-item';
   console.log(li)
   li.appendChild(document.createTextNode(bro+' '));
   //li.appendChild(document.createTextNode(bro+'  '+second));
   li.appendChild(document.createTextNode(second));
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
function filteritems(e){
    var text=e.target.value.toLowerCase();
    //console.log(text);
    var itemss=itemlist.getElementsByTagName('li');
   // console.log(itemss);
    Array.from(itemss).forEach(function(item){
       // var itemname=item.firstChild.textContent;
        var itemname=item.childNodes[0].textContent;
      
        var itemfan=item.childNodes[1].textContent;

        var itemman=item.childNodes[0].textContent+item.childNodes[1].textContent;

        //console.log(itemname);
        if(itemname.toLowerCase().indexOf(text)!=-1||
        itemfan.toLowerCase().indexOf(text)!=-1||
        itemman.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'

        }
        else{
            item.style.display='none';
        }

    });

}

