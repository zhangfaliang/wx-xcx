/**
 * 登录校验
 */
var config = require("../config/config");

var validate = {
    telphone : function(value,countrycode){
        countrycode = !countrycode ? config.chinaCode  : countrycode;
        //如果为空
        if(!value){
            return {
                code:11,
                message:"请填写正确的手机号"
            }
        }

        //如果不是数字
        //不对长度校验，国家不一样，长度不一样
        if (!/^\d+$/.test(value)) {
            return {
                code:12,
                message:"请填写正确的手机号"
            }
        }

        //对国内手机号做校验
        if(countrycode == config.chinaCode){
            if(!/^1\d{10}$/.test(value) || value.length != 11){
                return {
                    code:13,
                    message:"请填写正确的手机号"
                }
            } 
        }

        return {
            code:0
        }
    },

    //老版本密码
    password1: function(value){

        //如果为空
        if(!value){
            return {
                code:51,
                message:"请输入密码"
            }
        }

        return {
            code:0
        }
    },

    /**
     * 如果是版本1.则不关心长度
     * 如果是版本2.则最大16最小6
     */
    password : function(value){
        var min = config.passwordMinLength,
            max = config.passwordMaxLength,
            tips = config.i18n.passwordLengthLimit;

        //如果为空
        if(!value){
            return {
                code:21,
                message:tips
            }
        }

        //如果字符不在区间内
        if (value.length > max || value.length < min ) {
            return {
                code:22,
                message:tips
            }
        }

        return {
            code:0
        }
    },

    //校验验证码
    code : function(value){

        //验证码长度必须为6位数字
        if (!value || value.length != 6 || !/^\d+$/.test(+value)) {
            return {
                code:32,
                message:"请填写6位验证码"
            }
        }
        return {
            code:0
        }
    }
};

module.exports = validate;
