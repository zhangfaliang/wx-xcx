var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    spider = util.spider,
    validate = require('../../common/validate/validate'),
    login = require('../../index'),
    phonecode = require('../../components/phonecode/phonecode'),
    bind = require('../../components/bind/bind');

var MAX_TIME = 60,
    SENDMSGCODE_BUTTON_TEXT = '重新发送',
    DISABLED_CLASS = 'disabled',
    ENABLED_CLASS = 'btn-blue'

var SPIDER_A = '',
    SPIDER_B = 'be4t1cds';

Page({
    data: {
        sendMsgCodeText: SENDMSGCODE_BUTTON_TEXT,
        sendMsgCodeClass: ENABLED_CLASS
    },

    onLoad: function (query) {

        // 保持redirect参数
        query && query.redirect && (this.redirect = decodeURIComponent(query.redirect))

        this.setData({
            countryCode: query.countryCode || config.chinaCode,
            phone: query.phone
        });

        this.start(MAX_TIME);
    },

    onUnload: function () {
        this.bindSuccess && util.triggerBindSuccess(this);
    },
    onShow: function () {
        spider.trackPageview(SPIDER_A, SPIDER_B)
    },

    getCountDownText: function (time) {
        return '重新发送（' + time + 's)';
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

    validate: function (data) {
        var v;

        //验证验证码
        v = validate.code(data.vcode);
        if (v.code) {
            return v;
        }

        return {
            code: 0
        }
    },

    getFormattedData: function (data) {

        data.vcode = util.trim(data.vcode);

        return data;
    },

    sendMsgCodeFlag: false,
    sendMsgCode: function (e) {
        spider.trackAction(e);

        var self = this,
            data = self.data;

        if (self.sendMsgCodeFlag || self.timer) return;
        self.sendMsgCodeFlag = true;

        // 发送验证码
        phonecode.sendMsgCode({
            data: {
                phone: data.phone,
                countryCode: data.countryCode,
                goal: config.bindCodeGoal
            },
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
    redirectTo: function () {
        // 如果有重定向URL，则重定向到指定URL
        if (this.redirect) {
            wx.redirectTo({
                url: this.redirect
            });
        } else {
            wx.navigateBack();
        }
    },
    bindSuccess: false,
    bindFlag: false,
    bind: function (opts) {
        var self = this,
            data = opts.data;

        if (self.bindFlag) return;
        self.bindFlag = true;

        util.showLoading();

        // 绑定
        bind.bind({
            data: data,
            success: function (rs) {
                util.hideLoading();

                self.bindFlag = false;
                login.refreshTokenInfo(rs.data.result);

                util.toast(config.i18n.bindSuccess, self);
                setTimeout(function () {

                    spider.transferAction({
                        actionName: 'bindSuccess'
                    });

                    self.redirectTo();
                    self.bindSuccess = true;

                }, config.delay);

            },
            fail: function (rs) {
                util.hideLoading();

                self.bindFlag = false;
                util.failHandler(rs, self);
            }
        });
    },

    submit: function (event) {
        spider.trackAction({
            actionName: 'submit'
        });

        var formData = event && this.getFormattedData(event.detail.value),
            v = this.validate(formData),
            tokenInfo,
            url;

        if (v.code) {
            util.toast(v.message, this);
            return;
        }



        tokenInfo = login.getTokenInfo();
        //if (tokenInfo && tokenInfo.session) {
        this.bind({
            data: {
                phone: formData.phone,
                countryCode: formData.countryCode,
                vcode: formData.vcode,
                session: tokenInfo.session
            }
        });
        // } else {
        //     // 由于绑定需session字段， 如果storage中没有session字段，则认为已经绑定
        //     util.toast(config.i18n.hasBinded,this);
        // }
    }
})
