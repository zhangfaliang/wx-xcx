Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['my-class'],
  properties: {
    innerText: {
      type: String,
      value:'default value'
    }
  },
  data: {
    // 这里是一些组件内部属性
    someData: {},
    innerText:'这里是一些组件内部属性'
  },
  methods: {
    //这里是一个自定义方法
    customMethod:function (params) {
      
    }
  }
})