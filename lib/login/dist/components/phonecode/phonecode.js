var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    login = require('../../index');

var SEND_PHONECODE_URL = util.getApi('/commonserver/login.getmsgvcode/1.0'),
    SEND_PHONECODE_URL_THOR = util.getApi('/passport/get.vcode/1.0',config.apiType.thor),
    TYPE_VAP = 'vap',
    TYPE_THOR = 'thor'

var phonecode = {

    //发送验证码
    //所需字段
    //phone ： 电话号码
    //countryCode ： 国家与地区
    //goal：验证码目的
    sendMsgCode: function(opts) {
        var self = this,
            data = opts.data,
            type = opts.type,
            success = opts.success,
            fail = opts.fail,
            url = SEND_PHONECODE_URL,
            content = {
                phone: data.phone,
                countryCode: data.countryCode,
                goal: data.goal,
                action: 'thirdparty_bind'
            },
            param = {};

        if(type === TYPE_THOR){
            url = SEND_PHONECODE_URL_THOR;
            param.param = content;
        }else{
            param.request = content;
        }

        login.request({
            url: url,
            data: param,
            // data: {
            //     request: {
            //         phone: data.phone,
            //         countryCode: data.countryCode,
            //         goal: data.goal
            //     }
            // },
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

module.exports = phonecode;
