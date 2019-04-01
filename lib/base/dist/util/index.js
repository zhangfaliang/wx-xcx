var util = {
    trim: function(str) {
        return str != null ? String.prototype.trim.call(str) : '';
    },

     // 验证数字
    isNumber: function(value) {
        return !isNaN(Number(value));
    },

    isPositiveInteger: function(value) {
        return new RegExp(/^[1-9]\d*$/).test(value);
    }
}


module.exports = util
