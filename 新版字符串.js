
//es5 '' "" 无区别
var string="dsdsd"
var string2='fewfew'



//es6
var test="我不是好人"
var string =`
   <div>
   <p>${test}</p>
   </div>

`
document.getElementById().innerHTML=string
//反引号

function fn(){
   console.log(arguments)
}
fn`${test}`