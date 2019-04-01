"use strict";
function _post(options) {
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (4 == xmlhttp.readyState) {
            if (200 == xmlhttp.status) {
                var data = xmlhttp.responseText;
                options.success(JSON.parse(data));
            } else {
                options.error && options.error();
            }
        }
    };
    xmlhttp.open("POST", options.url, true);
    xmlhttp.withCredentials = true;
    if (options) {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.setRequestHeader("Accept", "application/json", "text/plain, */*");
    }
    if (!(options.data instanceof FormData)) {
        options.data = _queryStringStringify(options.data);
    }
    xmlhttp.send(options.data);
}

function _isValidSpmValue(str) {
    var reg = /^[a-zA-Z0-9\-\_]+$/;

    if (String(str).match(reg) === null) {
        return false;
    } else {
        return true;
    }
}

var _consoleSafty = function (funcName) {
    var spiderDebug = getApp().spiderDebug || false;

    var args = [].slice.call(arguments, 1);
    spiderDebug && console[funcName].apply(null, args);
}

module.exports = {
    _post: _post,
    _isValidSpmValue: _isValidSpmValue,
    consoleSafty: _consoleSafty
};