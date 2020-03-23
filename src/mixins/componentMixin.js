export default {
  //component lifecircle
  created() {
    //创建组件
    console.log(this.$is + "-----component----- created 触发")
  },
  attached() {
    //使用组件
    console.log(this.$is + "-----component----- attached 触发")
  },
  detached() {
    //销毁组件
    console.log(this.$is + "-----component----- detached 触发")
  }
}