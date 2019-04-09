function* put(){
    var version=0;
    while(true){
        version+=1;
        yield version;//吼出
    }
}

//生成器是迭代器的语法糖


  //for of
  array=[1,2,3]
for(let item of array){
    console.log(item)
}
//迭代  有些对象不可迭代



for(let item in array){
    console.log(item)
}
//遍历  任何对象都可以迭代
//数组和对象的区别 
//数组的原型__prote__->array.protetype
//object的原型__prote__->object.protetype

