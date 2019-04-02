Page({
  data: {
    movies: [
      {
        url: "../../static/img/eat.jpeg"
      },
      {
        url: "../../static/img/header.jpg"
      }
    ],
    bannerUrl: "",
    titleList: [
      {
        title: "新手吃鸡必看 绝地求生大逃杀生存指南",
        imgUrl:
          "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
        idNum: "01"
      },
      {
        title: "新手吃鸡，自定义操作",
        imgUrl:
          "http://img5.imgtn.bdimg.com/it/u=3159449345,3781131544&fm=27&gp=0.jpg",
        idNum: "02"
      },
      {
        title: "绝地求生刺激战场怎么瞄准",
        imgUrl: "http://pic.uzzf.com/up/2017-9/20179259513989.png",
        idNum: "03"
      },
      {
        title: "超级干货贴! 教你如何用手机操作稳吃鸡",
        imgUrl:
          "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
        idNum: "04"
      }
    ],
    videoList: [
      {
        indexNum: 0,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
              videoUrl:
              "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
            }
          }
        ]
      },
      {
        indexNum: 1,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img5.imgtn.bdimg.com/it/u=3159449345,3781131544&fm=27&gp=0.jpg",
              videoUrl:
                "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
            }
          }
        ]
      },
      {
        indexNum: 2,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl: "http://pic.uzzf.com/up/2017-9/20179259513989.png",
              videoUrl:
                "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
            }
          }
        ]
      },
      {
        indexNum: 3,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl:
                "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
            }
          }
        ]
      }
    ],
    hiddenflag: false,
    indicatorDots: false, // 角标按钮
    vertical: true, //竖向
    autoplay: false, //自动播放
    circular: true, // 衔接滑动
    interval: 2000,
    duration: 600,
    previousMargin: 60,
    nextMargin: 60,
    transformNum: 0,
    current: 0
  },
  debouncedebouce(func, delay, immediate) {
    var timer = null;
    return function() {
      var context = this;
      var args = arguments;
      if (timer) clearTimeout(time);
      if (immediate) {
        //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
        var doNow = !timer;
        //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
        timer = setTimeout(function() {
          timer = null;
        }, delay);
        //立即执行
        if (doNow) {
          func.apply(context, args);
        }
      } else {
        timer = setTimeout(function() {
          func.apply(context, args);
        }, delay);
      }
    };
  },
  processsSetData(params) {
    this.setData({
      ...params
    });
  },
  bindtransitionfn(e) {
  
  },
  bindchangeFn(e) {
   
  },
  bindanimationfinishFn(e) {
    this.debouncedebouce(this.processsSetData, 0)({
      current: e.detail.current
    });

  }
  
});
