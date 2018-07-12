Page({
  data: {
    
  },
  tapName:function (params) {
      console.log(params);
      
  },
  handleTap1:function (params) {
      console.log('handleTap1');
      
  },
  handleTap2:function (params) {
    console.log('handleTap2');

  },
  handleTap3:function (params) {
    console.log('handleTap3');

  },
  touchstart1:function (params) {
      console.log('touchstart1');
      
  },
  touchstart2:function (params) {
    console.log('touchstart2');
  },
  captuer2:function (captuer2) {
    console.log('captuer2');
  },
  captuer1:function (params) {
    console.log('captuer1');
  }
})
// 事件绑定和冒泡
// 事件绑定的写法同组件的属性，以 key、value 的形式。

// key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。自基础库版本 1.5.0 起，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、、catch:touchstart。
// value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
// bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

// 如在下边这个例子中，点击 inner view 会先后调用handleTap3和handleTap2(因为tap事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发handleTap2，点击 outer view 会触发handleTap1。

//说明： target 和 currentTarget 可以参考上例中，点击 inner view 时，handleTap3 收到的事件对象 target 和 currentTarget 都是 inner，而 handleTap2 收到的事件对象 target 就是 inner，currentTarget 就是 middle。