//map保存键值对,key可以被当做任意值
var obj={name:'frank'}
Object.keys(obj)
var map =new Map()
map.set(a,'hi')
map.get(a)
console.log(map.get(a))
for(let key of map.keys()){
    console.log(key)
}
for(let key of map.values()){
    console.log(key)
}
for(let key of map.entries()){
    console.log(key)
}


//垃圾回收
var a={/*100mb*/}
var b=a;
a=null
b=null



