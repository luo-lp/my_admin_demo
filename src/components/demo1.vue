<template>
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio disabled v-model="radio" label="2">备选项</el-radio>
    <el-radio-button v-model="radio" label="3" size="mini">备选项</el-radio-button>
    <el-radio-button v-model="radio7" label="3" size="mini" border="true">备选项</el-radio-button>
    <el-radio-button disabled v-model="radio" label="3" size="medium">备选项</el-radio-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
<style lang="less">
</style>
