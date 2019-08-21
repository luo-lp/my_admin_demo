<template>
    <div class="father">
        <p>这是子组件，我的父亲给我取名叫：{{sname}}</p>
    </div>
</template>
<script>
export default {
  // 1.定义props,它是一个单独的成员,里面可以直接定义属性名称，这个属性就可以像data中定义的成员一样来使用
  props: ['sname'],
  data () {
    return {
    //   sname: '？？'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
