var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    login = require('../../index');

var BIND_URL = util.getApi('/commonserver/login.getLittleBind/1.0');

var bindcheck = {

    //绑定
    //所需字段
    //phone ： 电话号码
    //countryCode ： 国家与地区
    //session:验证码换取的session
    //token: 登录凭证
    bind: function(opts) {
        var self = this,
            data = opts.data,
            success = opts.success,
            fail = opts.fail;

        login.request({
            url: BIND_URL,
            withToken: true,
            method:'POST',
            data: {
                request: {
                    phone: data.phone,
                    countryCode: data.countryCode,
                    session: data.session,
                    vcode: data.vcode
                }
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

module.exports = bindcheck;
