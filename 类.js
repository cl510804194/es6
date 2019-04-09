//es6
var public={
    hi(){
        console.log('hi')
    }
}

var obj={}

obj.__proto__=public

class Person{
    constructor(name){//私有属性
        this.name=name;
        this.age=18
    }
    walk(){//共有属性，原型链上
        console.log("走两步")
    }
}

//

class Animal{
    constructor(){

    }
    move(){
        console.log("我能动")
    }
}

class Person extends Animal{
    constructor(name){
        super()//执行继承的那个类的constructor
        this.name=name
        this._race=运物
        this.age=18
    }
    get move(){
        return this._race
    }
    set move(value){
       this._race=value
       
    }
    walk(){
        console.log('走')
    }
}

