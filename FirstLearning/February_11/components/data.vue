<script>
    export default {
        // data返回的对象最终会被vue所代理
        data(){
            //this.$data.xxx = "xxx"动态添加响应数据
           
            return {
                msg:"今天天气真不错！",
                //vue在构建响应式对象时，会同时将对象中的属性也做成响应式数据
                stu:{//stu为响应式数据
                    name:"Bob",
                    age:18,
                    friend:{
                        name:"Lisa"
                    }
                },
                //建议将那些暂时没有使用到的属性，也添加到data返回的对象中，值可以设置为null
                hello:null
            } 
            //浅层响应式对象，可以通过shallowReactive()来创建一个浅层的响应式对象
            // return shallowReactive({
            //     msg:"我今天很开心",
            //     stu:{//stu为响应式数据
            //         name:"Bob",
            //         age:18,
            //         friend:{
            //             name:"Lisa"
            //         }
            //     }
            // })
        },
        components:{
            MyButton
        }
    }
</script>
<template>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name }}--{{ stu.age }}</h2>
    <h2>{{ hello }}</h2>
    <h3>{{ stu.friend.name }}</h3>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
</template>