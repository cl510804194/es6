//es5
var a=new Object()
var a2={}
//不是完全空对象 有__proto__

//es6
var b=Object.create(null)
//完全空对象

var obj={
    a:1,
    b:2,
    c:3
}

var a=1;
var b=2;
var object={
    a:a,
    b:b
}

var object={
    a,b
}
//缩写

var name='a'
var object={name:1}

//变化属性
var name="a";
var object={[name]:1}



//为对象设置 get/set
var a={
    _age:18,
    get age(){
        return this._age
    },
    set age(value){
        if(value<100){
            this._age=value;
        }
        else{
            this._age=100
        }
    }

}


var i=1;

Object.defineProperty(window,"a",{
    get(){
        i++;
        return i
    }
})
//为window对象添加属性


var a=2;
var s={
    [n*n+n/n+n/2]:1
}



var obj1={a:1,b:2,c:3}
var obj2=obj1;
obj2.a=4;


var obj1={a:1,b:2,c:3}
var obj2=obj1;
obj2.a=4;
console.log(obj1.a)
var obj3={}

for(let key in obj1){
    obj3[key]=obj1[key]
}
//浅拷贝

var obj3=Object.assign({},obj1)
var obj3=[...obj1]
//浅拷贝 es6方法  相当于上面的for循环



var b={
    sayHi(){}
}
var a=object.create(b);
//a的原型是b