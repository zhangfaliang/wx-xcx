"use strict";

/**
 * 如果业务方在调用上存在错误，spider通过两种方式进行通知
 * 在必经流程中，使用 throw new Error() 抛出异常；
 * 在测试可能遗漏的场景下，使用 console API 与 return 特殊值的方式取消本次行为与提示。
 */
var core = require("./core.js");
var util = require("./util.js");
var stack = require("./stack.js");
var consoleSafty = util.consoleSafty;

var VERSION = "1.0.0";

var constants = {
    "BUY_NOW": "_buyNow",
    "ADD_TO_CART": "_addToCart",
    "ADD_TO_FAVORITES": "_addToFavorites",
    "SHARE": "_share",
    "LIKE": "_like",
    "EXPOSE": "_expose",
    "DEPRECATED": "_deprecated"
};

var constantArr = Object.keys(constants).map(function(key) {
    return constants[key];
});

var cur_spm_array = [undefined, undefined, undefined, undefined];
var cur_page_args = {};
var cur_action_name = "";
var cur_action_args = {};

cur_spm_array.toString = function() {
    return this.join(".");
};

function trackPageview(spma, spmb, pageArgs) {
    var pageArgs = _init(arguments);

    var prevInfo = _getPrevInfo();

    var meta = core.getMeta();
    cur_spm_array[0] = meta.spma;
    cur_spm_array[1] = meta.spmb;
    cur_spm_array[2] = "0";
    cur_spm_array[3] = "0";

    cur_page_args = pageArgs;
    cur_page_args.ts = +new Date();
    cur_page_args.scene = meta.scene;

    prevInfo.cur_spm = cur_spm_array.toString();
    prevInfo.cur_page_args = cur_page_args;
    _report("page_view", prevInfo);

    var curPage = stack.getCurPage();
    curPage.trackAction = trackAction;
    curPage.transferAction = transferAction;
}

function trackAction(action, callback) {
    var target = action.currentTarget;
    if (target && target.dataset) {
        action = _extractActionFromComponent(target);
    }

    var success = _updateState(action);
    if(!success) return;
    _report("click", {
        cur_spm: cur_spm_array.toString(),
        cur_page_args: cur_page_args,
        cur_action_name: cur_action_name,
        cur_action_args: cur_action_args,
    }, callback);
}

function transferAction(action, callback) {
    trackAction(action, callback);
    _storageAction();
}

/**
 *
 * @param {Action|Element}  action
 * @returns {boolean}   flag indicates whether it is success
 */
function _updateState(action) {
    if (!_isObjectAndNotNull(action)) return false;
    var spmc = String(action.spmc || "_");
    var spmd = String(action.spmd || "_");
    var actionName = String(action.actionName || "");
    var actionArgs = Object(action.actionArgs || {});

    if (spmd !== "_" && spmd !== parseInt(spmd).toString()) {
        consoleSafty("error", "spmd 元素必须为数字，表示该元素在 spiderCElement 中的位置");
        return false;
    }

    if (!util._isValidSpmValue(spmc)) {
        console.error("spm只允许英文、数字、中划线、下划线组成，" + spmc + "不合法");
        return false;
    }

    if (actionName.indexOf("_") === 0 && constantArr.indexOf(actionName) === -1) {
        consoleSafty("error", "actionName 必须取指定值，请查看 spider.constants");
        return false;
    }

    if (spmc === "_" && spmd === "_" && actionName === "") {
        consoleSafty("error", "spmc, spmd, actionName 不能同时为空");
        return false;
    }

    cur_spm_array[2] = spmc;
    cur_spm_array[3] = spmd;
    cur_action_name = actionName;
    cur_action_args = actionArgs;
    return true;
}

function _extractActionFromComponent(target) {
    var dataset = target.dataset;
    if (!dataset.spider && !dataset.spiderActionName) {
        consoleSafty("error", "请在组件上标记spider信息")
        return;
    }

    return {
        spmc: dataset.spiderC,
        spmd: dataset.spider,
        actionName: dataset.spiderActionName,
        actionArgs: _JSONParseSafty(dataset.spiderActionArgs || {})
    }
}

function _storageAction() {
    var action = {
        cur_spm: cur_spm_array.toString(),
        cur_page_args: cur_page_args,
        cur_action_name: cur_action_name,
        cur_action_args: cur_action_args,
    };

    wx.setStorageSync("spider_prev", _JSONStringifySafty(action));
}

function _getPrevInfo() {
    return _getPrevInfoFromStorage() || _getDefaultInfo();
}

function _getPrevInfoFromStorage() {
    var action = _JSONParseSafty(wx.getStorageSync("spider_prev"));
    wx.removeStorageSync("spider_prev");
    if (!_isEmptyObject(action)) {
        return {
            prev_spm: action.cur_spm,
            prev_page_args: action.cur_page_args,
            prev_action_name: action.cur_action_name,
            prev_action_args: action.cur_action_args,
        };
    } else {
        return null;
    }
}

function _getDefaultInfo() {
    return {
        prev_spm: "",
        prev_page_args: {},
        prev_action_name: "",
        prev_action_args: {},
    }
}

function _traceWfr(pageArgs) {
    var curPage = stack.getCurPage();
    var prevPage = stack.getPrevPage();

    var wfrFromPrev = prevPage && prevPage.wfrToNext;
    if (!pageArgs.wfr && wfrFromPrev){
        pageArgs.wfr = wfrFromPrev;
    } 

    var wfrToNext = pageArgs.wfrToNext;
    if (wfrToNext) {
        curPage.wfrToNext = wfrToNext;
        delete pageArgs.wfrToNext;
    }

    return pageArgs;
}

function _JSONStringifySafty(obj) {
    if (!_isObjectAndNotNull(obj)) return "";
    if (_isEmptyObject(obj)) return "";
    try {
        return JSON.stringify(obj);
    } catch (e) {
        consoleSafty("warn", "非法JSON对象，无法进行 JSON.stringify");
        return "";
    }
}

function _JSONParseSafty(str) {
    if (typeof str !== "string" || str === "") return {};

    try {
        return JSON.parse(str);
    } catch (err) {
        consoleSafty("warn", "非法JSON字符串，无法进行 JSON.parse");
        return {};
    }
}

function _isEmptyObject(obj) {
    console.assert(typeof obj === "object", "必须是一个object");
    if (obj === null) return false;
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}

function _isObjectAndNotNull(obj) {
    if (typeof obj !== "object") return false;
    if (obj === null) return false;
    return true;
}

function _normalizeReportData(data) {
    Object.keys(data).forEach(function(key) {
        if (data[key] === "") {
            data[key] = null;
            return;
        }
        
        if (_isObjectAndNotNull(data[key])) {
            if (_isEmptyObject(data[key])) {
                data[key] = null;
            } else {
                Object.keys(data[key]).forEach(function(secondKey) {
                    var value = data[key][secondKey];
                    if (value === "" || typeof value === "object") {
                        data[key][secondKey] = null;
                    }
                });
            }
        }
    });

    return data;
}

function _init(args) {
    var pageArgs;
    switch (args.length) {
        case 0:
        case 1:
            core.init();
            pageArgs = args[0];
            break;
        case 2:
            core.init(args[0], args[1]);
            break;
        case 3:
            if (typeof args[2] === "object") {
                core.init(args[0], args[1]);
                pageArgs = args[2];
            } else {
                core.init(args[0], args[1], args[2]);
            }
            break;
        case 4:
            core.init(args[0], args[1], args[2]);
            pageArgs = args[3];
            break;
    }
    pageArgs = pageArgs || {};
    return _traceWfr(pageArgs);
}

function _report(subtype, data, callback) {
    core.report("mini_program_spider", subtype, _normalizeReportData(data), callback);
}

module.exports = {
    trackPageview: trackPageview,
    trackAction: trackAction,
    transferAction: transferAction,
    setConfig: core.setConfig,
    stack: stack
};