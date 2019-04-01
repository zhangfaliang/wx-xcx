var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    login = require('../../index'),
    LOGINBYPW_URL = util.getApi('/passport/login.mobile/1.0', config.apiType.thor),
    LOGINBYVC_URL = util.getApi('/passport/login.vcode/1.0', config.apiType.thor);

var wdlogin = {

    //微店密码登录
    //所需字段
    //phone ： 用户手机号
    //countryCode ：用户国家码
    //buyerPassword:用户密码以买家密码加密方式加密
    //sellerPassword: 用户密码以卖家密码加密方式加密。
    loginByPassword: function(opts) {
        var self = this,
            data = opts.data,
            success = opts.success,
            fail = opts.fail;

        login.request({
            url: LOGINBYPW_URL,
            withToken: false,
            method:'POST',
            data: {
                param: data
            },
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
    
    //微店验证码登录
    //所需字段
    //phone ： 用户手机号
    //countryCode ：用户国家码
    //vcode:验证码
    loginByVcode: function(opts) {
        var self = this,
            data = opts.data,
            success = opts.success,
            fail = opts.fail;

        login.request({
            url: LOGINBYVC_URL,
            withToken: false,
            method:'POST',
            data: {
                param: data
            },
            success: function(rs) {
                if (rs && rs.data && rs.data.status && rs.data.status.code == 0) {
                    success && success.call(this, rs);
                } else {
                    fail && fail.call(this, rs);
                }
            },
            fail: fail
        });
    }
};

module.exports = wdlogin;
