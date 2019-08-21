// 封装了项目中所有使用到的全局自定义指令
// export default {} // 导出默认对象

// 如果没有标识为default,那么就是一个常规的对象
export const myfocus = {
  inserted (el) {
    el.focus()
  }
}

export const mycolor = {
  inserted (el, binding) {
    // binding.value:就是你使用指令时为指令所绑定的数据
    el.style.color = binding.value
  }
}
