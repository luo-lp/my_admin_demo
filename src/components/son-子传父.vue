<template>
    <div class="son">
        <p>这是子组件，我的父亲给我取名叫：{{sname}}</p>
        <p>我找到女朋友了，她的名字叫：{{mygfname}}</p>
        <p>我终于被女朋友换了，新女朋友名字：<input type="text" v-model='mygfname'></p>
        <button @click='tellname'>点击告诉我老爸我的女朋友的名字叫：{{mygfname}}</button>
    </div>
</template>
<script>
export default {
  // 1.定义props,它是一个单独的成员,里面可以直接定义属性名称，这个属性就可以像data中定义的成员一样来使用
  props: ['sname'],
  data () {
    return {
    //   sname: '？？'
      mygfname: '翠花'
    }
  },
  mounted () {

  },
  methods: {
    tellname () {
      // this.$emit(事件名称，任意数据)
      this.$emit('cangetname', this.mygfname)
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
