if(typeof wx != 'undefined'){
    !wx.showToast && (wx.showToast = function() {});
    !wx.hideToast && (wx.hideToast = function() {});
}
