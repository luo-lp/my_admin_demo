<template>
    <div class="son">
        <p>这是子组件，我的父亲给我取名叫：{{sname}}</p>
        <p>我找到女朋友了，她的名字叫：{{mygfname}}</p>
        <p>我终于被女朋友换了，新女朋友名字：<input type="text" v-model='mygfname'></p>
        <button @click='tellname'>点击告诉我老爸我的女朋友的名字叫：{{mygfname}}</button>
        <p>我妹妹告诉我他男朋友的名字叫：{{meifuname}}</p>
    </div>
</template>
<script>
// 事件总线
import eventBus from '@/utils/myvue.js'
export default {
  // 1.定义props,它是一个单独的成员,里面可以直接定义属性名称，这个属性就可以像data中定义的成员一样来使用
  // 2.这种在props中定义的属性不要在这个组件中直接赋值
  // props: [''],
  data () {
    return {
      sname: '？？',
      mygfname: '翠花',
      meifuname: '??'
    }
  },
  mounted () {
    // 监听父组件发射的事件
    eventBus.$on('songetname', data => {
      this.sname = data
    })
    // 通过$on可以进行事件的监听
    // this.$on('事件名称', 事件处理函数)
    // $('dom').on('click',function(){})
    eventBus.$on('getbfname', (data) => {
      console.log(data)
      this.meifuname = data
    })
  },
  methods: {
    tellname () {
      // this.$emit(事件名称，任意数据)
      eventBus.$emit('cangetname', this.mygfname)
    }
  }
}
</script>
<style lang="less" scoped>
  .son{
    width: 80%;
    background-color: pink;
  }
</style>
