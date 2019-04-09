//es3 
//具名函数
function xxx(p1,p2){
    console.log(1)
    return 2
}

//匿名函数
let xxx=function(x1,x2){
    console.log(1)
    return 2
}

let xxx 
temp=function(x1,x2){
    console.log(1)
    return 2
}
xxx=temp

//箭头函数
let xxx=(p1,p2)=>{
    console.log(1)
    return 2
}
let xx2=p1=>{
    console.log(1)
    return 2
}
let xx3=(p1,p2)=>p1+p2
let xx4=p1=>p1*2



function fn(p1,p2){
    let p1=arguments[0];
    let p2=arguments[1];
    console.log(p1)
}
//arguments对象:参数对象


let object={
    name:'obj',
    hi:function(p1,p2){
        console.log(this.name)
    }
}
object.hi(1,2)
object.hi.call(object,1,2)
//this的值是由.前面的值决定的


var controller={
    el:'#app',
    init:function(){
        $(this.el).on('click',()=>{
            this.xxx()
        })
    },
    onClick:function(){
        console.log('用户点击APP，就会调用这个函数')
        //this是什么？
        //B window
        //c #APP元素
    },
    getUsers:function(){
        console.log(66)
    }
}

let obj={
    name:a,
    hi:(self)=>{
        console.log(self)
    }
}


//this是call的第一个参数
let arr=[1,2,3,4,5];
let array=arr.map(number=>number*number)
console.log(array)


//this是call的第一个参数
//箭头函数使this变得容易理解
