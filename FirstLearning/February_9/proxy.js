//创建对象
// const obj = {
//     name:"孙悟空",
//     age:18
// }
//如果直接修改对象的属性，只修改对象的属性，只会影响对象自身，不会导致元素重新渲染
// obj.name = "猪八戒";

/*响应式原理-代理 */
/*
1、目的：希望在修改属性的同时，可以进行其他操作 eg:触发元素的重新渲染
2、方法：对象进行改造，vue3中使用的是代理模式来完成对象的改造*/
//（1）创建对象
const obj = {
    name:"孙悟空",
    age:18
}
//（2）为对象创建代理：handler--指定代理行为
//（3）注意：设置代理时，不会对原对象产生影响
const handler = {//中间代理人handler
//3、get方法/函数--读取属性时做的操作
//（1）作用：指定get后，再通过代理读取对象属性时，会调用get方法来获取值
//（2）返回值：指定读取数据时的行为，它的返回值就是最终读取到的值
//（3）参数：target表示被代理对象即handler、prop表示读取的属性即name、age等、receiver表示代理对象即obj
    get(target,prop,receiver){
        // return "hello world"
        // console.log(args);
//（4）意义：返回值之前做其他操作：
//在vue中data返回的对象会被vue代理当通过代理去读取属性时，返回值之前，会先做一个跟踪的操作track()
//当通过代理去
        return target[prop];
    },
//4、set()函数/方法：（1）作用：通过代理修改对象时调用--修改属性时做的操作
    set(target,prop,value,receiver){
        target[prop] = value
        //（2）意义：修改值之后完成其他操作
        trigger()//触发所有使用该值的位置进行更新
    }
}//（3）指定代理行为
//创建代理
const proxy = new Proxy(obj,handler)
console.log(proxy);//{ name: '孙悟空', age: 18 }
//（4）修改代理的属性就是去调用set方法
console.log(proxy.name);//孙悟空
proxy.age = 28
console.log(proxy.age);//28
console.log(obj.age);//28
