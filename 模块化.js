//es5没有模块，python php java 知道模块
//如何把模块引入JS
window.module2=function(){
    alert(1)
}
setTimeout(function(){
    window.module1()
},2000)

setTimeout(function(){
    window.module2()
},3000)

//var 全局变量  用立即执行函数
!function(){

}()
//!使其从函数声明变成函数表达式

{
    let name='模块1'
    window.module1=function(){
        alert(name)
    }
}