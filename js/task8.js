var obj={num:2};
var add=function(a,b,c,d){
  return this.num+a+b+c+d;
  
  
}
var arr=[1,2,3,8];

console.log(add.call(obj,4,7,8,4))
console.log(add.apply(obj,arr))
//if number of arguments in function is equal to number of elements of Array
//then 'apply'works else nan will be the output
var bound=add.bind(obj);
console.log(bound);
console.log(bound(1,5,4,8));

class student{
  constructor(student,age){
    this.student=student;
    this.age=age;
  }
  
}
student1=new student('john',20);
var hello=function(){
  
  console.log(this.age);
  //return this.student;
}

var bo=hello.bind(student1);
console.log(student1);
//console.log(bo( ));
bo();

