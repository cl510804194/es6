//var let const区别

a=1;//全局变量


var b;
function fn(){
    b=1;
    console.log(b)
}




var a=1;//变量提升,声明提到最前边

function fn2(){
    if(true){
        console.log(a)
    }
    else{
        var a;
        console.log(2)
    }
}//不报错

var c=1;
var frank=function () {
    console.log(c)
  }

  {
      var d=1;
  }//全局

let a=1;

{
    let a2=1;
}//局部
console.log(a2)//报错



const a=1;//只有一次赋值机会


//let 作用域在最近的{}之间，如果在let之前使用a,那么报错，如果重复let a,那么报错
//const 同上，必须在声明的时候赋值
