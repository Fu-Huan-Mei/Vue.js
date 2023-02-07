//根组件
//引入组件
import MyButton from "./components/MyButton"
//创建根组件
export default {
    data(){
        return {
            //响应式数据
            msg:"我爱vue!",
           
        }
    },
    //在组件中注册子组件
    components:{
        MyButton
        // mybutton:MyButton//组件注册名：引入的名字
    },
    /* template使用字符串形式编写代码
1、问题：
（1）、这些字符串会在项目运行时，在浏览器中被编译为js的函数（性能较差）
（2）、在字符串中编写代码，体验很差（标签名没有提示信息）
2、解决：Vue为我们提供了单文件组件(SFC)
3、单文件组件(SFC)：
（1）创建文件：文件名.vue
（2）vscode安装插件：Vue Language Features (Volar)
（3）注意：vue文件是用来别那些单文件组件的，vue文件不能被浏览器识别，必须浏览器打包后才会被识别
（4）同时vue文件在打包时，构建工具会直接将template转换为函数，无需在浏览器中去编译，那么性能也会有所提升*/
    template:`
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `
}
