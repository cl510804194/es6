function 获取用户信息(){
    return new Promise(function(resolve,reject){
        console.log('第一次获取用户信息中.....')
        resolve('姓名方方')
    })
 
}

function 打印用户信息(用户信息){
    return new Promise(function (resolve,reject) {
        console.log(用户信息)
        resolve()
      })

}

function 获取另一个用户信息(){
    return new Promise(function (resolve,reject) {
        console.log('第二次获取用户信息中.....')
        resolve("姓名小白")
      })
}
获取用户信息().then(打印用户信息)
            .then(获取另一个用户信息)
            .then(打印用户信息)




let 用户信息=await 获取用户信息('若愚')
console.log(用户信息)
