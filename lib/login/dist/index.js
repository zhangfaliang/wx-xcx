var config = require('./common/config/config'),
    core = require('./common/core/core'),
    webviewUrl = "/lib/webview/dist/pages/index/index"; //webview内嵌h5容器

var LOGIN_ERROR_CODES = [2, 120];

var TOKEN_INFO_KEY = 'TOKEN_INFO';

var CONTENT_TYPE = 'application/x-www-form-urlencoded',
    ORIGIN_KEY = 'x-origin',
    ORIGIN_VALUE = 'wechat.weidian.com',
    DEFAULT_WXAPPID = 'wx4b74228baa15489a';

var TOAST_BUTTON_COLOR = '#FE5A4C';

var TOKEN_INFO = {};

var settings = {
    root: '/lib/login/dist',
    environment: '2',
    appid: 'wxbuyer',
    wxappid: '',
    strictTarget: '',
    callbacks: {}
};
// 如果是未替换的变量值，则使用微店买买appid
settings.wxappid = (/^\$\$_/).test(settings.wxappid) ? DEFAULT_WXAPPID : (settings.wxappid || DEFAULT_WXAPPID);

function getApi(url) {
    return config.api[settings.environment] + '/' + settings.appid + url;
}

function noop() { }

function option(key) {
    if (typeof key == 'string') {
        return settings[key];
    } else {
        for (var name in key) {
            settings[name] = key[name];
        }
    }
}

function redirectTo(redirect, redirectType) {
    if (redirect) {
        var url = redirect;
        if(redirectType == config.redirectTypeH5){
            url =  webviewUrl + "?url=" + encodeURIComponent(redirect)
        }
        wx.redirectTo({
            url: url
        });
    } else {
        // wx.navigateBack();
    }
}

function wdLogin(opts) {
    opts && (settings.callbacks.wdLogin = {
        success: opts.success
    });

    var param = '';
    if(opts.redirect){
        param = '?type='+(opts.type || 'WXAPP')+'&redirect='+opts.redirect
    }

    wx.navigateTo({
        url: settings.root + '/pages/login/login' + param
    });
}

function bind(opts) {
    opts && (settings.callbacks.bind = {
        success: opts.success
    });

    wx.navigateTo({
        url: settings.root + '/pages/bind/bind'
    });
}

function gotoLogin() {
    wx.navigateTo({
        url: settings.root + '/pages/index/index'
    });
}

function getTokenInfo() {
    try {
        return wx.getStorageSync(TOKEN_INFO_KEY) || null;
    } catch (e) {
        return null;
    }
}

function logout() {
    try {
        wx.removeStorageSync(TOKEN_INFO_KEY);
    } catch (e) { }
}

// token: 必填
// userId: 必填
// shopId: 选填
// isSetting: 选填
// session: 接口有返回则需要传递
function refreshTokenInfo(userInfo) {
    var _tokenInfo = getTokenInfo(),
        anonymousId = _tokenInfo && _tokenInfo.anonymousId

    // 先清除TOKEN_INFO，避免出现上一次出现shopid，第二次没有，而无法清除问题
    logout();

    if (userInfo && ((userInfo.token && userInfo.userId) || (userInfo.loginToken && userInfo.uid))) {

        var tokenInfo = {
            token: userInfo.token || userInfo.loginToken,
            userId: userInfo.userId || userInfo.uid,
            isBind: userInfo.littleBond,
        }

        // 目前uss和token值是相同的
        tokenInfo.uss = userInfo.uss || userInfo.token || userInfo.loginToken;
        userInfo.session && (tokenInfo.session = userInfo.session);
        (userInfo.shopId || userInfo.sid) && (tokenInfo.shopId = userInfo.shopId || userInfo.sid);

        anonymousId && (tokenInfo.anonymousId = anonymousId);

        try {
            tokenInfo && wx.setStorageSync(TOKEN_INFO_KEY, tokenInfo);
        } catch (e) { }
    }
}

var platform = '';
function getPlatform() {
    if (platform) {
        return platform;
    }
    try {
        var res = wx.getSystemInfoSync();

        platform = res && res.platform || '';
    } catch (e) { }
    return platform;
}

// 获取微信信息
function getWxUserInfo(opts) {
    var fail = opts && opts.fail,
        success = opts && opts.success;

    wx.login({
        success: function (rs) {
            wx.getUserInfo({
                success: function (rs) {
                    // 直接暴露userInfo，其他暂时不提供
                    success && success.call(this, rs.userInfo);
                },
                fail: fail
            });
        },
        fail: fail
    });
}

// 是否拒绝授权
// 微信接口调用失败或者返回上一页统一认为是auth fail
function isDenyAuth(rs) {
    return rs && (rs.errorCode == 3 || rs.errorCode == 4)
}

//是否已授权
function checkUserAuth(opts) {
    var success = opts && opts.success,
        fail = opts && opts.fail;
    wx.getSetting({
        success: function (res) {
            if (res.authSetting['scope.userInfo']) {
                success && success();
            } else {
                fail && fail();
            }
        },
        fail: fail
    })
}

// 触发登录成功消息
function triggerLoginSuccess(opts) {
    // 如果传递了，则表示是在登录页面点击了登录
    var loginPage = opts && opts.loginPage,
        pages = getCurrentPages(),
        // 触发登录的页面，用于与当前页面进行判断，默认为队列最后一页，否则为倒数第二页
        activePage = !loginPage ? pages[pages.length - 1] : pages[pages.length - 2],
        decoupler = activePage && activePage.decoupler;

    decoupler && decoupler.emit('LOGIN_SUCCESS', {
        activePage: activePage
    });
}

// 获取登录context
function getLoginContext() {
    var context = {
        appid: settings.appid,
        wxappid: settings.wxappid,
        platform: getPlatform()
    }

    var _tokenInfo = getTokenInfo(),
        anonymousId = _tokenInfo && _tokenInfo.anonymousId;

    anonymousId && (context.anonymousId = anonymousId);

    return context;
}

// 是否登录
function isLogin() {
    var tokenInfo = getTokenInfo();
    return tokenInfo && tokenInfo.token ? true : false;
}

var pushQueue = function (opts) {
    var success = opts.success || noop,
        fail = opts.fail || noop

    if (!settings.callbacks.login) {
        settings.callbacks.login = {
            success: [success],
            fail: [fail]
        }
    } else {
        settings.callbacks.login.success.push(success)
        settings.callbacks.login.fail.push(fail)
    }
}

var loginDoing = false;
var enableLogin = function () {
    loginDoing = false;
}
var disableLogin = function () {
    loginDoing = true;
}

var flushQueue = function (opts) {
    var id = opts.id,
        type = opts.type,
        context = opts.context,
        args = opts.args

    if (id && type && settings.callbacks[id] && settings.callbacks[id][type]) {
        var cbs = settings.callbacks[id][type]

        for (var i = 0; i < cbs.length; i++) {
            cbs[i].apply(context, args)
        }

        // 如果是执行登录队列，则将登录启用起来
        if (id === 'login') {
            enableLogin();
        }
        settings.callbacks[id] = {
            success: [],
            fail: []
        }
    }
}

// 静默登录
function silentLogin(origin) {
    var opts = core.extend(true, {}, origin),
        success = opts && opts.success,
        fail = opts && opts.fail,
        // 触发登录的页面实例
        loginPage = opts && opts.loginPage,
        apiUrl = '/commonserver/login.getLittleLogin/1.0',
        loginUrl;

    loginUrl = getApi(apiUrl);

    // 获取到登录code
    wx.login({
        success: function (rs1) {
            var code = rs1.code;
            if (code) {
                // 获取微信消息
                wx.getUserInfo({
                    withCredentials: true,
                    success: function (rs2) {
                        var header = {}
                        header[ORIGIN_KEY] = ORIGIN_VALUE;

                        if (rs2.rawData) {
                            // 换取token
                            wx.request({
                                method: 'POST',
                                header: header,
                                url: loginUrl,
                                data: {
                                    request: {
                                        wxLittleCode: code,
                                        rawData: rs2.rawData,
                                        signature: rs2.signature,
                                        encryptedData: rs2.encryptedData,
                                        iv: rs2.iv
                                    },
                                    context: getLoginContext()
                                },
                                success: function (rs) {
                                    // 缓存数据
                                    var result;
                                    if (rs && rs.data && rs.data.status && rs.data.status.code == 0) {
                                        result = rs.data.result;
                                        
                                        if (result) {
                                            // 种下TOKEN_INFO
                                            refreshTokenInfo(result);
                                            if(result.realNameUrl){
                                                redirectTo(result.realNameUrl,'H5')
                                                return;
                                            }
                                        }

                                        triggerLoginSuccess({ loginPage: loginPage });

                                        success && success.call(this, rs.data);
                                    } else {
                                        fail && fail.call(this, rs && rs.data);
                                    }
                                },
                                fail: function () {
                                    fail && fail();
                                }
                            });
                        } else {
                            fail && fail();
                        }
                    },
                    fail: function () {
                        fail && fail();
                    }
                });
            } else {
                fail && fail();
            }
        },
        fail: function () {
            fail && fail();
        }
    });
}

// 登录
function login(origin) {
    var opts = core.extend(true, {}, origin),
        success = opts && opts.success,
        fail = opts && opts.fail

    var wxLogin = function () {
        silentLogin({
            success: function () {
                flushQueue({
                    id: 'login',
                    type: 'success',
                    context: this,
                    args: arguments
                });
            },
            fail: function () {
                var args = [].slice(arguments)

                // 微信接口调用失败，则统一标记为login error
                args = args.length ? args : [{
                    errorCode: 3,
                    errorMessage: 'Login auth fail'
                }]

                flushQueue({
                    id: 'login',
                    type: 'fail',
                    context: this,
                    args: args
                });
            }
        })
    }

    // 将回调插入队列中
    pushQueue({
        success: success,
        fail: fail
    })

    // 如果正在登录，则不在进行登录
    if (!loginDoing) {
        // 先进行权限校验，允许则直接登录，否则跳转到新页面
        checkUserAuth({
            success: function () {
                disableLogin();
                wxLogin(opts);
            },
            fail: function () {
                disableLogin();
                gotoLogin();
            }
        });
    }
}


function extendData(opts, context) {

    if (String(opts.data) === '[object Object]') {
        opts.data.context = core.extend(true, context, opts.data.context || {});
    } else {
        opts.data = {
            context: context
        };
    }
}

var count = 0;
// 代理request
function request(origin) {
    var opts = core.extend(true, {}, origin),
        success = opts.success,
        fail = opts.fail,
        tokenInfo;

    if (String(opts.header) !== '[object Object]') {
        opts.header = {};
    }
    opts.header[ORIGIN_KEY] = ORIGIN_VALUE;
    
    // 在context中增加wxappid
    extendData(opts, {
        wxappid: settings.wxappid
    });
    // 是否需要登录凭证
    if (opts.withToken) {
        tokenInfo = getTokenInfo();

        // 在context中增加 anonymousId
        if (tokenInfo && tokenInfo.anonymousId) {
            extendData(opts, {
                anonymousId: tokenInfo.anonymousId
            });
        }

        // 如果已登录
        if (isLogin()) {
            var context = {
                token: tokenInfo.token,
                userID: tokenInfo.userId,
                appid: settings.appid
            };

            // 增加shopId
            tokenInfo.shopId && (context.wduserID = tokenInfo.shopId);

            extendData(opts, context);

            // 如果需要强制登录，则配置登录
            if (opts.forceLogin) {
                opts.success = function (rs) {
                    var that = this,
                        args = arguments,
                        status;

                    if (rs && rs.data && rs.data.status) {
                        status = rs.data.status;

                        // 如果登录校验失败，则会重新进行一次登录
                        if (LOGIN_ERROR_CODES.indexOf(status.code) !== -1) {
                            if (count > 0) {
                                count = 0;
                                return fail && fail.apply(that, args);
                                return;
                            }

                            count++;
                            login({
                                success: function () {
                                    request(origin);
                                },
                                fail: function () {
                                    count = 0;
                                    return fail && fail.apply(that, args);
                                }
                            });
                            return;
                        }
                    }

                    count = 0;
                    return success && success.apply(that, args);
                }

                opts.fail = function () {
                    count = 0;
                    return fail && fail.apply(this, arguments);
                }
            }
        } else if (opts.forceLogin) {
            if (count > 0) {
                count = 0;
                return fail && fail();
                return;
            }

            count++;
            // 如果未登录，则会重新登录一次，登录成功后重新请求一次
            login({
                success: function () {
                    request(origin);
                },
                fail: function () {
                    count = 0;
                    return fail && fail.apply(this, arguments);
                }
            });
            return;
        }
    }

    if(opts.method === 'POST'){
        opts.header['content-type'] = CONTENT_TYPE;
        opts.data = core.json2Form(opts.data);
    }
    return wx.request(opts);
}

// 获取用户信息
function getWdUserInfo(opts) {
    var success = opts && opts.success,
        fail = opts && opts.fail,
        getInfoUrl,
        apiUrl = '/commonserver/login.getLittleUserInfo/1.0';

    getInfoUrl = getApi(apiUrl);

    request({
        method: 'POST',
        url: getInfoUrl,
        withToken: true,
        forceLogin: true,
        data: {
            context: {
                platform: getPlatform()
            }
        },
        success: function (rs) {
            if (rs && rs.data && rs.data.status && rs.data.status.code == 0 && rs.data.result) {
                success && success.call(this, rs.data);
            } else {
                fail && fail.call(this, rs && rs.data);
            }
        },
        fail: fail
    });
}

// 获取绑定信息
function getDemand(opts) {
    var success = opts && opts.success,
        fail = opts && opts.fail,
        getInfoUrl,
        apiUrl = '/commonserver/login.getBindDemand/1.0';

    getInfoUrl = getApi(apiUrl);

    request({
        method: 'POST',
        url: getInfoUrl,
        withToken: true,
        forceLogin: true,
        data: {
            context: {
                platform: getPlatform(),
            },
            request: {
                redirect: true,
                bind: 1
            }
        },
        success: function (rs) {
            if (rs && rs.data && rs.data.status && rs.data.status.code == 0 && rs.data.result) {
                success && success.call(this, rs.data);
            } else {
                fail && fail.call(this, rs && rs.data);
            }
        },
        fail: fail
    });
}

// 是否绑定
function isBind(opts) {
    var success = opts && opts.success,
        fail = opts && opts.fail;

    // var tokenInfo = getTokenInfo();
    // if (tokenInfo) {
    //     success && success(tokenInfo.isBind ? true : tokenInfo.shopId ? true : false);
    // } else {
    //     success && success(false);
    // }

    getDemand({
        success: function(rs) {
            if (rs && rs.result) {
                success && success(rs.result === 'true');
            } else {
                fail && fail.apply(this, arguments);
            }
        },
        fail: fail
    });
}

// 强制绑定
function forceBind(opts) {
    var success = opts && opts.success,
        fail = opts && opts.fail;

    function checkBind(isBind) {
        // 如果已经绑定
        if (isBind) {
            success && success();
        } else {
            // 未绑定，跳转到绑定页面
            bind({
                success: function () {
                    // 由于绑定成功后，页面会回退到当前页，这时如果立马跳转，会出现无法跳转问题。
                    // 绑定完成以后，执行成功回调
                    success && success();
                },
                fail: fail
            });
        }
    }

    function bindHandler() {
        isBind({
            success: function (isBind) {
                checkBind(isBind)
            },
            fail: fail
        });
    }

    // 如果未登录
    if (!isLogin()) {
        login({
            success: function (rs) {
                if (rs && rs.result) {
                    // 由于登录现在是新页面，先后退再跳到绑定页面
                    //setTimeout(function () {
                    checkBind(rs.result.littleBond);
                    //}, 1500)
                } else {
                    fail && fail.apply(this, arguments);
                }
            },
            fail: fail
        });
    } else {
        bindHandler();
    }
}

// 设置匿名ID
function setAnonymousId(options) {
    var anonymousIdUrl = '/commonserver/login.getLittleAnonymousId/1.0',
        _tokenInfo = getTokenInfo(),
        success = options && options.success,
        anonymousId = _tokenInfo && _tokenInfo.anonymousId;

    // 如果没有匿名ID，则生成匿名ID，不做登录判断
    if (!anonymousId) {
        request({
            url: getApi(anonymousIdUrl),
            success: function (rs) {
                var result = rs && rs.data && rs.data.result;

                anonymousId = result && result.anonymousId;

                if (anonymousId) {
                    try {
                        // 合并原有缓存的数据
                        var tokenInfo = core.extend(_tokenInfo || {}, {
                            anonymousId: anonymousId
                        })

                        wx.setStorageSync(TOKEN_INFO_KEY, tokenInfo);
                        success(true)
                    } catch (e) { }
                }
            }
        });
    } else {
        success(true)
    }
}
// setAnonymousId();

module.exports = {
    option: option,
    isLogin: isLogin,
    isBind: isBind,
    isDenyAuth: isDenyAuth,
    checkUserAuth: checkUserAuth,
    flushQueue: flushQueue,
    forceBind: forceBind,
    login: login,
    wdLogin: wdLogin,
    silentLogin: silentLogin,
    logout: logout,
    bind: bind,
    request: request,
    refreshTokenInfo: refreshTokenInfo,
    getTokenInfo: getTokenInfo,
    getWxUserInfo: getWxUserInfo,
    getWdUserInfo: getWdUserInfo,
    setAnonymousId: setAnonymousId
};