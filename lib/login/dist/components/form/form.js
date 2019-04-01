/**
 * 登录form组件
 * 密码登录&验证码登录
 */
var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    webviewUrl = "/lib/webview/dist/pages/index/index", //webview内嵌h5容器
    spider = util.spider,
    validate = require('../../common/validate/validate'),
    phonecode = require('../phonecode/phonecode'),
    countrycode = require('../countrycode/countrycode'),
    wdlogin = require('../wdlogin/wdlogin'),
    login = require('../../index');

const MAX_TIME = 60,
    SENDMSGCODE_BUTTON_TEXT = '获取验证码',
    DISABLED_CLASS = 'disabled',
    ENABLED_CLASS = 'btn-blue';

Component({
  properties: {
    type: {
        type: String,
        value: config.loginDefaultType,//type : default(密码)/code(验证码)
        observer: function(newVal, oldVal,){
            // util.toast(newVal,this);
        }
    },
    redirect: {
        type: String,
        value: '',
        observer: function(newVal, oldVal,){
            // util.toast(newVal,this);
        }
    },
    redirectType: {
        type: String,
        value: '',
        observer: function(newVal, oldVal,){
            // util.toast(newVal,this);
        }
    },
  },
  data: {
        phone: '',
        vcode: '',
        countryCode: config.chinaCode,
        countryName: config.chinaName,
        sendMsgCodeFlag: false,
        sendMsgCodeText: SENDMSGCODE_BUTTON_TEXT,
        sendMsgCodeClass: ENABLED_CLASS
    },
  methods: {
    // 打开国家码弹窗
    selectCountryCode: function(e) {
        spider.trackAction(e);
        countrycode.show(this)
        },

        // 隐藏popup
        hidePopup:function(e){
            spider.trackAction(e);
            countrycode.hide(this);
        },

        // 选择国家码
        choseCountrycode:function(e){
            spider.trackAction(e);
            countrycode.select(e,this);
        },

        validate: function(data) {
            var v;
            //验证电话
            v = validate.telphone(data.phone, data.countryCode);
            if (v.code) {
                return v;
            }
            
            v = validate.code(data.vcode)
            if (v.code) {
                return v;
            }

            return {
                code: 0
            }
        },

        getFormattedData: function(data) {

            data.phone = util.trim(data.phone);

            data.countryCode = util.trim(data.countryCode);

            return data;
        },

        // 表单标志位
        flag: false,

        next: function(opts) {
            var self = this,
                data = opts.data,
                tokenInfo;

            if (self.flag) return;

            self.flag = true;

            tokenInfo = login.getTokenInfo();

            if(this.data.type === config.loginDefaultType){
                this.loginByPassword({
                    phone: opts.data.phone,
                    countryCode: opts.data.countryCode,
                    buyerPassword: opts.data.password,
                    sellerPassword: opts.data.password,
                    // session: tokenInfo.session
                })
            }else if(this.data.type === config.loginCodeType){
                this.loginByVcode({
                    phone: opts.data.phone,
                    countryCode: opts.data.countryCode,
                    vcode: opts.data.vcode
                    // session: tokenInfo.session
                })
            }

            
        },
        loginByVcode: function (opts) {
            var self = this;

            util.showLoading();
            // 密码登录
            wdlogin.loginByVcode({
                data: opts,
                success: function (rs) {
                    util.hideLoading();
                    self.flag = false;
                    login.refreshTokenInfo(rs.data.result);
                    login.option('callbacks').wdLogin && login.option('callbacks').wdLogin.success(rs);
                    setTimeout(function () {
                        spider.transferAction({
                            actionName: 'loginByVcodeSuccess'
                        });
                        self.redirectTo();
                    }, config.delay);
                },
                fail: function (rs) {
                    util.hideLoading();
                    self.flag = false;
                    util.failHandler(rs, self);
                }
            });
        },
        loginByPassword: function (opts) {
            var self = this;

            util.showLoading();
         
            wdlogin.loginByPassword({
                data: opts,
                success: function (rs) {
                    util.hideLoading();
                    self.flag = false;
                    login.refreshTokenInfo(rs.data.result);
                    login.option('callbacks').wdLogin && login.option('callbacks').wdLogin.success(rs);
                    setTimeout(function () {
                        spider.transferAction({
                            actionName: 'loginByPasswordSuccess'
                        });
                        self.redirectTo();
                    }, config.delay);
                },
                fail: function (rs) {
                    util.hideLoading();
                    self.flag = false;
                    util.failHandler(rs, self);
                }
            });
        },
        redirectTo: function () {
            if (this.data.redirect) {
                var url = this.data.redirect;
                if(this.data.redirectType == config.redirectTypeH5){
                    url =  webviewUrl + "?url=" + encodeURIComponent(this.data.redirect)
                }
                wx.redirectTo({
                    url: url
                });
            } else {
                wx.navigateBack();
            }
        },
        onInputPhone: function(e) {
            var phone = e.detail.value;
            
            if(this.data.countryCode === config.chinaCode){
                //中国地区限制11位手机号
                if(phone.length > 11){
                    phone = phone.slice(0,11)
                }
            }else{
                //其他地区限制30位手机号
                if(phone.length > 30){
                    phone = phone.slice(0,30)
                }
            }
            this.setData({
                phone: phone
            })
        },
        onInputCode: function(e) {
            var vcode = e.detail.value;
            this.setData({
                vcode: vcode
            })
        },
        sendMsgCode: function (e) {
            spider.trackAction(e);

            var self = this,
                data = self.data,
                // v = this.validate({
                //     phone: data.phone,
                //     countrycode: data.countryCode
                // })
                v = validate.telphone(data.phone, data.countryCode)

            if (v.code) {
                util.toast(v.message,this);
                return;
            }
            if (self.sendMsgCodeFlag || self.timer) return;
            self.sendMsgCodeFlag = true;


            // 发送验证码
            phonecode.sendMsgCode({
                data: {
                    phone: data.phone,
                    countryCode: data.countryCode,
                    goal: config.bindCodeGoal
                },
                type: 'thor',
                success: function () {
                    self.start(MAX_TIME);

                    self.sendMsgCodeFlag = false;
                    util.toast(config.i18n.messageCodeSuccess, self);
                },
                fail: function (rs) {
                    self.sendMsgCodeFlag = false;
                    util.failHandler(rs, self);
                }
            });
        },
        start: function (max) {
            var self = this,
                time = max;
    
            self.setData({
                sendMsgCodeText: self.getCountDownText(time),
                sendMsgCodeClass: DISABLED_CLASS
            });
    
            self.timer = setInterval(function () {
                self.setData({
                    sendMsgCodeText: self.getCountDownText(time--)
                });
                if (time < 0) {
                    self.end();
                }
            }, 1000);
        },
        end: function () {
            clearInterval(this.timer);
            this.timer = null;
            this.setData({
                sendMsgCodeText: SENDMSGCODE_BUTTON_TEXT,
                sendMsgCodeClass: ENABLED_CLASS
            });
        },
        getCountDownText: function (time) {
            return '' + time + 's';
        },
        submit: function(event) {
            var formData = event && this.getFormattedData(event.detail.value),
                v = this.validate(formData),
                url;

            spider.trackAction({
                actionName:'submit'
            });

            if (v.code) {
                util.toast(v.message,this);
                return;
            }

            this.next({
                data: formData
            });
        }
    }
})
