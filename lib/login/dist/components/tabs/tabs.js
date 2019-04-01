/**
 * Tab组件
 * 登录切换手机号登录&验证码登录
 */

Component({
    properties: {
    },
    data: {
        tabs: 'default'     // tabs - default(全部)/point(积分)/shop(店铺)
    },
    methods: {
        onTap: function (e) {
            let curr = e.currentTarget.dataset.tabs;

            this.setData({
                tabs: curr
            });

            this.triggerEvent('tabchange', curr)
            // this.emit('tabs_change', curr);
        }
    }
})
