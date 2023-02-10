<script>
//组件，一个组件可以创建多个组件实例（所以才不直接用组件来挂载到页面，而是是由组件实例，方便组件可以复用）
//组件：普通的js对象
    export default {
//1、data()就是组件中的方法或函数,data中的this就是proxy对象即vm
//2、注意：如果使用箭头函数（箭头函数没有this），则无法通过this来访问组件实例
        data(){
            // console.log("data中的this是指",this);//proxy代理对象？？
//5、直接向组件实例中添加属性不会被vue代理，不是响应式数据，修改后页面不会发生变化
            this.name = "孙悟空"
//3、data返回值：data会返回一个对象作为返回值，vue会对该对象进行代理从而将其转换为响应式数据
//4、返回值才是响应式数据：可以直接通过组件实例app访问
            return {
                // msg:"哈哈哈"
                //数据msg
                msg:"我爱vue!"
            }
        }
        /*使用箭头函数的替代方式（不推荐）*/
        // data:vm=>{
        //     console.log("data中的this是指",this);//proxy
        //     return {
        //         // msg:"哈哈哈"
        //         msg:"我爱vue!"
        //     }
        // }    
    }
</script>
<template>
    <!--元素h1-->
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
</template>