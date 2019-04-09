//七种类型：number string bool null undefind
//object plain object/array/function/date/regxep


//symbol是基本数据类型,不能new

a=Symbol('xxxx')
Symbol(xxxx)
b=Symbol('xxxx')
Symbol(xxxx)
a===b


{
    let a=Symbol()
    let object={
        name:'ooo',
        age:18,
        [a]:'隐藏属性'
    }
    object.a="新的隐藏属性"
    window.object=object
}

