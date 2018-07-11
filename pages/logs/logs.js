//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  //下拉
  onReachBottom: () => {
    console.log('onReachBottom')
  },
  //滑动
  onPageScroll: function () {
    console.log('onPageScroll')
  },
  onLoad: function () {
    console.log( 111)
  },
  onShow: function () {
    console.log( 222)
  },
  onShareAppMessage:function(){
    
  }
})
// onLoad: 页面加载

// 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
// onShow: 页面显示

// 每次打开页面都会调用一次。
// onReady: 页面初次渲染完成

// 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
// 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
// onHide: 页面隐藏

// 当navigateTo或底部tab切换时调用。
// onUnload: 页面卸载

// 当redirectTo或navigateBack的时候调用。
