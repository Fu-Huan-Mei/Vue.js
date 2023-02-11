/*响应式原理-代理 */
//创建对象
const obj ={
    name:"孙悟空",
    age:18,
    gender:"男"
}
//如果直接修改对象的属性，那就仅仅只是修改了属性，没法做其他得事情，这种操作只会影响对象自身，而不会导致元素得重新徐娜然
obj.name = "猪八戒"

/*1、需求：希望在修改一个对象属性的同时 可以进行一些其他操作  eg:触发元素得重新渲染*/
/*2、方法：改造对象:vue3中使用代理模式来完成对象的改造 */
/*3、创建代理：为对象创建一个代理，handler用来指定代理的行为*/
const handler = {
/*4、 get：（1）指定读取数据时的方式，它的返回值就是最终读取到的值；
（2）指定get后，通过代理读取对象属性时，就会调用get方法来获取;
（3）3个参数：target(被代理对象)即obj、 prop(读取属性)即name/age/gender、 receiver(代理对象)即proxy*/
    get(target,prop,receiver){
//（4）在返回值之前做其他操作：在vue中，data()返回的对象会被vue代理；
//vue代理后，当我们通过代理去读取属性时，返回值值之前，它会先做一个跟踪的操作
//track()跟踪了谁用了这个属性
        return target[prop]
    },
/*5、set（1）会在通过代理修改对象时调用 */
    set(target,prop,value,receiver){
        // console.log(target,prop,value,receiver)
        target[prop]=value//??
        //（2）trigger()触发所有使用该值的位置进行更新
        //（3）在修改值后做其他操作
    }
}
//6、注意：设置代理时，不会对被代理对象产生影响
const proxy = new Proxy(obj,handler)
//修改代理的属性，实际上调用set方法
proxy.age = 28
//读取属性，实际上调用get方法
console.log(proxy.age)//28
console.log(obj.age)//28