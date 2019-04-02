var config = require('../config/index'),
    // login = require('../../lib/login/dist/index'),
    index = require('../index');

var util = {
    // 5层判断
    goTo: function(url) {
        var count = getCurrentPages().length;
        if (count < 4) {
            wx.navigateTo({
                url: url,
            });
        } else {
            wx.redirectTo({
                url: url,
            });
        }
    },
    buttonClicked: function(self) {
        self.setData({
            buttonClicked: false,
        });
        setTimeout(function() {
            self.setData({
                buttonClicked: true,
            });
        }, 2000);
    },
    // decode querystring
    decodeQuerystring: function(query) {
        if (typeof query == 'object') {
            for (var name in query) {
                if (query.hasOwnProperty(name)) {
                    query[name] && (query[name] = decodeURIComponent(query[name]));
                }
            }
        }
        return query;
    },
    showLoading: function() {
        wx.showToast &&
            wx.showToast({
                title: config.i18n.loading,
                icon: 'loading',
                duration: 5000,
            });
    },
    hideLoading: function() {
        wx.hideToast();
    },
    request: function(opts, reqType) {
        var self = this;
        var requestData = {
            request: opts.data || '',
        };
        if (reqType && reqType == 'thor') {
            requestData = {
                param: opts.data || '',
            };
        }
        return login.request({
            url: opts.url,
            method: opts.method || 'POST',
            dataType: opts.dataType || 'json',
            data: requestData,
            withToken: opts.withToken || true, // 默认传递token
            forceLogin: opts.forceLogin,
            complete: opts.complete,
            success: function() {
                var data = arguments && arguments[0] && arguments[0].data;
                self.successHandler.call(this, data, opts);
            },
            fail: function(rs) {
                login.checkUserAuth({
                    success: function() {
                        var data = arguments && arguments[0] && arguments[0].data;
                        self.failHandler.call(this, data, opts);
                    },
                    fail: function() {
                        return opts.authFail && opts.authFail(rs);
                    },
                });
            },
        });
    },
    successHandler: function(data, opts) {
        var code = data && data.status && data.status.code;
        if (code == 0) {
            opts.success && opts.success.call(this, data);
        } else {
            var f = opts.fail && opts.fail.call(this, data) === false;
            if (f) {
                return;
            }
        }
    },
    failHandler: function(data, opts) {
        var f = opts.fail && opts.fail.call(this, data) === false;
    },

    showModal: function(opts) {
        wx.showModal({
            title: opts.message.title || '提示',
            content: opts.message,
            showCancel: opts.showCancel || false,
        });
    },
    /**
     * 获取vap接口
     * @param url
     * @param type
     */
    getVapApi: function(url, type) {
        if (type === 'collect') {
            return util.getVapUrl() + '/' + index.option('appid') + '/' + url;
        } else {
            return util.getVapUrl() + '/' + index.option('appid') + '/' + url;
        }
    },
    getVapUrl: function() {
        return config.api[index.option('environment')];
    },

    getThorUrl: function(url) {
        return config.thor[index.option('environment')] + '/' + url;
    },
    getStrictTarget: function(environment) {
        if (environment == 1) {
            return '?strictTarget=172.19.39.89:20880';
        }
        return '';
    },
    isInArray: function(array, value) {
        if (array && !array.length) {
            return;
        }
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return true;
            }
        }
        return false;
    },
    debounce: function(fn, wait) {
        var timer = null;
        return function() {
            var context = this;
            var args = arguments;
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, wait);
        };
    },
    //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    GetSlideDrection: function(startX, startY, endX, endY) {
        var dy = endY - startY;

        var dx = endX - startX;

        var result = 0;

        //如果滑动距离太短

        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }

        var angle = this.GetSlideAngle(dx, dy);

        if (angle >= -45 && angle < 45) {
            result = 4;
        } else if (angle >= 45 && angle < 135) {
            result = 1;
        } else if (angle >= -135 && angle < -45) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        }

        return result;
    },
    GetSlideAngle: function(dx, dy) {
        return (Math.atan2(dy, dx) * 180) / Math.PI;
    },
};
module.exports = util;
