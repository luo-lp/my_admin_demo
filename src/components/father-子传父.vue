<template>
    <div class="father">
        <p>这是父组件:{{fname}}，我给我的儿子取名叫:{{sname}}</p>
        <p>大喜事，我们家将有后了，我儿子告诉我他女朋友的名字叫：{{songfname}}</p>
        <!-- 使用子组件:子组件只能在父组件的模板中使用 -->
        <son :sname='sname' @cangetname='getname'></son>
    </div>
</template>
<script>
// 1.引入你想使用的组件--以后我们并不会将页面的所有内容都创建在一个单文件中，这样代码太多了，不利于管理
import son from '@/components/son.vue'
export default {
  // 注册组件：就是让vue知道这是一个组件
  components: {
    son
  },
  methods: {
    // 参数就是子组件所传递的数据
    getname (data) {
      console.log(data)
      this.songfname = data
    }
  },
  data () {
    return {
      fname: 'jack',
      sname: 'little jack',
      songfname: '??'
    }
  }
}
</script>
<style lang="less" scoped>
.father{
  background-color: #ff0;
}
</style>
