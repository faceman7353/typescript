//Object는 primitive type이 아닌경우 사용한다.

//create by object literal
const personal = {name:'Mark', age:39};



//create by Object.create
const personal2 = Object.create({name:'Mark', age:39});

//object 가능
let obj:Object  = {};

//=================아래와 같은 방식은 가능

// obj = {name : "Mark"}
// obj = [{name : "Mark"}] ;

//================아래와 같은 방식은 안됨.
// obj = 39;
// obj ='Mark'
// obj =true
// obj =100n
// obj =Symbol()
// obj = null
// obj = undefined;
//================