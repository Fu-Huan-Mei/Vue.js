<script>
    import MyButton from './components/MyButton.vue';
/*编写组件代码 */
    export default{
        data(){
            return {
                msg:"我爱Vue!"
            }
        },
        components:{
            MyButton
        }
    }
</script>
<template>
    <!-- 编写模板 -->
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
</template>