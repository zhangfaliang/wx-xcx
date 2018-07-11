// idnex
Page({
  data: {
    message: 'hello',
    array: [1, 2, 3, 4, 5],
    view:'app'
  },
  switch: function name(params) {
    
    this.setData({
      view:this.data.view=='app'?'webview':'app'
    })
    
  }
  
})