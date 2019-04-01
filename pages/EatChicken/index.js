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
        isPlaying: false,
        headVideoInfo: {
          coverUrl:
            "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
          videoUrl:
            "https://d.pcs.baidu.com/file/800eadc8be8d1efef4c073ff772b4e2a?fid=2605574314-250528-635927860940891&rt=pr&sign=FDtAERVC-DCb740ccc5511e5e8fedcff06b081203-sq9uwhvRnz4S4GQtUQ78pTZrS48%3D&expires=8h&chkv=1&chkbd=1&chkpc=&dp-logid=2100964203140174839&dp-callid=0&dstime=1554098701&r=938149758&vip=0"
        }
      },
      {
        isPlaying: false,
        headVideoInfo: {
          coverUrl:
            "http://img5.imgtn.bdimg.com/it/u=3159449345,3781131544&fm=27&gp=0.jpg",
          videoUrl:
            "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
        }
      },
      {
        isPlaying: false,
        headVideoInfo: {
          coverUrl: "http://pic.uzzf.com/up/2017-9/20179259513989.png",
          videoUrl:
            "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
        }
      },
      {
        isPlaying: false,
        headVideoInfo: {
          coverUrl:
            "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
          videoUrl:
            "https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4"
        }
      }
    ],
    scrollTopNum: 0,
    indicatorDots: false, // 角标按钮
    vertical: true, //竖向
    autoplay: false, //自动播放
    circular: true, // 衔接滑动
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

    onPlay(e) {
      let idx = e.detail.index;
      let { videoList } = this.data;
      videoList.map((item, index) => {
        if (idx == index) {
          item.isPlaying = true;
        } else {
          item.isPlaying = false;
        }
      });
      console.log('---------onPlay-------------')
      this.setData({
        videoList: [...videoList]
      });
    },
    onPause(e) {
      let idx = e.detail.index;
      let { videoList } = this.data;
      videoList.map((item, index) => {
        if (idx == index) {
          item.isPlaying = false;
        }
      });
      this.setData({
        videoList: [...videoList]
      });
    }
  
});
