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
        unitIds: ['adunit-ba7b8d2fb76d80e4', 'adunit-38dac77234ec38a6', 'adunit-c782681025fd6789', 'adunit-2b5f0084f137824f', 'adunit-d7b9cbe1fddf121e', 'adunit-2da8fd1d9f0c14ea', 'adunit-86f281ad5914e7b0', 'adunit-771c23e17b7efa7d', 'adunit-bb0ace5b768d094e', 'adunit-2e6f87e5411fb62b'],
        indexNum: 0,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
              videoUrl:
                "https://tj-download.weiyun.com/ftn_handler/15f7349dba7fd3fc9d35480316725b8e7c2feda56312a2397d7bf5912cd314c0c44f9b689bb5ea71fd7e222bf7b3534bc569e4cc40416f085dbb7e1f4585ab42/880ad6bd-9342-42bf-a4bb-335a828eab1atmp_69518231f539ca951dfcc7f067d7d240.mp4?fname=880ad6bd-9342-42bf-a4bb-335a828eab1atmp_69518231f539ca951dfcc7f067d7d240.mp4"
            }
          }
        ]
      },
      {
        unitIds: ['adunit-feda5011874873b6', 'adunit-158f9ba9d8a17efd', 'adunit-2ecbbb8d9a9baa6c', 'adunit-849fa37b6f759659', 'adunit-81165735c25c8e44', 'adunit-16e1088ce22e77de', 'adunit-d76dc13d06dd605b', 'adunit-8363446d205805bd', 'adunit-c862f8d245fda077', 'adunit-af8be95a81757654'],
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
        unitIds: ['adunit-14b691e5c57844fd', 'adunit-d503f97c4678ece8', 'adunit-0748bdcd3c8e330e', 'adunit-2ebbb9e3dc9b8ed2', 'adunit-310b6fb5bd90b9c5', 'adunit-95926c7ca4d99c4f', 'adunit-7031caf79bae149f', 'adunit-18387fa54bcceb41', 'adunit-61bb4c91506b5ed4', 'adunit-c7af9b39f06ea43b'],
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
        unitIds: ['adunit-50450502fd2f0ef6', 'adunit-1c2999c6f39dbb9d', 'adunit-fe28c90054a9603d', 'adunit-a683af72afcb3619', 'adunit-4e8e1cf6a91daa19', 'adunit-0c1489a95e140458', 'adunit-6fc8782e10b5557f', 'adunit-1f78c5e0547aae9a', 'adunit-e91b1a52893ce4ca', 'adunit-9176a95211fa8413'],
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
    return function () {
      var context = this;
      var args = arguments;
      if (timer) clearTimeout(time);
      if (immediate) {
        //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
        var doNow = !timer;
        //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
        timer = setTimeout(function () {
          timer = null;
        }, delay);
        //立即执行
        if (doNow) {
          func.apply(context, args);
        }
      } else {
        timer = setTimeout(function () {
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
