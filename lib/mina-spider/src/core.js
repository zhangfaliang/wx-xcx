"use strict";
var util = require("./util.js");
var stack = require("./stack.js");
var sha1 = require("./sha1.js");
var consoleSafty = util.consoleSafty;

var PageMeta = {};
var STORAGE_KEY_PREFIX = "spider_";
var ENV = ["daily.","daily.", "pre.", ""];

var scene = null;
var reportUrl = "https://vap.gw.weidian.com/h5/h5collector/collect.miniprogram/1.0";
var config = {
    environment: 3,
};

/**
 * _uuid
 * @param  {String} salt
 * @return {String} 16 hexits string = 64 bits
 */
function _uuid(salt) {
    salt = salt || "";

    var now = new Date();
    var uuid = sha1(
        now.getTime() + Math.random() + salt
    ).slice(0, 16);

    return uuid;
}

function _debug(data) {
    consoleSafty("groupCollapsed","spider-debug");
    consoleSafty("log", JSON.stringify(data, null, 4));
    consoleSafty("log", JSON.stringify(PageMeta, null, 4));
    consoleSafty("groupEnd");
}

function _postData(data, callback) {
    _debug(data);

    wx.request({
        url: reportUrl,
        data: {
            log: JSON.stringify({
                meta: PageMeta,
                data: [data]
            })
        },
        success: function (res) {
            consoleSafty("assert", res.data.success === true, "上报失败，请检查数据格式是否正确");
            if (typeof callback === "function") {
                callback();
            }
        }
    })
}

function _getMetaFromPageData() {
    var data = stack.getCurPage().data;
    if (!data.spma || !data.spmb) {
        throw new Error("请在Page实例数据中传入spma、spmb，或在spider.trackPageview接口中传入spma、spmb参数")
    }

    return {
        spma: data.spma,
        spmb: data.spmb,
        bizVersion: data.bizVersion
    }
}

function init(spma, spmb, bizVersion) {
    stack.push();

    if (arguments.length === 0) {
        var meta = _getMetaFromPageData();
        spma = meta.spma;
        spmb = meta.spmb;
        bizVersion = meta.bizVersion;
    }

    if (!util._isValidSpmValue(spma)) {
        throw new Error("spm只允许英文、数字、中划线、下划线组成, " + spma + "不合法");
    }

    if (!util._isValidSpmValue(spmb)) {
        throw new Error("spm只允许英文、数字、中划线、下划线组成, " + spmb + "不合法");
    }

    // 匿名ID取自@龙佳
    var TOKEN_INFO = wx.getStorageSync("TOKEN_INFO") || {};
    var visitorId = TOKEN_INFO.anonymousId || null

    // sessionId 自己生成，基于匿名ID
    var sessionId = _getSessionId(visitorId);

    var visitId = _uuid(visitorId);
    var buyerId = TOKEN_INFO.userId || null;
    var sellerId = TOKEN_INFO.shopId || null;

    PageMeta = {
        document_url: _getCurPageRoute(),
        document_ref: _getPrevPageRoute(),
        visitor_id: visitorId,
        session_id: sessionId,
        visit_id: visitId,
        buyer_id: buyerId,
        seller_id: sellerId,
        spma: spma,
        spmb: spmb,
        biz_version: bizVersion || "0.0.0",
    };
}

function _getSessionId(visitorId) {
    var sessionId = wx.getStorageSync(STORAGE_KEY_PREFIX + "sessionid");
    if (sessionId) sessionId = JSON.parse(sessionId);

    var now = Date.now();
    if (!sessionId || sessionId.expire < now) {
        sessionId = {};
        sessionId.value = _uuid(visitorId);
    }
    sessionId.expire = now +  30 * 60 * 1000;
    wx.setStorageSync(STORAGE_KEY_PREFIX + "sessionid", JSON.stringify(sessionId));

    return sessionId.value;
}

function _getCurPageRoute() {
    var curPage = stack.getCurPage();
    var url = _appendQuerystring(curPage);
    return url
}

function _getPrevPageRoute() {
    var prevPage = stack.getPrevPage();
    if (prevPage) {
        var url = _appendQuerystring(prevPage);
        return url;
    }
    return null;
}

function _appendQuerystring(page) {
    var path = page.route;
    var querystring = _queryStringStringify(page.options);
    if (!querystring) {
        return path;
    }
    return path + "?" + querystring;
}

function _queryStringStringify(query) {
    var arr = [];
    for (var key in query) {
        if (query[key] === "" || query[key] === undefined || query[key] === null) continue;
        arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(query[key]));
    }
    return arr.length === 0 ? "" : arr.join("&");
}

function report(type, subtype, data, callback) {
    if (typeof data !== "object" || data === null) {
        return;
    }

    var meta = PageMeta;
    data.type = type;
    data.subtype = subtype;

    data.uuid = _uuid(meta.visitor_id);
    data.report_time = +new Date();

    _postData(data, callback);
}

function getMeta() {
    return {
        spma: PageMeta.spma,
        spmb: PageMeta.spmb,
        bizVersion: PageMeta.biz_version,
        scene: scene
    };
}

function setConfig(cfg, curScene) {
    for (var key in cfg) {
        config[key] = cfg[key];
    }

    reportUrl = "https://vap.gw." + ENV[cfg.environment] + "weidian.com/h5/h5collector/collect.miniprogram/1.0";
    scene = curScene;
}

module.exports = {
    init: init,
    report: report,
    getMeta: getMeta,
    setConfig: setConfig
};