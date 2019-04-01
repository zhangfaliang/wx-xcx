var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    login = require('../../index.js'),
    spider = util.spider;

var SPIDER_A = '',
    SPIDER_B = 'login-index';

var TOAST_BUTTON_COLOR = '#FE5A4C';

Page({
    data: {
    },
    login: {},
    onLoad: function (opts) {
        // 保持redirect参数
        opts && opts.redirect && (this.redirect = decodeURIComponent(opts.redirect))

        this.login = {
            success: false,
            context: null,
            args: [{
                errorCode: 4,
                errorMessage: 'Do not login'
            }]
        }
    },
    onShow: function () {
        spider.trackPageview(SPIDER_A, SPIDER_B)
    },
    onUnload: function () {
        if (!this.login.success) {
            spider && spider.trackAction({
                actionName: 'unloadFail'
            });
            login.flushQueue({
                id: 'login',
                type: 'fail',
                args: this.login.args
            });
        } else {
            spider && spider.trackAction({
                actionName: 'unloadSuccess'
            });
            login.flushQueue({
                id: 'login',
                type: 'success',
                context: this.login.context,
                args: this.login.args
            });
        }

    },
    bindGetUserInfo: function (e) {
        var self = this;
        spider.trackAction(e);
        function wxLogin() {
            wx.showLoading({
                title: '加载中'
            });

            login.silentLogin({
                loginPage: self,
                success: function () {
                    spider && spider.trackAction({
                        actionName: 'authSuccess'
                    });
                    self.login = {
                        success: true,
                        context: this,
                        args: arguments
                    }

                    wx.hideLoading();

                    if (self.redirect) {
                        wx.redirectTo({
                            url: self.redirect
                        });
                    } else {
                        wx.navigateBack();
                    }
                },
                fail: function (res) {
                    spider && spider.trackAction({
                        actionName: 'authFail',
                        actionArgs: {
                            message:res.status.description || ''
                        }
                    });
                    wx.hideLoading();
                    
                    util.toast(res.status.description || config.i18n.serverErrorMessage, self);
                }
            })
        }

        if (e.detail && e.detail.userInfo) {
            wxLogin();
        } else {
            spider && spider.trackAction({
                actionName: 'authFail',
                actionArgs: {
                    message:config.i18n.authConfirm
                }
            });
            util.toast(config.i18n.authConfirm, self);
        }
    }
})