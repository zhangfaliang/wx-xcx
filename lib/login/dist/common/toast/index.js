var toast = {
    hide:function(instance) {
        wx.hideToast && wx.hideToast();

        instance && instance.setData({
            'components.toast': {
                ui: {
                    show: false,
                    className: ''
                }
            }
        });
    },
    show:function(message, instance) {
        var self = this;
        instance && instance.setData({
            'components.toast': {
                ui: {
                    show: true
                },
                model: {
                    message: message
                }
            }
        });


        setTimeout(function(){
            instance && instance.setData({
                'components.toast.ui.className': 'fadein'
            });
        },60);

        setTimeout(function() {
            self.hide(instance);
        }, 2000);
    }
};

module.exports = toast;
