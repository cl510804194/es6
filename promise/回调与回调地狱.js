//如果函数里面调函数，这个函数就叫回调函数
// function fn(){

// },
// function fn2(){
//     fn()
// }

//回调地狱   回调套回调套回调
function 获取用户信息(fn){
    fn("姓名：方方")
}
function 打印用户信息(用户信息){
    console.log("用户信息")
}
获取用户信息(打印用户信息)