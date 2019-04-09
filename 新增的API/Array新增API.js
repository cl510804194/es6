//array from 
var a={
    0:'000',
    1:'111',
    2:'222',
    length:3
}
a[0]==='000'
a[1]==='111'
a[2]==='222'
a.length=3
Array.prototype.slice.call(a,0)
a=Array.from(a)
//将伪数组变成数组
a.push('3333')
console.log(a)

//创建一个长度为5的空数组
a=Array.from({length:5})
a=Array.apply(null,{length:5})
b=a.map(i=>1)

//创建一个长度为5，且值全是6的数组
function x(n,fill){
    var array=Array.from({length:n})
    return  array.map(i=>fill)
}
function x(n,fill){
    return new Array(n+1).join(fill).split('')
}

//array.of

//array.fill //将现有的array全部填充指定值
var a=[1,2,3]
a.fill(4,1)
a.fill(4)

//array.find 必须接受一个函数
a.find((i)=>i===2)

var a=[{name:'a1',age:80},{name:'a2',age:19},{name:'a3',age:19}]
a.find(item=>item.age==18)
//只找一个

//array.filter
var a=[{name:'a1',age:80},{name:'a2',age:19},{name:'a3',age:19}]
a.find(item=>item.age==18)
//找两个

