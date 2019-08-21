<template>
    <div class="daugther">
        <p>我是女儿组件，我的名字叫：{{dname}}</p>
        <p>我找到男朋友了，我男朋友的名字叫：{{mybfname}}</p>
        <button @click='tellname'>点击告诉我哥哥我的男朋友的名字叫{{mybfname}}</button>
    </div>
</template>
<script>
// 事件总线
import eventBus from '@/utils/myvue.js'
export default {
  data () {
    return {
      dname: 'rose',
      mybfname: 'tom'
    }
  },
  methods: {
    tellname () {
      console.log('有没有发射')
      //   使用事件总线发射事件
      eventBus.$emit('getbfname', this.mybfname)
    }
  }
}
</script>
<style lang="less" scoped>
    .daugther{
        width: 90%;
        background: #0f0;
    }
</style>
