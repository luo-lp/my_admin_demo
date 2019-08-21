<template>
    <div class="father">
        <p>这是父组件:{{fname}}，我给我的儿子取名叫:{{sname}}</p>
        <!-- 使用子组件:子组件只能在父组件的模板中使用 -->
        <son :sname='sname'></son>
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
  data () {
    return {
      fname: 'jack',
      sname: 'little jack'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
