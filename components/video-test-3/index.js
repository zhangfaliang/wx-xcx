Component({
  properties: {
    isplaying: {
      type: Boolean,
      value: false,
      observer(newVal) {
        const timer = 1200;
        if (newVal && newVal === true) {
          setTimeout(() => {
            this.videoPlay();
          }, timer);
        } else {
          setTimeout(() => {
            this.videoPause();
          }, timer);
        }
      }
    },
    idx: {
      type: String
    },
    headVideoInfo: {
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {} // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    scrollTop: {
      type: String,
      value: "100rpx"
    },
    transformNum: {
      type: Number,
      value: 0
    },
    className: {
      type: String,
      value: "to_top"
    },
    indexNum: {
      type: Number,
      value: 0
    },
    current: {
      type: Number,
      value: 0
    }
  },
  data: {
    // headVideoInfo: {
    //     coverUrl: 'https://si.geilicdn.com/open813142332-560300000167c1b76d220a217216_740_737.jpg?w=800&h=800&cp=1',
    //     videoUrl: 'https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4',
    // },
    autoplay: false,
    controls: true,
    video: true,
    play: false,
    left: false,
    fullScreen: false,
    transformNumChangeFlag: false
  },

  ready() {
    this.initData();
    this.subscribePosition();
  },

  methods: {
    initData() {
      let videoContext = wx.createVideoContext("item-head-video", this);
      this.setData({
        videoContext,
        transformNum: 0,
        transformNumChangeFlag: true
      });
    },

    _selectedChange(newVal, oldVal) {
      if (newVal && oldVal && newVal !== oldVal && newVal === false) {
        this.videoPause();
      }
    },

    subscribePosition() {
      let that = this;
      const { idx } = this.data;
      wx.createIntersectionObserver(that)
        .relativeToViewport()
        .observe(".video--wrap", res => {
          if (res && res.intersectionRatio > 0) {
          } else {
            that.triggerEvent("onpause", { index: idx });
          }
        });
    },
    processSetData(videoContext, play, autoplay, key) {
      this.setData(
        {
          videoContext,
          play,
          autoplay
        },
        () => {
          clearInterval(this.timer);
          videoContext[key]();
        }
      );
    },
    delayVideoContext({ videoContext, play, autoplay, key }) {
      if (this.timer) clearInterval(this.timer);
      if (!videoContext) {
        this.timer = setInterval(() => {
          let videoContext = wx.createVideoContext("item-head-video", this);

          if (videoContext) {
            this.processSetData(videoContext, play, autoplay, key);
          }
        }, 500);
      } else {
        clearInterval(this.timer);
        this.processSetData(videoContext, play, autoplay, key);
      }
    },
    videoPlay() {
      const { videoContext } = this.data;
      this.delayVideoContext({
        videoContext,
        play: true,
        autoplay: true,
        key: "play"
      });
      // this.setData(
      //   {
      //     play: true,
      //     autoplay: true
      //   },
      //   () => {
      //     videoContext.play();
      //   }
      // );
    },
    videoPause() {
      const { videoContext } = this.data;
      this.delayVideoContext({
        videoContext,
        play: false,
        autoplay: false,
        key: "pause"
      });

      // this.setData(
      //   {
      //     play: false,
      //     autoplay: false
      //   },
      //   () => {
      //     videoContext.pause();
      //   }
      // );
    },
    controlVideo() {
      const { idx } = this.data;
      this.triggerEvent("onplay", { index: idx });
    },
    handleVideoEnded() {
      const { idx } = this.data;
      this.triggerEvent("onpause", { index: idx });
    }
  }
});
