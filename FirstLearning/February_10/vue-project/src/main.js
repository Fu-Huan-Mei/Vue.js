//1、App.vue根组件
import { createApp } from 'vue'
import App from './App.vue'
//2、createApp(App)
//（1）作用：将根组件关联到应用实例app中
const app = createApp(App)
//（2）返回值：返回应用的实例
// console.log(app)
//3、app.mount("#app")
//（1）作用：将应用挂载到网页上
//（2）返回值：会返回一个根组件的实例，组建实例通常可以命名为vm，组件实例就是一个Proxy对象（代理对象）
const vm = app.mount("#app")
//4、main.js是一个模块化得文件，相当于闭包，作用域也是局部作用域
console.log(vm)//Proxy
//将vm设置为全局变量
window.vm = vm
window.app = app
// createApp(App).mount('#app')
