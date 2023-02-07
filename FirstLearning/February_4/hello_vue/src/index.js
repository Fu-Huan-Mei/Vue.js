//主程序
import { createApp } from 'vue/dist/vue.esm-bundler.js'//默认情况下，vue不支持模板
import App from "./App.vue"
// //创建根组件，直接把该步骤写入另一个js文件中，引用时直接导入即可
// const App = {
//     data(){
//         return {
//             msg:"我爱vue!"
//         }
//     },
//     template:`<h1>{{msg}}</h1>`
// }
//创建应用并挂载
// createApp(App).mount("#root")
//mount()的返回值是根组件的实例
const vm = createApp(App).mount("#root")
