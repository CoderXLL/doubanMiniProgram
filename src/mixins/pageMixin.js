export default {
  //page lifecircle
  onLoad() {
    //监听页面加载
    console.log("page----- onLoad 触发");
  },
  onReady() {
    //监听页面初次渲染完成
    console.log("page----- onReady 触发");
  },
  onShow() {
    //监听页面显示
    console.log("page----- onShow 触发");
  },
  onHide() {
    //监听页面隐藏
    console.log("page----- onHide 触发");
  },
  onUnload() {
    //监听页面卸载
    console.log("page----- onUnload 触发");
  }
}