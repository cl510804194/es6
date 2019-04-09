//拷贝

var a={a1:1,a2:2}
var b={b1:1,b2:2,b3:3}
var c={
    c1:1,c2:2
}
Object.assign(a,b,c)
console.log(a)


var a=1;
var b=a;
b==2;
//a=1;

var a={
    name:'a'
}
var b=a;
b.name='b'
//a.name='b'


var a={
    a1:'a',
    a2:2
}

var b={}

Object.defineProperty(b,'b1',{
    get (){
        return 'bbbbb1'
    }
})

Object.assign(a,b)