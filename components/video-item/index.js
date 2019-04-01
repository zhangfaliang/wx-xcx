Component({
  properties: {
    scrollTopNum: { // 属性名
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    videoUrl: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '../../../static/img/header.jpg', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    flagNum:{
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    danmuList:{
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ['4554','5555'], // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    idNum:{
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    

  },
  data: {}, // 私有数据，可用于模版渲
  relations: {
    '../video-list/index': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function(target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function(target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function(target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  methods: {
    // navigateToDetail: function () {
    //   wx.navigateTo({
    //     url:  `/pages/video-detail/index?idNum=${this.data.idNum}`
    //   })
    // }
  }
})
