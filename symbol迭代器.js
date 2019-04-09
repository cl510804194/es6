//es5
//string number bool undefind null object  基本类型
var  race={
    神族:1,
    人族:2,
    虫族:3
}


function createRole(input){
    if(input===race.神族){
        console.log("你选择了神族")
    }
    if(input===race.人族){
        console.log("你选择了人族")
    }
    if(input===race.虫族){
        console.log("你选择了虫族")
    }
}

//es6

var  race={
    神族:Symbol(),
    人族:Symbol(),
    虫族:Symbol()
}
//smybol 类似于胎记，第一无二的标记





//迭代
var version=0
function put(){
    version++
    return version
}

function putTwo(){
    var _value=0
    return{
        next:function(){
            _value+=1
            return{
                value:_value
            }
        },
        done:false
    }
}
a=putTwo()