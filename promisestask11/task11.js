


console.log('before creating',new Date().getTime())
const posts=[];


 function createpost(post){ 
    return  new Promise((resolve, reject) => {
    setTimeout (()=>{
        //
        console.log(post)
    posts.push(post);
        resolve();
        
    },1000);
 });
}
 


   function updateLastUserActivityTime(){ return new Promise((resolve, reject) => {
    setTimeout (()=>{
        var k=0;
         k=new Date().getTime();
         console.log(k);
         posts.push(k);
        resolve();
    },1000);
    });
   }
   function print(){
     console.log(posts);
   }
   //Promise.all([createpost,lastuseractivity]).then(print);
   //createpost().then(lastuseractivity).then(print);

   Promise.all([createpost({title: 'Post Four', body:
    'This is Post Four'}
   ), updateLastUserActivityTime()]).then(print);
   Promise.all([createpost({title: 'Post Five', body:
    'This is Post Five'}
   ), updateLastUserActivityTime()]).then(print);
