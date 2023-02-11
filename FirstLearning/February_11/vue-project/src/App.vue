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
                }
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
                console.log("info调用了！")
                return this.stu.age>=18?"你是一个成年人！": "你是一个未成年人！" 
            }
        }
    }
</script>
<template>
    <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
    <!--{{  }}里只可以写表达式，不可以写if语句-->
    <h2>评语：{{ info }}</h2>
    <h2>methods:{{ getInfo() }}</h2>
    <button @click="updateAge">减龄</button>
    <!-- <h3>{{ info }}</h3> -->
</template>