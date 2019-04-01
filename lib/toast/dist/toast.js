var toast = {
    data: {
        ui: {
            show: false,
            iconName: ''
        },
        model: {
            message: ""
        }
    },
    hide: function() {
        var self = this;
        wx.hideToast && wx.hideToast();

        self.setData({
            ui: {
                show: false,
                iconName: ''
            }
        });
    },
    show: function(options) {
        var self = this

        self.setData({
            ui: {
                show: true,
                iconName: options.iconName || ''
            },
            model: {
                message: options.message
            }
        });

        setTimeout(function() {
            self.setData({
                'ui.className': 'fadein'
            });
        }, 60);

        setTimeout(function() {
            self.hide();
        }, (options.delay || 2000));
    }
};

module.exports = toast;
