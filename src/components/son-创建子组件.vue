<template>
    <div class="father">
        <p>这是子组件:{{sname}}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      sname: 'little jack'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
