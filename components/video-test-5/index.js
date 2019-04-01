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
    data: {
        videoList: [
            'https://si.geilicdn.com/open813142332-560300000167c1b76d220a217216_740_737.jpg?w=800&h=800&cp=1',
            'https://si.geilicdn.com/open813142332-560300000167c1b76d220a217216_740_737.jpg?w=800&h=800&cp=1',
            'https://si.geilicdn.com/open813142332-560300000167c1b76d220a217216_740_737.jpg?w=800&h=800&cp=1',
        ],
    },

    methods: {},
});
