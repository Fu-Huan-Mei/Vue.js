<script>
const obj = {
  msg:"哈哈,我是obj"
}
window.obj = obj
//1、组件：
//（1）含义：就是一个普通的js对象
//（2）作用：一个组件可以创建多个组件实例
  export default {
//2、data
//（1）本质：是一个函数/方法
    data() {
//（6）注意：直接向组件实例中添加的属性不会被vue所代理，不是响应式数据，修改后页面不会发生变化
      this.name = "孙悟空"
//实际代理对象，通过vm可以直接访问到$data中的属性，等价于vm.msg,可以通过vm.$data动态向组件中添加响应式数据
      vm.$data.msg
//（2）this：就是当前组件实例vm
//（3）注意：如果使用箭头函数，则无法通过this来访问组件实例
      // console.log("data=",this)//Proxy
//（4）返回值：返回一个对象，vue会对该对象进行代理，从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
      return {
        msg:"我爱vue"
      }
      // return obj
    },
    // created(){
    //   //在组件创建完毕后调用，但不建议
    //   this.$data.name = "孙悟空"
    // }
//（5）箭头函数的表示方式（不建议）
    // data:vm => {
    //   console.log("data=",vm)
    //   return {
    //     msg:"我爱vue"
    //   }
    // }
  }
</script>
<template>
  <h1>{{ msg }}</h1>
</template>