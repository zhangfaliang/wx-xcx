/**
 * 小程序分享到微信群中，用户打开小程序，上报群信息
 * 参考文档：https://www.cnblogs.com/sparkleDai/p/7604889.html
 * 使用方式：
 * 1 在小程序入口文件app.js中添加,将shareTicket写入到globalData
 *  onShow: function(options){
 *      if (options.shareTicket){
 *        this.globalData.shareTicket = options.shareTicket;  
 *      }
 *  },
 *  globalData: {
 *      shareTicket:null
 *  }
 * 2 在需要设置群分享的页面引入该文件
 *  var share = require('../../../../lib/XXXX/shareTicket');
 * 3 onLoad方法中设置分享shareTicket为true
 *  share.shareWithTicket()
 * 4 在合适地位置进行分享数据上报
 *  share.checkShareTicket(data)
 *  其中data为 {
 *    sellerId:'', //卖家ID 非必传，能拿到一定要传
 *    buyerId: '', //卖家ID 必传
 *    itemId: '' //商品ID 非必传
 *  } 
 */
var core = require("../core/index");
var config = {
  environment: '2',
  appid: '',
  api: {
    sso:{
      0: 'http://h5.dev.weidian.com:5002/mock',
      1: 'https://sso-daily.test.weidian.com',
      2: 'https://sso-pre.test.weidian.com',
      3: 'https://sso.weidian.com'
    },
    thor:{
      0: 'http://h5.dev.weidian.com:5002/mock',
      1: 'https://thor.daily.weidian.com',
      2: 'https://thor.pre.weidian.com',
      3: 'https://thor.weidian.com'
    }
  }
};


var getApiHost = function(name){
  return config.api[name] && config.api[name][config.environment];
}

var share = {
  /**
   * boolean 
   */
  setShareInfo: function (opts) {
    var app = getApp();
    app.globalData.shareWfr = opts.wfr || '';
    app.globalData.shareBusiness = opts.business || '';

  },

  /**
   * boolean 
   */
  shareWithTicket:function(opts){
    wx.showShareMenu({
      withShareTicket: opts.withShareTicket || false,
      success: function (rt) {
      }
    })
  },

  checkShareTicket: function (data) {
    var app = getApp();
    var shareTicket = app.globalData.shareTicket;
    console.log('SHARETICKET:' + shareTicket);
    if(!shareTicket){
      return false;
    }
    var that = this;
    share.reportData = data;
    wx.checkSession({
      success: function () {
        share.wxLogin(shareTicket);
      },
      fail: function () {
        share.wxLogin(shareTicket);
      }
    })
  },
  //微信登录  
  wxLogin: function (shareTicket) {
    var that = this
    wx.login({
      success: function (r) {
        if (r.code) {
          share.getShareInfo(shareTicket,r.code);
        }
        wx.getUserInfo({
          success: function (res) {
            
          }
        })
      }
    })
  },
  //获取用户微信信息
  wxGetUserInfo: function(opts){
    var success = opts && opts.success,
        fail = opts && opts.fail;
    wx.getSetting({
      success:function(){
        wx.getUserInfo({
          success: function (res) {
            success && success(res.rawData)
          },
          fail: function () {
            success && success({})
          }
        })
      },
      fail:function(){
        success && success({})
      }
    })
  },
  //获取群信息  
  getShareInfo: function (shareTicket,code) {
    var that = this;
    wx.getShareInfo({
      shareTicket: shareTicket,
      success: function (res) {
        var data = {
          iv: res.iv,
          encryptedData: res.encryptedData,
          code: code,
          appid: config.appid
        }
        var url = getApiHost('sso') + '/user/oauth/lite/decrypt';

        wx.request({
          url: url,
          data: data,
          success: function (re) {
            var msg = '';
            if (re.data.status.status_code == 0) {
              var reportData = {
                groupId: re.data.result && re.data.result.decryptData && re.data.result.decryptData.openGId
              }
              console.log('REPORTGROUPMEMBER:DECRYPT');
              share.reportGroupMemberInfo(reportData);
            }
            else {
              that.globalData.session = null;
              msg = re.data.status.status_reason;
            }

          },
          fail: function (error) {
          }
        })
      },
      fail:function(err){
        //console.log(err)
      }
    });
  },
  reportGroupMemberInfo: function (data) {
    share.wxGetUserInfo({
      success:function(rawData){
        var url = getApiHost('thor') + '/wdcrm/sellerwxgroupmember.reportGroupMemberInfo/1.0?v=1.0&timestamp=' + new Date().getTime();
        data = core.extend(data, share.reportData);
        data.rawData = rawData;
        wx.request({
          url: url,
          data: {
            param: data
          },
          success: function (re) {
            var msg = '';
            if (re.data.status.code == 0) {
              console.log('REPORTGROUPMEMBER:true');
              var app = getApp();
              app.globalData.shareTicket = null;
            }
          },
          fail: function (error) {
            //console.log(error)
          }
        })
      }
    })
    
  }
}

module.exports = {
  setShareInfo: share.setShareInfo,
  shareWithTicket: share.shareWithTicket,
  checkShareTicket: share.checkShareTicket
};