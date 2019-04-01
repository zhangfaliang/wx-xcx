var config = require('../../common/config/config'),
    util = require('../../common/util/util'),
    spider = util.spider,
    ROOT = util.getRoot(),
    SPIDER_A = '',
    SPIDER_B = 'login-wd';

Page({
    data: {
        type: config.loginCodeType,
        redirectType: config.redirectTypeWXAPP,
        redirect: '',

    },
    onTabChange: function(e) {
        // util.toast(e.detail,this);
        this.setData({
            type : e.detail
        })
    },
    onLoad: function (opts) {
        var self = this,
            redirect = opts && opts.redirect && (self.redirect = decodeURIComponent(opts.redirect));
        if(redirect){
            this.setData({
                redirect: redirect
            })
        }
    },
    onShow:function(){
        spider.trackPageview(SPIDER_A, SPIDER_B)
    }
})
