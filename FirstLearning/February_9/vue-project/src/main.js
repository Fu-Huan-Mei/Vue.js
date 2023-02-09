import { createApp } from 'vue'
//1、App.vue是根组件
import App from './App.vue'
//2、createApp(App)将根组件关联到应用上
// createApp(App).mount('#app')
//3、返回应用实例
const app = createApp(App)
console.log(app)//Object
//4、app.mount("#app")
//（1）作用：将应用挂载到页面中
//（2）返回值：会返回一个根组件的实例,组件的实例通常命名为vm,组件实例是一个Proxy对象（代理对象）
const vm =  app.mount("#app")
//vm本身在一个模块里，是局部变量
console.log(vm)//Proxy
//5、将vm设置为全局变量，就可直接在浏览器的控制台访问
window.vm = vm
