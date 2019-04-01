var DELAY = 300,
    ANIMATE_CLASS_NAME = 'slide',
    MODAL_ANIMATE_CLASS_NAME = 'fadein'

module.exports = {
    data:{
        ui: {
            show:false,
            className: ''
        }
    },
    hide: function(instance) {
        var self = this

        instance.setData({
            'components.popup.ui.animateClassName': '',
            'components.popup.ui.modalAnimateClassName':''
        })

        setTimeout(function(){
            instance.setData({
                'components.popup.ui': {
                    show: false
                }
            })
        },DELAY)

        return this
    },

    show: function(instance) {
        var self = this

        instance.setData({
            'components.popup.ui': {
                show: true
            }
        })

        // 连续设置，会出现无动画效果
        setTimeout(function() {
            instance.setData({
                'components.popup.ui.animateClassName': ANIMATE_CLASS_NAME,
                'components.popup.ui.modalAnimateClassName': MODAL_ANIMATE_CLASS_NAME
            })
        }, 100)
    }
}
