const app =getApp();
const common = require('../../utils/common')
//tip: require 暂时不支持绝对路径

Page({
  data:{
    globalData: app.globalData,
    helloText: 'helloText',
    goodbayText:'goodbayText',
  },
  onShow:function(){
   
  },
  helloMINA:function () {
    this.setData({
      helloText: common.sayHello('MINA')
    })
  },
  goodbayMINA: function (params) {
    this.setData({
      goodbayText:common.sayGoodbay('MINA')
    })
    
  },
  onPullDownRefresh:function(){
    console.log(app.globalData)
  }
})