require('../polyfill/index');

var config = require('../config/config'),
    login = require('../../index'),
    toast = require('../toast/index'),
    spider = require('../../../../../lib/mina-spider/src/index');

var util = {
    spider: spider,
    trim: function (str) {
        return str != null ? String.prototype.trim.call(str) : '';
    },
    toast: function (message, instance) {
        toast.show(message, instance);
    },
    showLoading: function () {
        wx.showToast({
            title: config.i18n.loading,
            icon: 'loading',
            duration: 5000
        });
    },

    hideToast: function () {
        wx.hideToast();
    },

    hideLoading: function () {
        wx.hideToast();
    },

    failHandler: function (rs, instance) {
        var description = rs && rs.data && rs.data.status && rs.data.status.description,
            code = rs && rs.data && rs.data.status && rs.data.status.code;

        description = code != undefined && config.codes[code] || description;

        util.hideLoading();

        util.toast(description || config.i18n.serverErrorMessage, instance)

    },
    getApiRoot: function () {
        return config.api[login.option('environment')];
    },
    getThorApiRoot: function () {
        return config.thorApi[login.option('environment')];
    },
    getRoot: function () {
        return login.option('root');
    },
    getApi: function (url, type) {
        var api = util.getApiRoot() + '/' + login.option('appid') + url;
        if(type == config.apiType.thor){
            api  = util.getThorApiRoot() + url;
        }
        return api
    },
    triggerBindSuccess: function (instance) {
        // 执行回调
        var callbacks = login.option('callbacks'),
            success = callbacks && callbacks.bind && callbacks.bind.success;

        success && success();

        // 触发消息
        var pages = getCurrentPages(),
            activePage = pages[pages.length - 1],
            decoupler = activePage && activePage.decoupler;

        decoupler && decoupler.emit('BIND_SUCCESS', {
            activePage: activePage
        });
    }
};

module.exports = util;
