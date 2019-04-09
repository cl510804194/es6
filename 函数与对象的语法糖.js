

//es5

function fn(p1,p2){
    if(p2===undefined){
        p2=0;
    }
    return p1+p2
}

fn(1)


//es6
function fn(p1=0,p2=0){
    return p1+p2
}

function push(item,array){
    array.push(item);
    return array
}
console.log(push(1));
console.log(push(2));
//每次console都是新数组

function sum(){
    let result=0
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i]
    }
    return result
}


function sum(message,...numbers){//...numbers 剩余参数
    //  let args=Array.prototype.slice.call(arguments)
  //  let args=Array.from(arguments)
 //   let args=[...arguments];
 //     三种方法将伪数组变成数组
    let numbers =arguments.slice(1)
    result=numbers.reduce((p,v)=>p+v,0)
    return message+result
}


let array1=[1,2,3,4,5,6]
let [a,b,c,...array2]=array1
let array2=[0,...array1,7]
let array3=[...array1,...array2]

console.log(array2)
//模式匹配


let a=1;
let b=2;
[a,b]=[b,a];
console.log(a,b)
//换位置


//解构赋值
var frank={name:'frank',age:18,gender:'male'};
var name=frank.name;
var age=frank.age;
var gender=frank.gender;
var {name,age,gender}=frank;
var [a,b=7]=[1,2]
var [a=1,b=7]=[]
console.log(a,b)


//浅拷贝
let objA={
    name:{
        x:a
    }
}
let objC={
    p1:11,
    p2:21
}

let objB={...objA,...objC}
console.log(objB)


//深拷贝
//JSON.parse  不适用于复杂对象
//递归




//合构
var [x,y]=[1,2]
var obj={x,y}
var obj={x:1,y:2}
var {x,y}=obj


var obj={
    name:1,
    age:2
}

var obj2={
    x:1,
    y:2,
    ...obj1,
    sayHi(name){},
    sayBye(name){},
    sayByeBye:function(){

    }
}

//动态key
var obj={
    [key+key]:value
}
