//子组件
//封装一个自定义的按钮组件
export default {
    data(){
        return {
            //响应式数据
            count:0
        }
    },
    template:`
    <div>
        <h2>子组件</h2>
        <button @click="count++">点我一下</button> <span>{{count}}</span>
    </div>
    `
}