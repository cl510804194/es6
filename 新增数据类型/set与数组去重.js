//set对象 允许你存储任何类型的唯一值，无论是原始值或是对象引用
new Set([,1,2,3,4,5])
//数组去重
a=[1,2,3,2,3,4,5,3,4]
function uniq(array){
    var result=[]
    var hash={}
    for(let i=0;i<array.length;i++){
        hash[array[i]]=true
    }
    console.log("hash")
    console.log(hash)
    for(let key in hash){
        result.push(key)
    }
    return result
}
//缺点: number会自动变成字符串 ，如果出现数字4和sgring4 会变成一样的，只支持字符串,无法统计对象
//方法2
function uniq2(array){
    return Array.from(new Set(array)) 
}
console.log(uniq2(a))
//set方法有has,add,delete