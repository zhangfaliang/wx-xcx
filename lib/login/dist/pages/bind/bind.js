var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    spider = util.spider,
    core = require('../../common/core/core'),
    validate = require('../../common/validate/validate'),
    phonecode = require('../../components/phonecode/phonecode'),
    countrycode = require('../../components/countrycode/countrycode'),
    login = require('../../index');

var ROOT = util.getRoot();

var SPIDER_A = '',
    SPIDER_B = 'dwnmsvqz';

Page({

    data: {
        countryCode: config.chinaCode,
        countryName: config.chinaName
    },

    onLoad: function (opts) {
        var self = this;

        // 保持redirect参数
        opts && opts.redirect && (self.redirect = decodeURIComponent(opts.redirect))

        // 校验是否登录
        if (!login.isLogin()) {

            util.toast(config.i18n.needLogin, self);
            setTimeout(function () {
                self.redirectTo();
            }, config.delay);
            return;
        }

        // 检验是否绑定
        login.getWdUserInfo({
            success: function (rs) {
                if (rs && rs.result) {
                    var isBind = rs.result.littleBond;
                    if (isBind) {

                        // 如果缓存的绑定信息与查询接口不相同，则强制登录一次
                        var tokenInfo = login.getTokenInfo();
                        if (tokenInfo && tokenInfo.isBind != isBind) {
                            // 等返回上一级后，再登录
                            setTimeout(function () {
                                login.login();
                            }, config.delay * 2);
                        }

                        util.toast(config.i18n.hasBinded, self);
                        setTimeout(function () {
                            self.redirectTo();
                            util.triggerBindSuccess(self);
                        }, config.delay);
                    }
                }
            }
        });
    },

    onShow: function () {
        spider.trackPageview(SPIDER_A, SPIDER_B)
    },

    // 打开国家码弹窗
    selectCountryCode: function (e) {
        spider.trackAction(e);

        countrycode.show(this)
    },

    // 隐藏popup
    hidePopup: function (e) {
        spider.trackAction(e);
        countrycode.hide(this);
    },

    // 选择国家码
    choseCountrycode: function (e) {
        spider.trackAction(e);
        countrycode.select(e, this);
    },

    validate: function (data) {
        var v;
        //验证电话
        v = validate.telphone(data.phone, data.countryCode);
        if (v.code) {
            return v;
        }
        return {
            code: 0
        }
    },

    getFormattedData: function (data) {

        data.phone = util.trim(data.phone);

        data.countryCode = util.trim(data.countryCode);

        return data;
    },

    redirectTo: function () {
        if (this.redirect) {
            wx.redirectTo({
                url: this.redirect
            });
        } else {
            wx.navigateBack();
        }
    },

    navigate: function (data) {
        var params = {
            phone: data.phone,
            countryCode: data.countryCode
        }

        // 如果有重定向URL，则传递参数
        if (this.redirect) {
            params.redirect = this.redirect
        }

        var url = core.setQuerystring('../bindcode/bindcode', params);

        spider.transferAction({
            actionName: 'sendMsgCodeSuccess'
        });

        wx.redirectTo({
            url: url
        });
    },

    // 表单标志位
    flag: false,

    next: function (opts) {
        var self = this,
            data = opts.data;

        if (self.flag) return;

        self.flag = true;

        // 发送验证码
        phonecode.sendMsgCode({
            data: {
                phone: data.phone,
                countryCode: data.countryCode,
                goal: config.bindCodeGoal
            },
            success: function () {
                self.flag = false;

                util.toast(config.i18n.messageCodeSuccess, self);
                setTimeout(function () {
                    self.navigate(data);
                }, config.delay);
            },
            fail: function (rs) {
                self.flag = false;

                util.failHandler(rs, self);
            }
        });
    },

    submit: function (event) {
        var formData = event && this.getFormattedData(event.detail.value),
            v = this.validate(formData),
            url;

        spider.trackAction({
            actionName: 'submit'
        });

        if (v.code) {
            util.toast(v.message, this);
            return;
        }

        this.next({
            data: formData
        });
    }
})
