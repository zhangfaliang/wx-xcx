//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: `吃鸡宝典`,
    latitude:'',
    longitude:'',
    text:'text',
    num:888,
    array:[{text:'arr-text'}],
    object:{
      text:'object text'
    }
      },
  //上拉
  onPullDownRefresh:()=>{
    console.log('onPullDownRefresh')
  },
  //下拉
  onReachBottom:()=>{
    console.log('onReachBottom')
  },
  //滑动
  onPageScroll:function(){
    console.log('onPageScroll')
  },
  onShareAppMessage: function () {
    return {
      title: '吃鸡',
      path: 'index/index'
    }
  },
  //事件处理函数
  clickMe:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
        console.log(latitude, longitude)
        this.setData({
          latitude: latitude,
          longitude: longitude

        })
      }
    })
    this.setData({
      motto: '大吉大利，今晚吃鸡',
    })
  },
  onLoad: function () {
    console.log('onLoad',arguments)
  },
  onShow: function () {
    console.log("onShow",arguments)
  },
  onShareAppMessage: function () {
      return{
        title:'吃鸡宝典',
        path:'pages/index/index'
      }
  },
  changeText:function (){
    this.setData({
      text:'changeText'
    })
  },
  changeNum:function(){
    this.setData({
      num:666666
    })
  },
  changeItemArray:function(){
    this.setData({
      'array[0].text':'change arr 0 text'
    })
  },
  changeItemObject:function(){
    this.setData({
      'object.text': 'change object text'
    })
  }
})
// 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
// 仅支持设置可 JSON 化的数据。
// 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
// 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。