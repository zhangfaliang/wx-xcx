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
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
