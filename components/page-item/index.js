Component({
  properties: {
    title: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    imgUrl: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '../../../static/img/header.jpg', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    idNum:{
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '01', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },

  },
  data: {}, // 私有数据，可用于模版渲
  relations: {
    '../index-list/index': {
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
    navigateToDetail: function () {
      wx.navigateTo({
        url:  `/pages/item-detail/index?idNum=${this.data.idNum}`
      })
    }
  }
})
