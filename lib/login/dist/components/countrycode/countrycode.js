var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    login = require('../../index'),
    popup = require('../../common/popup/index');

var COUNTRYCODES_URL = util.getApi('/commonserver/login.getCountryCode/1.0');

module.exports = {

    show: function(instance) {
        var self = this;

        util.showLoading();
        this.getCountryCodes({
            success: function(rs) {
                var countryCodes = rs.data && rs.data.result && self.getFormattedCountryCodes(rs.data.result)

                countryCodes && instance.setData({
                    'components.countrycode.countryCodeKeys': Object.keys(countryCodes),
                    'components.countrycode.countryCodes': countryCodes
                });

                // 显示弹窗
                popup.show(instance);

                util.hideLoading();
            },
            fail: function(rs) {
                util.hideLoading();

                util.failHandler(rs,instance);
            }
        });
    },

    hide:function(instance){
        popup.hide(instance);
    },

    //格式化成模板显示数据
    getFormattedCountryCodes: function(data) {
        var formatedData = {};

        data && data.forEach(function(value) {
            var d = formatedData[value.i];
            d ? d.push(value) : formatedData[value.i] = [value];
        });
        return formatedData;
    },

    getCountryCodes: function(opts) {
        var self = this,
            success = opts.success,
            fail = opts.fail;

        login.request({
            url: COUNTRYCODES_URL,
            success: function(rs) {
                if (rs && rs.data && rs.data.status && rs.data.status.code == 0) {
                    success && success.call(this, rs);
                } else {
                    fail && fail.call(this, rs);
                }
            },
            fail: fail
        });
    },

    select: function(event, instance) {
        var dataset = event.currentTarget.dataset;

        instance.setData({
            countryCode: dataset.countrycode || config.chinaCode,
            countryName: dataset.countryname || config.chinaName
        });

        this.hide(instance)
    }
};
