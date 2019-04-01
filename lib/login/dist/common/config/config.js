/**
 * 配置文件
 *
 * 0. 提示文案与接口建议就近配置（方便维护与修改）
 */

var config = {
    api: {
        0: 'https://vap.gw.daily.weidian.com',
        1: 'https://vap.gw.daily.weidian.com',
        2: 'https://vap.gw.pre.weidian.com',
        3: 'https://vap.gw.weidian.com'
    },
    thorApi: {
        0: 'https://vap.gw.daily.weidian.com',
        1: 'https://thor.daily.weidian.com',
        2: 'https://thor.pre.weidian.com',
        3: 'https://thor.weidian.com'
    },
    apiType: {
        vap : 'vap',
        thor : 'thor'
    },
    passwordMinLength: 6,
    passwordMaxLength: 16,
    // 中国区号
    chinaCode: 86,
    chinaName: '中国',
    // 密码版本
    passwordVersion: 1,
    delay: 2000,
    handlerDelay:1000,
    // 验证码类型
    bindCodeGoal: 3,
    loginDefaultType: 'default',
    loginCodeType: 'code',
    redirectTypeH5: 'H5',
    redirectTypeWXAPP: 'WXAPP'
};

//全局文案
config.i18n = {
    serverErrorMessage: '系统开小差，请稍候重试',
    passwordLengthLimit: '请输入6-16位密码',
    messageCodeSuccess: '验证码发送成功',
    needLogin: '请先登录小程序',
    bindSuccess:'绑定成功',
    hasBinded:'该微信号已绑定手机号',
    loading: '加载中…',
    authFail:'请先删除小程序后重新进入，使用微信授权登录',
    authConfirm:'拒绝授权将无法体验完整功能，建议打开用户信息授权'
};

//错误状态
config.codes = {
    30000: config.i18n.serverErrorMessage,
    30001: config.i18n.serverErrorMessage,
    30002: config.i18n.serverErrorMessage
};

// 缓存数据Key
config.storageKeys = {

};

config.globalKeys = {
    countryCode: 'LOGIN_COUNTRYCODE'
}

module.exports = config;
