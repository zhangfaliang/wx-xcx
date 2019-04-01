var util = require('../util/index'),
    core = require('../core/index');
var CDN_SIZE = [800, 500, 256, 160],
    FLEX_SIZE = 800;


var helper = {
    //格式化金额，1 --> 1  2.2 --> 2.2
    getFormatedPrice: function (val) {
        var index,
            intPart = '',
            fracPart = '';

        val = util.trim(val);

        if (val == '' || !util.isNumber(val)) {
            return {
                int: intPart,
                frac: fracPart
            };
        }

        index = val.indexOf('.');
        if (index >= 0) {
            intPart = val.substr(0, index);
            fracPart = val.substr(index + 1);
        } else {
            intPart = val;
        }

        return {
            int: intPart,
            frac: fracPart
        }
    },

    // 转换数量显示，小于10000 显示原数量，大于或等于显示 *.*万
    formatQuantity: function (value) {
        var MAX = 10000;

        if (value == null) {
            return '';
        }

        if (value >= MAX) {
            var p = value / MAX;

            if (!util.isPositiveInteger(p)) {
                // 四舍五入
                p = p.toFixed(1);
            }

            return p + '万';
        }

        return value;
    },

    //获取附带图片大小的url
    getImgUrlWithSize: function (imgUrl, w, h) {
        return imgUrl ? core.setQuerystring(imgUrl, {
            w: w,
            h: h,
            cp: 1
        }) : "";
    },
    //获取最合适的尺寸
    getBestSize: function (size) {
        var MAX_SIZE = CDN_SIZE[0],
            MIN_SIZE = CDN_SIZE[CDN_SIZE.length - 1],
            bestSize = 0;
        if (size >= MAX_SIZE) {
            return MAX_SIZE
        }
        if (size <= MIN_SIZE) {
            return MIN_SIZE
        }
        for (var i = 1; i < CDN_SIZE.length; i++) {
            var cur_size = CDN_SIZE[i],
                pre_size = CDN_SIZE[i - 1];
            if (size >= cur_size) {
                size == cur_size ? ( bestSize = cur_size ) : ( bestSize = pre_size)
                break
            }
        }
        return bestSize
    },
    /**
     * @param url 图片地址
     * @param options
     *        size:图片尺寸，以 视觉稿的宽度为准
     *        flex:false 是否自适应 true:w=800&h=800 false: w=size&h=size&cp=1 默认false
     * @returns {string}
     */
    getImageUrlWithBestSize: function (url, options) {
        var params = {};
        var bestSize = this.getBestSize(options.size);
        options.flex ? (params.w = FLEX_SIZE, params.h = FLEX_SIZE ) : (params.w = bestSize, params.h = bestSize, params.cp = 1);
        // 其他参数
        if (options.sd) {
            params.sd = options.sd;
        }
        return url ? core.setQuerystring(url.split('?')[0], params) : "";
    }

}

module.exports = helper;
