<script>
    import MyButton from '../../components/MyButton.vue';
    import { shallowReactive } from 'vue';
    export default {
        data(){
            return {
                stu:{
                    name:"Bob",
                    age:18,
                    gender:"男"
                },
                firstName:"子",
                lastName:"孙",
                //数组也是响应式数据
                arr:["孙悟空","猪八戒","唐僧"]
            } 
        },
        methods:{
            updateAge(){
                if( this.stu.age === 18){
                    this.stu.age = 17
                }else{
                    this.stu.age = 18
                }
            },
//2、methods中的方法每次组件重新渲染都会调用
            getInfo(){
                console.log("getInfo调用了!")
                return this.stu.age >= 18
                ?"你是一个成年人！"
                :"你是一个未成年人！"
            }
        },
        
/*1、computed指定计算机属性：会对数据进行缓存
（1）语法：{ 属性名:getter }
（2）注意：计算属性只在其依赖的数据发生变化时才会重新执行，会对数据进行缓存*/
        computed:{
            // info:function(){
            //     return "哈哈哈"
            // }
            info(){
//（3）注意：在计算属性getter中，尽量只做读取相关的逻辑，不要执行那些会产生副作用的代码
                console.log("info调用了！")
                return this.stu.age>=18?"你是一个成年人！": "你是一个未成年人！" 
            },
            //计算属性的简写（只有getter时）
            // name(){
            //     return this.lastName + this.firstName
            // }
            name:{
                get(){
                    return this.lastName + this.firstName
                },
                //可以为计算属性设置为setter，使得计算属性可写，但是不建议这么做
                set(value){
                    //set在计算属性被修改时调用
                    this.lastName = value[0]
                    this.firstName = value.slice[1]
                }
            }
        }
    }//this???不懂
</script>
<template>
    <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
    <!--{{  }}里只可以写表达式，不可以写if语句-->
    <h2>评语：{{ info }}</h2><!--info是计算属性，是属性-->
    <h2>methods:{{ getInfo() }}</h2><!--getInfo是方法，调用时加()-->
    <button @click="updateAge">减龄</button>
    <h3>{{ name }}</h3>
    <h3>{{ arr[0] }}--{{ arr[1] }}--{{ arr[2] }}</h3>
</template>